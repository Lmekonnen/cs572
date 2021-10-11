angular.module("jobSearching").factory("jobFactory",jobFactory);
function jobFactory($http){
    return{
        getAllJobs:getAllJobs,
        getOneJob:getOneJob,
        addOneJob:addOneJob,
        deleteOneJob:deleteOneJob
    }
    function getAllJobs(offset){
        return $http.get("/api/jobs/?offset="+offset).then(complete).catch(failed);

    }
    function getOneJob(id) {
        return $http.get("/api/jobs/"+id).then(complete).catch(failed);
        
    }
    function addOneJob(job){
        return $http.post("/api/jobs/",job).then(complete).catch(failed);

    }
    function deleteOneJob(id){
        return $http.delete("/api/jobs/"+id).then(complete).catch(failed);
    }
    function complete(response) {
        return response.data
        
    }
    function failed(error) {
        return error.status.statusText;
        
    }
}