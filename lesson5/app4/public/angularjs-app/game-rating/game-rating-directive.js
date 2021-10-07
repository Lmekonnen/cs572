angular.module("meanGames").directive("gameRating",GameRating)
function GameRating(){
    return{
        retric: "E", //EACM
        templateUrl:"angularjs-app/game-rating/rating.html",
        
    }
}