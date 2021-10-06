angular.module("myProperApp").controller("mainController",mainController)
 function mainController($http) {
    const vm= this;
    vm.name= "Jack";
   $http.get("https://jsonplaceholder.typicode.com/posts")
   .then(function(response){
      vm.jokes=response.data;
   })
   }
    