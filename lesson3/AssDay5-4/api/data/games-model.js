const mongoose=require("mongoose");
const publisherSchema=new mongoose.Schema({
    name:String,
    address:String
})
const gameSchema=new mongoose.Schema({
    title:{
        type:String,
   
        unique:true
    },
    price:Number,
    minage:Number,
    designers:[String],
    rate:{
        type:Number,
        min:1,
        max:5,
        "default":1},
        publisher:publisherSchema
});
mongoose.model("Game",gameSchema,"games")  //compiling the model means setting hashmap set

