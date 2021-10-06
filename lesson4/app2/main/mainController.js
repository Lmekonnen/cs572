angular.module("myApp").controller("mainController",mainController)
 function mainController(postFactory) {
    const vm= this;
    vm.name= "Jack";
    postFactory.getTenPosts().then(function(response){
      vm.posts=response.data;
   })
   }
    