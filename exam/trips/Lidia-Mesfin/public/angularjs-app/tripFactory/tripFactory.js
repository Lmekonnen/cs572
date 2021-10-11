angular.module("meanTrips").factory("tripFactory",tripFactory);
function tripFactory($http){
    return{
        getAllTrips:getAllTrips,
        getOneTrip:getOneTrip,
        deleteOneTrip:deleteOneTrip
    }
    function getAllTrips(offset){
        return $http.get("/api/trips/?offset="+offset).then(complete).catch(failed);

    }
    function getOneTrip(id) {
        return $http.get("/api/trips/"+id).then(complete).catch(failed);
        
    }
    function deleteOneTrip(id){
        return $http.delete("/api/trips/"+id).then(complete).catch(failed);
    }
    function complete(response) {
        return response.data
        
    }
    function failed(error) {
        return error.status.statusText;
        
    }
}