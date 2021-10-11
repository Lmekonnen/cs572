//
angular.module("meanGames").controller("GamesController",GamesController)
function GamesController(GamesFactory){
    const vm=this;
    vm.title="Mean Games App"
    GamesFactory.getAllGames().then(function(response){
        vm.games=response;
    })
    vm.addGame=function(){
        const postData={
            title:vm.gameTitle,
            price:vm.gamePrice
        }   
        if(vm.gameForm.$valid && vm.gameForm.$dirty) {
            GamesFactory.addOneGame(postData).then(function(response){
                console.log(response);
            })
        }

    }
    vm.deleteGame=function(){
        GamesFactory.deleteOneGame().then(function(response){
            console.log(response);
        })
    }
}