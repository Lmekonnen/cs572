const mongoose = require("mongoose");


const publisherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true},
    publishers: [publisherSchema]
})

mongoose.model("book",bookSchema,"novel");