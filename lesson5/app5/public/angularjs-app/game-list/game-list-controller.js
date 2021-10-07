//
angular.module("meanGames").controller("GamesController",GamesController)
function GamesController(GamesFactory){
    const vm=this;
    vm.title="Mean Games App"
    GamesFactory.getAllGames().then(function(response){
        vm.games=response;
    })
}