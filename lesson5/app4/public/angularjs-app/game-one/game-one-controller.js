angular.module("meanGames").controller("gameRating",GameRAting)
function GameRating($routeParams,GamesFactory){
 const vm=this
 const id=$routeParams.gameId
 GamesFactory.gameOneGame(id).then(function(response){
     vm.game=response
     vm.rating-_getStarRating(response.rating)
 })
}