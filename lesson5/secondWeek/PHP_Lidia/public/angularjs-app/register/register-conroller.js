angular.module("novelBooks").controller("registerController",registerController);

function registerController(NovelsFactory){

    const vm = this;
    vm.addUser = function () {
        if (vm.userForm.$dirty && vm.userForm.$valid) {
            const newUser = {
                userName:vm.username,
                password:vm.password,
                name:vm.name
            }
            NovelsFactory.addUser(newUser).then(function (response) {
                console.log("Add new user called");
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
}