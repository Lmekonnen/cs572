angular.module("myApp").controller("postsController", postsController)

function postsController(postFactory) {
    const vm = this;
    postFactory.getTenPosts()
        .then(function (response) {
            console.log(response);
            vm.posts = response.data;
        })
}