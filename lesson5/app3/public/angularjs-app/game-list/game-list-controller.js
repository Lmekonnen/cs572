//
angular.module("meanGames").controller("GamesController",GameController)
function GamesController($http){
    const vm=this;
    vm.title="Mean Games App"
    vm.games=
    $http.get("/api/games").then(function(response){
        vm.games=response.data;
    })
}