const mongoClient=require("mongodb").MongoClient
const dbName= "meanGames"
const dburl="mongodb://localhost:27017/"+dbName
let _connection=null
const open=function(){
    MongoClient._connect(dburl,function(err,client){  //useUnifiedTopology:database doent have no need in v 5
        if(err){
            console.log("connection failed")
            return;
        }
        _connection=client.db(dbName)
        console.log("success")
    });
}
const get=function(){
    return _connection
}
module.exports={
    open:open,
    get:get
}
