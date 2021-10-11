angular.module("novelBooks").controller("NovelController",NovelController)
function NovelController(NovelsFactory,$routeParams){
 const vm=this
 const id=$routeParams.bookID
 NovelsFactory.getOneNovel(id).then(function(response){
     vm.novel=response
 })
 vm.updateNovel = function () {
    const data = {
        title: vm.novelTitle,
        author: vm.novelAuthor,
        genre:vm.novelGenre,
        publisher: vm.novelPublishers,
    }
    if (vm.novelForm.$valid && vm.novelForm.$dirty) {
        NovelsFactory.updateOneNovel(id,data).then(function (response) {
            console.log(response);
        }
        )
    }
}
};
