const mongoose=require("mongoose");
const courseSchema=new mongoose.Schema({
    name:String,
    Grade:String
})
const studentSchema=new mongoose.Schema({
    name:String,
    courses:[courseSchema]
   
});
mongoose.model("Student",studentSchema,"student")  //compiling the model means setting hashmap set (schema and collection)

