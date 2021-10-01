
const express=require("express")

const path=require("path")
const routes=require("./api/routes")
const app=express()
app.set("port",5353)

app.use(function(req,res,next){
    console.log(req.method,req.url)
    next()
})
app.use(express.static(path.join(__dirname,"public")))
app.use(routes)
const server= app.listen(app.get("port"), function() {  //setting up a server
   
    console.log("listening to port"+server.address().port)
});
