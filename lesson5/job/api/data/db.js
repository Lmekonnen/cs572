const mongoose=require("mongoose")
require("./job-model.js")
const dbName="jobSearching"
const dbUrl="mongodb://localhost:27017/"+dbName;
mongoose.connect(dbUrl)
mongoose.connection.on("connnected",function(){
    console.log("mongoose connected", dbName);
})
mongoose.connection.on("disconnected",function(){
    console.log("mongoose disconnnected",dbName);
})
mongoose.connection.on("error",function(err){
    console.log("mongoose error"+err);
})
process.on("SIGNIT",function(){
    mongoose.connection.close(function(){
        console.log("mongoose disconnected");
        process.exit(0)
    })
})
process.on("SIGTERM",function(){
    mongoose.connection.close(function(){
        console.log("mongoose disconnnected by app termination");
        process.exit(0)
    })
process.on("SIGUSR2",function(){
    mongoose.connection.close(function(){
        console.log("mongooose disconnnected by app restart");
        process.kill(process.pid,"SIGUSR2")
    })
})
})