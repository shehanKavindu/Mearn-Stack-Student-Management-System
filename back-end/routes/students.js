const routes = require("express").Router();
const { Router } = require("express");
let Student = require("../models/student");

Router.routes("../add").post((req,res)=>{
    const name = req. body. name;
    const age = Number(req .body . age);
    const gender = req.body.gender;
    
      
    const newStudent = new Student({
        name,
        age,
        gender
    })
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })

})
routes .Router("/").get((req,res)=>{
   Student.find().then((Students)=>{
    res.json(Students)
 }).catch((err)=>{
    console.log(err)

 })

})
Router.routes("/Update/:id ").put(async(req,res)=>{
    let userId = req .Params.id;
    const {name,age,gender} = req.body;
    const UpdateStudent = {
        name,
        age,
        gender
    }

    const Update = await Student.findByIdAndUpdate(userId,UpdateStudent)
    .then(()=>{
        res.status(200).send({status: "User Updateed" , user: Update})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})

Router.routes("/Delete/:id ").delete(async(req,res)=>{
    let userId = req.Params.id;
    await Student . findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "User Deleted"}); 
      })  .catch((err)=> { 
        console.log(err.message); 
     
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
 

    })
    Router.routes("/get/:id").get(async(req,res))
    Router.routes("/get/:id").get(async(req,res)) 
    




module.exports=routes;
module.exports=routes;

  

