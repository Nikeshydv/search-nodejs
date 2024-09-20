
const express=require("express");
const router=express.Router();

router.get("/teachersub",(req,res)=>{
    res.send("Teacher Sub Page");
})

router.get("/teacherdepartment",(req,res)=>{
    res.send("teacher department")

})

router.get("/teachersalary",(req,res)=>{
    res.send("teacher salary")
})



module.exports=router;