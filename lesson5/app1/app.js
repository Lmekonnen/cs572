angular.module("myApp", ["ngRoute"]).config(config);
function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "main/main.html",
        controller: "mainController",
        controllerAs: "mainCtrl"
    }).when("/about", {
        templateUrl: "about/about.html",
        controller: "aboutController",
        controllerAs: "aboutCtrl"
    }).when("/posts", {
        templateUrl: "posts/posts.html",
        controller: "postsController",
        controllerAs: "postsCtrl"
    }).when("/posts/:postId", {
        templateUrl: "post/post.html",
        controller: "postController",
        controllerAs: "postCtrl"
    }).otherwise({
        redirectTo: "/"
    })
}