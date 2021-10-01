
const express=require("express")
const path=require("path")
const path=require("./routes")
const app=express()
app.set("port",5353)
// app.use("/public",express.static(path.join(__dirname,"public")))
app.use(function(req,res,next){
    console.log(req.method,req.url)
    next()
})
app.use(express.static(path.join(__dirname,"public")))
// app.get("/json", function(req, res) {
//     console.log("JSON request received");
//     res.status(200).json({"jsonData": true}); })
// app.get("/file", function(req, res) { 
//     console.log("File request received");
//     res.status(200).sendFile(path.join(__dirname, "app13.js")); })
app.use("/api",routes)
const server= app.listen(app.get("port"), function() {  //setting up a server
   
    console.log("listening to port"+server.address().port)
});
module.exports=router;