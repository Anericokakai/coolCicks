import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { default_shopingRoutes } from './routes/homeRoutes.js'
import { connectToDataBase } from './database/connection.js'


// ! START OF CONFIGURING FILES
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// !END OF CONFIGURING FILES

// !  CONNECT TO THE DATABASE & PORT LISTENING 
 connectToDataBase().then(
    app.listen(7001,()=>{
        console.log("database connected")
        console.log("app listening at port 7001")
    })
 ).catch(err=>{
    console.log("failed to connect to the database")
    console.log(err)
 })

// !ROUTES CONFIGURING  API END POINTS

app.use(default_shopingRoutes)