angular.module("meanTrips", ["ngRoute"]).config(config);
function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "main/welcome.html"
    }).when("/trips", {
        templateUrl: "angularjs-app/trip-list/tripList.html",
        controller: "tripsController",
        controllerAs: "vm"
    }).when("/trips/:tripId", {
        templateUrl: "angularjs-app/trip-one/tripOne.html",
        controller: "tripController",
        controllerAs: "vm"
    }).otherwise({
        redirectTo: "/"
    });
}