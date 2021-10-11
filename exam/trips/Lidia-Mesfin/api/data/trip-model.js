const mongoose=require("mongoose");

const tripSchema=new mongoose.Schema({
    bikeid:{
        type:String,
        required:true
    },
    starttime:Date,
    usertype:String,

    

});
mongoose.model("Trip",tripSchema,"trips")