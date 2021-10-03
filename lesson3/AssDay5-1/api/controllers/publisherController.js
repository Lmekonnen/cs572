// module.exports.publisherGet= function(req, res) {
//     const gameId= req.params.gameId;
//     console.log("Get gameId ", gameId); 
//     Game.findById(gameId).select(publisher).exec(function(err, game) {
//     const response= {status: 200, message: []}; 
//     if (err) {
//     console.log("Error finding game");
//     response.status= 500; response.message= err; } 
//     else if (!game) {
//     console.log("Game id not found in database", id);
//     response.status= 404; response.message= {"message": "Game ID not found"+gameId};
//     } else {
//     response.message= game.publisher? game.publisher : [];
//     }
//     res.status(response.status).json(response.message); })}