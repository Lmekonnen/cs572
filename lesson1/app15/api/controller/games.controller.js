const gamesData=require("../data/games.json")
// module.exports.gamesGetOne= function(req, res) { 
//     const gameId= req.params.gameId;
//     const theGame= gamesData[gameId]; 
//     console.log("GET game with gameId ", gameId); 
//     res.status(200).json(theGame);
//     }
    
module.exports.gamesGetAll=function(req,res){
    console.log(" Got the games")
    console.log(req.query);
    let Offset=0
    let count=5
    console.log("req.query",req.query )
    if(req.query && req.query.Offset)
{
    Offset=parseInt(req.query.Offset,10)
}   
if(req.query && req.query.count)
{
    count=parseInt(req.query.count,10)
}    
console.log("offset",Offset)
console.log("offset+count",Offset+count)
const pageGames=gamesData.slice(Offset,Offset+count)
res.status(200).json(pageGames);
    
};
module.exports.product=function(req,res){
    console.log("product recieved");
    const num1=parseInt(req.params.id);
    console.log("num1"+num1);
    if (req.query.num2 && req.query){
        const num2=parseInt(req.query.num2);
        console.log("num2"+num2);
        const product=num1*num2;
        res.status(200).send("the product is: "+product);
    }
    else{
        res.status(404).send("bad request")
    }
}