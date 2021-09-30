
const express=require("express")

const path=require("path")
const path=require("./routes")
const app=express()
app.set("port",5353)

app.use(function(req,res,next){
    console.log(req.methos,req.url)
    next()
})
app.use(express.static(path.join(__dirname,"public")))
app.use("/api",routes)
const server= app.listen(app.get("port"), function() {  //setting up a server
   
    console.log("listening to port"+server.address().port)
});
module.exports=router;