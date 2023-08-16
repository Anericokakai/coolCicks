import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore}  from "redux-persist"
import fetchApiSlice from '../slices/fetchApiSlice'
import fetchFiltered from '../slices/fetchFiltered'
import thunk from 'redux-thunk'
const persisConfig= {
    key:'root',
    storage,
    
}

const persistedReducerForApi=persistReducer(persisConfig,fetchApiSlice)
const secondPersist=persistReducer(persisConfig,fetchFiltered)

 export const store= configureStore({
    reducer:{
        categoryApi:persistedReducerForApi,
    filteredApi:secondPersist},
    middleware:[thunk]
})



