angular.module("meanGames").directive("gameRating", GameRating)
function GameRating() {
    return {
        retrict: "E", //EACM
        templateUrl: "angularjs-app/game-rating/rating.html",
        bindToController: true,
        controller: "GameController",
        controllerAs: "vm"
    }
}