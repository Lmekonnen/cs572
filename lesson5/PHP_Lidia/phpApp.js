
const express = require("express");
const path = require("path");
require("./api/data/dbConnection");
const route = require("./api/routes");

const app = express();
app.set("port",3000);

app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

app.use("/api",route)

const server = app.listen(app.get("port"),function(){
    var port = server.address().port;
    console.log("Server listening via port",port);
});