
const express=require("express")

const path=require("path")
const db=require("./api/data/dbconnection").open()
const path=require("./api/routes")
const app=express()
app.set("port",5353)

app.use(function(req,res,next){
    console.log(req.method,req.url)
    next()
})
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:false}))  //dont send response so we dont use next
app.use(express.json({extended:false}))
app.use("/api",routes)
const server= app.listen(app.get("port"), function() {  //setting up a server
   
    console.log("listening to port"+server.address().port)
});
module.exports=router;