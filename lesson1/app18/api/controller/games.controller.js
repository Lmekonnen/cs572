const gamesData=require("../data/games.json")
module.exports.gamesGetAll=function(req,res){
    console.log("Json got request")
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
console.log("offset",Offset)
console.log("offset+count",Offset+count)
const pageGames=gamesData.slice(Offset,Offset+count)
    res.status(200).json(pageGames);};
    // gamesAddone=function(req,res){
    //     console.log("Json got request")
    //     res.status(200).json({"json":true});};