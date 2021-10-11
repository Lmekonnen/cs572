angular.module("meanTrips").controller("tripController",tripController);
function tripController(tripFactory,$routeParams){
    const vm=this;
    const id=$routeParams.tripId;
    tripFactory.getOneTrip(id).then(function(response){
        vm.trip=response;
        console.log(response);
    })
}
