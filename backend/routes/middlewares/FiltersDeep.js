import { categoryCollection } from "../../database/schemas/categorySchema.js";
import { shoeCollection } from "../../database/schemas/ShoeSchema.js";

export const filterDeepMiddleware = async (req, res, next) => {
 try {
  const id = req.query.id;
  const priceFilter = req.query.price||1;

  const companyFilter = req.query.company;
  const colorFilter = req.query.color;
 

  const categoryName = await categoryCollection.findById(id);
  
  if (colorFilter && !priceFilter && !companyFilter && id) {
    const data = await shoeCollection.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "filters",
        },
      },
      {
        $match: {
          $and: [
            { "filters.category_Name": categoryName.category_Name },
            { color: `${colorFilter}` },
          ],
        },
      },
    ]);

    console.log(data);
    res.status(200).json({ data });
  } else if (priceFilter && !colorFilter && !companyFilter && id) {
    const data = await shoeCollection
      .find({ $and: [{ categoryId: id }] })
      .sort({
        price: priceFilter,
      });

    res.status(200).json({ data });
  } else if (companyFilter && !priceFilter && !colorFilter && id) {
    const data = await shoeCollection.find({
      $and: [{ categoryId: id }, { ShoeBrand: companyFilter }],
    });
    res.status(200).json({ data });
  } else if (priceFilter && colorFilter) {
    const data = await shoeCollection
      .find({ $and: [{ categoryId: id }, { color: colorFilter }] })
      .sort({
        price: priceFilter,
      });
    res.status(200).json({ data });
  } else if (priceFilter && colorFilter && companyFilter && id) {
    const data = await shoeCollection
      .find({
        $and: [
          { categoryId: id },
          { color: colorFilter },
          {
            ShoeBrand: companyFilter,
          },
        ],
      })
      .sort({
        price: priceFilter,
      });
    res.status(200).json({ data });
  }
 } catch (error) {
  res.status(500).json({message:"internal server error",error:error})
 }
};
