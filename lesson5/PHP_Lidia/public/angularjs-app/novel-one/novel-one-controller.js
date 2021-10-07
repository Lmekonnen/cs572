angular.module("novelBooks").controller("NovelController",NovelController)
function NovelController(NovelsFactory,$routeParams){
 const vm=this
 const id=$routeParams.bookID
 NovelsFactory.getOneNovel(id).then(function(response){
     vm.novel=response
 })
};
