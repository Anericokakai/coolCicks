import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore}  from "redux-persist"
import fetchApiSlice from '../slices/fetchApiSlice'

const persisConfig= {
    key:'root',
    storage,
    whitelist:['fetchApi']
}

const persistedReducer=persistReducer(persisConfig,fetchApiSlice)

 export const store= configureStore({
    reducer:{
        categoryApi:persistedReducer},
    middleware:[...getDefaultMiddleware()]
})


