import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
import db from "./config/database.js"
import allRoutes from "./routes/allRoutes.js"



dotenv.config();
const app= express();

// using app instances
app.use(bodyParser.json())

// Testing the database
try{
    await db.authenticate()
    console.log("Databse connection has been established successfully...")
}
catch(error){
    console.log("Unable to connect to the database:", error)
}


app.get('/',(req,res)=>res.send(`<h1 style="text-align: center;font-size:100; color: yellow; margin-top: 20vh">Welcome to my Library!</h1>`))


// Book routes
app.use('/',allRoutes)

const PORT = process.env.PORT 
const HOST =process.env.HOST 
app.listen(PORT,console.log(`server started on: http://${HOST}:${PORT}`))



export default app;