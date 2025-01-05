import { categoryCollection } from "../../database/schemas/categorySchema.js";
import { shoeCollection } from "../../database/schemas/ShoeSchema.js";

// !MIDDLE WARE TO HANDLE THE  FILTERING API
export const filters_middleware = async (req, res, next) => {
  try {
    // ! randomly select the category and color from the data base

    const randomColorFromDb = await shoeCollection.distinct("color");

    let randomColors = [];

    // !loop throug the random colors
    randomColorFromDb.forEach((single_color) => {
      randomColors.push(single_color);
    });

    // ! categories randomly selected
    const randomcategoriesFromDb = await categoryCollection.distinct(
      "category_Name"
    );

    // !loop through the categories
    let randomCategory = [];
    randomcategoriesFromDb.forEach((single_category) => {
      randomCategory.push(single_category);
    });

    const randomCategoryNumber = Math.floor(
      Math.random() * randomCategory.length
    );

    const randomColorNumber = Math.floor(Math.random() * randomColors.length);
    const header = req.query.category || randomCategory[randomCategoryNumber];
    const priceFilter = req.query.price || 1;

    const companyFilter = req.query.company || "nike";

    const colorFilter = req.query.color || randomColors[randomColorNumber];
    const filterc = randomColors[randomColorNumber];

    const data = await shoeCollection.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "categoryData",
        },
      },
      {
        $match: {
          "categoryData.category_Name": header,
        },
      },
      {
        $sort: {
          price: priceFilter,
        },
      },
      {
        $project: {
          categoryData: 0,
        },
      },
    ]);

    res.status(200).json(data);

    // !filter the data  fill the pages of the same categories
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
};

// !filter by trending in the  shoe collection

export const FilterbyTrending = async (req, res, next) => {
  try {
    // !destructure the heade
    const category = req.query.category;
    // !filter random tags from the database to display on the trending page

    const randomFilter = await shoeCollection.aggregate([
      {
        // !is used to create new documents of the tag field only
        $unwind: "$tags",
      },
      {
        $group: {
          // !we recollect all the documents into one single document but now we remove the id
          _id: null,
          // !we create a new array called unique tags then use $addti set to remove repeating elements
          uniqueTags: { $addToSet: "$tags" },
        },
      },
      {
        $project: {
          _id: 0,
          uniqueTags: 1,
        },
      },
    ]);

    // ! An array of unique tags
    const tagsFroDb = randomFilter[0].uniqueTags;

    // !randomly select a tag to diplay under each category
    const randomly_selectedTag = Math.floor(Math.random() * tagsFroDb.length);

    const filter = tagsFroDb[randomly_selectedTag];

    const data = await shoeCollection.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "filtered_data",
        },
      },
      {
        $match: {
          "filtered_data.category_Name": category,
          tags: filter,
        },
      },
      {
        $project: {
          filtered_data: 0,
        },
      },
    ]);

    res.status(200).json({ data, filterTag: filter });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
};
export const filterTrendingMidddleWare = async (req, res, next) => {
  try {
    const category = req.query.category;

    const data = await shoeCollection.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "trending",
        },
      },
      {
        $match: {
          "trending.category_Name": category,
          tags: "trending",
        },
      },
    ]);
    return res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
};
