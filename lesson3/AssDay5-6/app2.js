const express = require("express");
require("./api/data/dbConnection")
const route = require("./api/routes");

const app = express();
app.set("port",5353);

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use("/api",route);

var server = app.listen(app.get("port"),function(){
    console.log("Listening to port "+server.address().port);
});