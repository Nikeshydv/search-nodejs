// const express=require("express");

// const route=express.Router();
// const stuController=require("../controllers/studentController");


// route.get("/stuinfo",stuController.stuInformation);


// module.exports=route;


const express=require("express");

const router=express.Router();
const stuController=require("../controllers/studentController");


router.get("/stuinfo",stuController.stuInformation);
router.post("/datasave",stuController.studataSave)
router.post("/search",stuController.empSearch);
router.post("/searchboth",stuController.empSearchboth)

module.exports=router;

