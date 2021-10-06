const mongoose=require("mongoose");
const reviewSchema=new mongoose.Schema({
    name:String,
    review:String,
    date:{
        type:Date,
        default:Date.now
    }
})
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
        publisher:publisherSchema,
        reviews: [reviewSchema]
});
mongoose.model("Game",gameSchema,"games")  //compiling the model means setting hashmap set

