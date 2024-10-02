const express=require("express");
const app=express();
const mongoose=require("mongoose");



const stuRoute=require("../routes/studentRoutes");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/abishek");
app.use("/student",stuRoute);


app.use(bodyParser.json());



app.use(bodyParser.urlencoded({extended:true}))

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})