angular.module("jobSearching").controller("jobController",jobController);
function jobController(jobFactory,$routeParams){
    const vm=this;
    const id=$routeParams.jobId;
    jobFactory.getOneJob(id).then(function(response){
        vm.job=response;
        console.log(response);
    })
}
