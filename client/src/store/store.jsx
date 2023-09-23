import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import fetchApiSlice from "../slices/fetchApiSlice";
import fetchFiltered from "../slices/fetchFiltered";
import FetchTrendingsSlice from "../slices/FetchTrendingsSlice";
import featuredSlice from "../slices/featuredSlice";
import thunk from "redux-thunk";
const persisConfig = {
  key: "root",
  storage,
};

const persistedReducerForApi = persistReducer(persisConfig, fetchApiSlice);
const secondPersist = persistReducer(persisConfig, fetchFiltered);
const trendspersist = persistReducer(persisConfig, FetchTrendingsSlice);
const featuredPersist=persistReducer(persisConfig,featuredSlice)

export const store = configureStore({
  reducer: {
    categoryApi: persistedReducerForApi,
    filteredApi: secondPersist,
    trendsApi: trendspersist,
    featuredApi:featuredPersist,
  },

  middleware: [thunk],
});
