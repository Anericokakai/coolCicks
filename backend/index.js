import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  deepFilters,
  default_shopingRoutes,
  featured_route,
  fetchDetailed_category,
  fetchTrendingData_api,
  fetch_by_trending_only,
  searchByInput,
  SearchHistoryApi,
} from "./routes/homeRoutes.js";
import { connectToDataBase } from "./database/connection.js";
import { addShoeRoute } from "./routes/Admin/AddShoeRoute.js";
import { LoginRoute, RegisterRoute } from "./routes/RegistrationRoutes.js";
import { add_category } from "./routes/Admin/AdminRoutes.js";

// ! START OF CONFIGURING FILES
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// !END OF CONFIGURING FILES

// !  CONNECT TO THE DATABASE & PORT LISTENING
connectToDataBase()
  .then(() => {
    console.log("database connected");
  })
  .then(() => {
    app.listen(7001, () => {
      console.log("app listening at port 7001");
    });
  })
  .catch((err) => {
    console.log("failed to connect to the database");
    console.log(err);
  });

// !ROUTES CONFIGURING  API END POINTS

// todo  API END POINTS FOR GENERAL PRODUCTS AND CATEGORIES

app.use(default_shopingRoutes);
app.use(fetchDetailed_category);

// !filter api
app.use(fetchTrendingData_api);
app.use(fetch_by_trending_only);
app.use(SearchHistoryApi);
app.use(searchByInput);
app.use(deepFilters);

// ! REGISTRATION ROUTES
app.use(RegisterRoute);
app.use(LoginRoute);

// !Admin routes
app.use(addShoeRoute);
app.use(add_category);
app.use(featured_route);
