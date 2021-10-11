require("dotenv").config({"path":".env"})
const MongoClient = require("mongodb").MongoClient;

const dbName = "newTestDB";
const dburl=process.env.dburl+dbName;

let _connection= null;
const open = function(){
    MongoClient.connect(dburl,function(err,client){
        if(err){
            console.log("DB connection failed");
            return
        }
        _connection = client.db(dbName);
        console.log("DB connection open",_connection);
    });
};

const get = function(){
    return _connection;
};


module.exports = {
    open:open,
    get:get
};