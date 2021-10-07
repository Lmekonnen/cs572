//connect to mongo db using mongoose
//we wanna know when are we connected
const mongoose=require("mongoose")
require("./games-model.js");
const dbName="newTestDB"
const dburl="mongodb://localhost:27017/"+dbName
mongoose.connect(dburl)
mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to",dbName);
})
mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected to");
})
mongoose.connection.on("error",function(err){
    console.log("Mongoose errror"+err);
})
process.on("SIGINT",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose dicoonected");
        process.exit(0)
    })
})
process.on("SIGTERM", function() { 
    mongoose.connection.close(function() { 
        console.log("Mongoose disconnected by app termination"); 
        process.exit(0);
}); 
process.on("SIGUSR2",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose dicoonected by app restart");
        process.kill(process.pid,"SIGUSR2")
    })
});
});