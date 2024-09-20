// const http=require("http");

// http.createServer(function(req,res){
//     res.write("<h1> welcome to first program!</h1>")
//     res.end();
// }).listen(8000);


// const http=require("http");

// http.createServer((req,res)=>{
//     res.write("hello friend")
//     res.end();
// }).listen(5000);


const express=require("express")
const PORT=8000;
const app=express();
const stuRoute=require("./routes/studentRoutes")
const tecRoute=require("./routes/teacherRoutes")

app.get("/",(req,res)=>{
    res.send("<h1>hello world</h1>");
})

app.use("/student",stuRoute)
app.use("/teacher",tecRoute);

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})


