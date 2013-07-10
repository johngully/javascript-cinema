define(["angular", 
        "angularResource",
        "angularCookies"], 
function(angular) {
	var theaterModule = angular.module("theaterModule", ["ngResource", "ngCookies"]);
    return theaterModule;
});