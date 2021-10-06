angular.module("MyProperApp").controller("PostController",PostController)

function PostController($http,$routeParamas){
    const vm=this;
    const postId=$routeParams.postId;
    $http.get("https://jsonplaceholder.typicode.com/posts/"+posts)
    .then(function (response) {
        vm.post=response.data;
    })
}