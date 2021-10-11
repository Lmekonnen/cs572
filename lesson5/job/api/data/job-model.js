const mongoose=require("mongoose");
const locationSchema=new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
})
const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    salary:Number,
    description:String,
    experience:String,
    skills:[String],
    postDate:Date,
    location:locationSchema

});
mongoose.model("Job",jobSchema,"jobs")