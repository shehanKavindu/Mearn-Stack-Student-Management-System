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
Router.routes("/").post((req,res)=>{
    
})

module.exports = Router;

