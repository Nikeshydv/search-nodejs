const express=require("express");
const app=express();


const mongoose=require("mongoose");

const stuRoute=require("./routes/studentRoutes");
mongoose.connect("mongodb://127.0.0.1.:27017/nikesh").then(()=>{console.log("working")});


    app.use("/students",stuRoute);

    app.listen(8000,()=>{
        console.log("server is running on port 8000");
    })