
const stuModel=require("../models/studenetModels");

const stuInformation=(req,res)=>{
    res.send(" this is the student informaation");
};




const studataSave=(req,res)=>{
    const {rollno,name,city}=req.body;

    const student=new stuModel({
        rollno:rollno,
        name:name,
        city:city
    })
    student.save();
    res.send("Data save succefully");
}



const empSearch=async(req,res)=>{
    const {employeeno} = req.body;
    const data=await stuModel.find({"empno":employeeno})
    console.log(data);
    res.send(data);
    
}


const empSearchboth=async(req,res)=>{
    const {name,city} = req.body;
    const daata=await stuModel.find({$and:[{"name":name},{"city":city}]})
    console.log(daata);
    res.send(daata);

}




module.exports={
    stuInformation,
    studataSave,
    empSearch,empSearchboth
}