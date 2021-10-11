const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    name:String
});
mongoose.model("User",userSchema,"users")  //compiling the model means setting hashmap set

