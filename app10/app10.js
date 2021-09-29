const express=require("express");
const app=express();
// app.listen(3000); // Hardcoded more than one place :( 
// console.log("Listening to port 3000",app.get("port")); // Another place :(
app.set("port", 3000); // In one place 
app.use(express.static(path.join(__dirname, "public")));
// app.listen(app.get("port"));
// console.log("Listening to port "+ app.get("port"));
// const server=app.listen(app.get("port"),function(){
//     console.log=("listening to port",server.address().port)
// })
const server= app.listen(app.get("port"), function() {
    console.log("Listening to port "+ server.address().port); });
