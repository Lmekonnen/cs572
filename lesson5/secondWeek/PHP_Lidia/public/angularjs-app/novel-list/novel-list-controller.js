//
angular.module("novelBooks").controller("NovelsController",NovelsController)
function NovelsController(NovelsFactory){
    const vm=this;
    vm.title="Novel Books App"
    NovelsFactory.getAllNovels().then(function(response){
        vm.novels=response;
    })
}