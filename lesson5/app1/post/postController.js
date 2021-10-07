angular.module("myApp").controller("postController",postController)

function postController(postFactory,$routeParams){
    const vm=this;
    const postId=$routeParams.postId;
    postFactory.getOnePost(postId)
    .then(function (response) {
        console.log(response);
        vm.post=response.data;
        
    })
}