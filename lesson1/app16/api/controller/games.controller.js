const gamesData=require("../data/games.json")
module.exports.gamesGetOne= function(req, res) { 
    const gameId= req.params.gameId;
    const theGame= gamesData[gameId]; 
    console.log("GET game with gameId ", gameId); 
    res.status(200).json(theGame);
    }
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
    res.status(200).json(gamesData);};
    gamesAddone=function(req,res){
        console.log("Json got request")
        res.status(200).json({"json":true});};