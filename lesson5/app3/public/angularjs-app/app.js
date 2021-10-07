angular.module("meanGames",[ngRoute]).config(config);
function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"angular-app/main/welcome",
        controller:"GamesController",
        constrollerAs: "vm"
    }).when("/games",{
        templateUrl:"angular-app/game-list/games",
        controller:"GamesController",
        constrollerAs: "vm"
    })
}