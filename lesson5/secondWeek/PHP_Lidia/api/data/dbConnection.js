require("dotenv").config({"path":".env"})
const mongoose = require("mongoose");

const dbName = process.env.dbName;
// const dbUrl ="mongodb://localhost:27017/"+dbName;
const dburl=process.env.dbUrl+dbName;
require("./books-model");

mongoose.connect(dburl);

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to",dbName);
});

mongoose.connection.on("disconnected",function(){
console.log("Mongoose disconnected");
});

mongoose.connection.on("error",function(err){
console.log("Mongoose connection error"+err);
});

process.on("SIGINT",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});

process.on("SIGTERM",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});

// process.on("SIGUSR2",function(){
//     mongoose.connection.close(function(){
//         console.log("Mongoose disconnected by app restart");
//         process.kill(process.pid,"SIGUSR2");
//     })
// })