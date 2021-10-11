angular.module("jobSearching", ["ngRoute"]).config(config);
function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "main/welcome.html"
    }).when("/jobs", {
        templateUrl: "angularjs-app/job-list/jobList.html",
        controller: "jobsController",
        controllerAs: "vm"
    }).when("/jobs/:jobId", {
        templateUrl: "angularjs-app/job-one/jobOne.html",
        controller: "jobController",
        controllerAs: "vm"
    }).otherwise({
        redirectTo: "/"
    });
}