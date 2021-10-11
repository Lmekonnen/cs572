require("dotenv").config({"path":".env"})
const MongoClient = require("mongodb").MongoClient;

const dbName = "newTestDB";
const dbUrl=process.env.dbUrl+dbName;

let _connection= null;
const open = function(){
    MongoClient.connect(dbUrl,function(err,client){
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