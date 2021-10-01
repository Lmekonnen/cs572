const express=require("express")
const path=require("path")
const path=require("./routes")
const app=express()
app.set("port",5353)
// app.get("/",function(req,res){
//     console.log("get recieved")
//     res.status(200).sendFile(path.join(__dirname,"public","index.html"))
// })
app.use(express.static(path.join(__dirname,"public")))
app.use("/public",express.static(path.join(__dirname,"public")))
app.use("/",routes)
const server= app.listen(app.get("port"), function() {  //setting up a server
   
    console.log("listening to port"+server.address().port)
});
module.exports=router;