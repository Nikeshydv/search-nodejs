const express=require("express")

const router=express.Router();

router.get("/stuinfo",(req,res)=>{
    res.send("student info");
})
router.get("/stufee",(req,res)=>{
    res.send("student fee");
})

router.get("/stuclass",(req,res)=>{
    res.send("student class")

})

router.get("/sturesult",(req,res)=>{
    res.send("student result")
})




module.exports=router