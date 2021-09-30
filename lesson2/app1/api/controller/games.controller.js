const gamesData=require("../data/games.json")
const dbconnection=require("../data/dbconnection");
const dbconnection = require("../data/dbconnection");
module.exports.gamesGetAll=function(req,res){
    console.log("Json got request")
    const dbconnection=dbconnection.get()
    const gamesCollection=db.collection("games")
    console.log("db is",db)
    let Offset=0
    let count=5
    console.log("req.query",req.query )
    if(req.query && req.query.Offset)
{
    Offset=parseInt(req.query.Offset)
}   
if(req.query && req.query.count)
{
    count=parseInt(req.query.count)
}    
// console.log("offset",Offset)
// console.log("offset+count",Offset+count)
// const pageGames=gamesData.slice(Offset,Offset+count)
gamesCollection.find().skip(Offset).limit(count).toArray(function(err,games){
    console.log("found games",games)
    res.status(200).json(games)
})
    // res.status(200).json(gamesData);};
    gamesAddone=function(req,res){
        console.log("Json got request")
        res.status(200).json({"json":true})}}