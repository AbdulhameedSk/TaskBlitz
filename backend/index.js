const express = require('express');
const {create}=require("./types");
const {todo}=require("./db.js")
const app=express();
app.use(express.json());

app.post("/todos",async(req,res)=>{
    const task=req.body;
    const check=create.safeParse(task); 
    if(!check){
        res.status(411).json({msg:"Invalid Inputs"})
        return;
    }
    //Import to DataBase
    //todo.push(check.data);
    await todo.create({
        title:task.title,
        description:task.description,
        completed:false
    })
    res.json({
        msg:"ADDED"
    })
})

app.get("/todos",async(req,res)=>{
    const tod=await todo.find({})
    res.json({
        tod
    })
})

app.put("/completed",async(req,res)=>{
    const task=req.body;
    const check=create.safeParse(task); 
    if(!check){
        res.status(411).json({msg:"Invalid Inputs"})
        return;
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"COMPLETED"
    })
})

app.listen(3000);