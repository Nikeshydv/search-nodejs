const express=require("express");

const route=express.Router();
const stuController=require("../controllers/studentController");


route.get("/stuinfo",stuController.stuInformation);


module.exports=route;