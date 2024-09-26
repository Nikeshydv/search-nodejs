const stuinfo=(req,res)=>{
    res.send("<h1> this is the stident informaation ")
}

const stuFees=(req,res)=>{
    res.send("<h1> this is the student fees")
}

const stuResult=(req,res)=>{
    res.send("<h1> this is the student result")
}

const stuSubject=(req,res)=>{
    res.send("<h1> this is the subject part")
}

module.exports={
    stuinfo,
    stuFees,
    stuResult,
    stuSubject
}