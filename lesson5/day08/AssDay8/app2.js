
require("dotenv").config({"path":".env"})
const express = require("express");
const path = require("path");
require("./api/data/db")
const route = require("./api/routes");

const app = express();
app.set("port",process.env.PORT);

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use("/api",route);

var server = app.listen(app.get("port"),function(){
    var port = server.address().port;
    console.log("Listening to port "+port);
});