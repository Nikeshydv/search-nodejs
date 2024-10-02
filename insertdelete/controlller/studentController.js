const stuInformation=(req,res)=>{
    res.send("this is the student information");
}

const studentSave=(req,res)=>{
    const{rollno,name,city}=req.body;

    const student=new studentModel({
        rollno:Number,
        name:String,
        city:String

    })
        res.send("student saved");
        res.send("data save succefully");
        

       
}
module.exports={
    stuInformation
}