

const mongoose=require("mongoose");

const stuSchema=new mongoose({
    rollno:Number,
    name:String,
    city:String
})

module.exports=mongoose.model("student",stuSchema);69