angular.module("novelBooks").controller("PublishersController",PublishersController)
function PublishersController(NovelsFactory,$routeParams){
    const vm=this
    const id=$routeParams.bookID
    // const publishersId=$routeParams.publishersId;
    NovelsFactory.getPublishers(id).then(function(response){
        vm.novel=response
    })
   };