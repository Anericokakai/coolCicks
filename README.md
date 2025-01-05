# cool kicks

---

**_Cool kicks is a full stack e-commerce web application d_**

1. ## Technologies used in cool kicks

> Cool kicks uses node js as the server side language and react as the front end , it also uses MongoDb database under the free instance

## how to access the cool kicks api's

> cool kicks has several apis which allows you to fetch data under different circumstances,it also allows you to filter the data based on different aspects such as category, shoes color ,highest price and lowest price

---

## examples of cool kicks Api that you can use for free

# 1. categories api

1 .**_To fetch categories under cool Kicks_**

> the first api is the one to fetch all the shoe categories in cool kicks web application. you can choose either to use the internal `fetch()`function or `Axios ` to fetch data under categories

## fetch categories function example in javascript using axios

```javascript
//   function to fetch data under categories
const fetchData_Under_categories = async () => {
  const response = await axios.get(
    `http://localhost:7001/api/coolcicks/v1/categories`
  );
  return response.data;
};
// CALL THE FUNCTION

fetchData_Under_categories().then((data) => {
  console.log(data);
});
```

## fetch data under categories using fetch function

```javascript
const fetchData_Under_categories = async () => {
  const response = fetch(`http://localhost:7001/api/coolcicks/v1/categories`);
  return response;
};

// call the function
fetchData_Under_categories()
  .then((data) => {
    return data.json();
  })
  .then((results) => {
    console.log(results);
  });
```

> the above functions are used to fetch all the categories of shoes available in cool Kicks without the actual shoes then we can use the categories to filter all the shoes under the same categories .The first one uses axios while the second one uses internal fetch function in java script

### response example from fetching data under categories

```javascript
{data: Array(4), colors: Array(11)}
```

> data is the category while colors are all the shoe colors available in the shoe collection . We can use the colors to filter our shoe collection as we shall see later in the documentation

---

# 2. single category data api

## example of a function to fetch all the shoes under a certain category using axios

```Javascript
 const fetch_Shoes_under_Category= async (parameter) => {
    const response = await axios.get(
      `http://localhost:7001/api/coolcicks/v1/categoryProduct?category=${parameter}`
    );
    return response.data;
  }

//   how to call the function
// we pass the the category name as the parameter in the function


fetch_Shoes_under_Category("teens").then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
```

> remember if you are using react to call the function in a useEffect to prevent infinite loops

## fetching data under categories using fetch function

> Apart from axios we can use the internal javascript fetch function to fetch our data here is an example

```javascript
const fetch_Shoes_under_Category = async (parameter) => {
  const response = await fetch(
    `http://localhost:7001/api/coolcicks/v1/categoryProduct?category=${parameter}`
  );
  return response;
};

//    CALL THE FUNCTION
fetch_Shoes_under_Category("teens")
  .then((data) => {
    return data.json();
  })
  .then((results) => {
    console.log(results);
  });
```

## example of the json response using fetch

```javascript
{data: Array(10), filterc: 'green'}
```

---

# 3. trends Api

## fetch trending data under categories using axios

> we can use the axios to fetch all the shoes data that are trending under a certain category by passing the category that we want to fetch the trending shoes in our query parameter in the following api

```javascript
const fetchTrends = async (category) => {
  const res = await axios.get(
    `http://localhost:7001/api/coolciks/v1/fetchByTrend?category=${category}`
  );
  return res.data;
};

//   call the function

fetchTrends("teens")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

## fetch trending shoes using fetch

> Here is an example using fetch method in javascript to find all the trending data under a certain category

```javascript
const fetchTrends = async (category) => {
  const res = await fetch(
    `http://localhost:7001/api/coolciks/v1/fetchByTrend?category=${category}`
  );
  return res;
};
//   CALL THE FUNCTION
fetchTrends("teens")
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    console.log(result);
  });
```

## example of the json response

```javascript
{
  data: Array(10);
}
```

# 4. FIlters api

> The following api is use to filter all the data in the shoe collection base on either the price , color or company name

- parameters to pass in the query
  > we can pass several parameters to the apis to find data based on our parameters

## filter by price parameter

> to filter by the highest or lowest price we use pass -1 to filter by the highest price and 1 to filter by the lowest price

> from the categories api we are able to find the category_id from the response we use the category_id as the first parameter which is accessible from the category api results then the price parameter is either 1 or -1

**_Example of a filter by color api_**

```javascript
// the api takes in two arguments, the category id and the price filter
const filterByHighestPrice = async (catId, price) => {
  const results = await axios.get(
    `http://localhost:7001/api/coolcicks/v1/filter_deep?id=${catId}&price=${price}`
  );
  return results.data;
};

// CALL THE FUNCTION PASSING THE ID AND THE PRICE FILTER
filterByHighestPrice("650dcb5f99b694d1bddce33f", -1).then((response) => {
  console.log(response);
});
```

> the above api filters the shoes based on the category and price

# filter by color api

> to filter by color ,we need one of the colors from the category api also then we can pass the the category id ,color in the api parameters

**_Example of a filter by color Api_**

```Javascript

const filterByColor=async(catId,color_filter)=>{
    const result= await axios.get(`http://localhost:7001/api/coolcicks/v1/filter_deep?id=${catId}&color=${color_Filter}`)
return results.data
}

// CALL THE FUNCTION

filterByColor("650dcb5f99b694d1bddce33f","red").then(response=>{
    console.log(response);
})
```

# filter by both price and color

> to filter by both price and color we can pass the filters as the parameters in our api

**_Example of a filter by color and price in javascript_**

```javascript
const filter_By_color_Price=async(catId,selectedPriceFilter,color_Filter)=>{
    const response= await axios.get(`http://localhost:7001/api/coolcicks/v1/filter_deep?id=${catId}&price=${selectedPriceFilter}&color=${color_Filter}`)
}

filter_By_color_Price("650dcb5f99b694d1bddce33f",-1,"red')
```

# collaborating to the project

> To collaborate to the project you need to have
