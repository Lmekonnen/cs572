angular.module("myApp").controller("postsController",postsController)

function postsController(postFactory,$routeParams){
    const vm=this;
    // const postId=$routeParams.postId;
    postFactory.getTenPosts()
    .then(function (response) {
        console.log(response);
        vm.posts=response.data;
    })
}