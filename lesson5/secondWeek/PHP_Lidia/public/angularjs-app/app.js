angular.module("novelBooks",["ngRoute"]).config(config);
function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"main/welcome.html"
    }).when("/books",{
        templateUrl:"angularjs-app/novel-list/novels.html",
        controller:"NovelsController",
        controllerAs: "vm" 
    }).when("/books/:bookID",{
        templateUrl:"angularjs-app/novel-one/novel.html",
        controller:"NovelController",
        controllerAs: "vm"
    }).otherwise({
        redirectTo: "/"
    })
    
}