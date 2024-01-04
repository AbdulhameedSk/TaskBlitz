const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abdulhameed:abdulhameed@cluster0.6eiuqhf.mongodb.net/todos")

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoschema);
module.exports={todo}