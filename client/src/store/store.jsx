import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore}  from "redux-persist"
import fetchApiSlice from '../slices/fetchApiSlice'
import fetchFiltered from '../slices/fetchFiltered'
const persisConfig= {
    key:'root',
    storage,
    whitelist:['fetchApi']
}

const persistedReducerForApi=persistReducer(persisConfig,fetchApiSlice)

 export const store= configureStore({
    reducer:{
        categoryApi:persistedReducerForApi,
    filteredApi:fetchFiltered},
    middleware:[...getDefaultMiddleware()]
})



