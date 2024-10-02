
const express=require("express");
const app=express();

const sturoute=require('./routes/studentRoutes');
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nikesh").then(()=>{
    console.log("succefully connected")

});




app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))
app.use("/student",sturoute);

app.listen(8000,()=>{
    console.log("server is running on port 8000");
})

