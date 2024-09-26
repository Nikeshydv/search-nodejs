const express=require("express");
const router=express.Router();

const stucontroller=require("../controllers/studentController");

router.get("/stuinfo",stucontroller.stuinfo);
router.get("/stuFees",stucontroller.stuFees);
router.get("/stuResult",stucontroller.stuResult);
router.get("/stuSubject",stucontroller.stuSubject)

module.exports=router;