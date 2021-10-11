angular.module("meanTrips").controller("tripsController", tripsController)
function tripsController(tripFactory) {
    const vm = this;
    vm.title = "Mean Trips";

    vm.deleteTrip = function (id) {
        tripFactory.deleteOneTrip(id).then(function (reponse) {
            console.log("trip", id);
        })
    }
    vm.offset = 0;
    vm.getAll= function (ofs) {
        tripFactory.getAllTrips(ofs).then(function (response) {
            vm.trips = response;
            console.log(response);
        })
    }
    vm.next = function () {
        vm.offset += 3;
        vm.getAll(vm.offset);
        setTimeout(() => {
            if (vm.trips.length === 0) {
                vm.offset = 0;
                vm.getAll(vm.offset);
            }
        }, 30);

    }
    vm.pre =function(){
        vm.offset-=3;  
        if(vm.offset<0){
            vm.offset=0;
        } 
        vm.getAll(vm.offset);
    }

    vm.getAll(vm.offset);
}