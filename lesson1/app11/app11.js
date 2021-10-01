const express=require("express");
const path=require("path")
const app=express();
app.set("port",3000);
app.get("/",function(req,res){
    console.log("get recieved")
    res.status(404).send("Recieved your get request");
});
app.get("/json",function(req,res){
    console.log("json recieved");
    console.log("get recieved");
    res.status(200).json({"jsonData":true});
});
app.get("/file",function(req,res){
    console.log("file recieved");
    console.log(__dirname);
    console.log("app11.js");
    // if()
    // "\\"
    // "/"
    res.status(200).sendFile(path.join(__dirname+"app11.js"));
});
const server=app.listen(app.get("port"),function(){
    console.log=("listening to port",server.address().port);
    
});