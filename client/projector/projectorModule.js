define(["angular", 
        "angularResource",
        "angularCookies"], 
function(angular) {
	var projectorModule = angular.module("projectorModule", ["ngResource", "ngCookies"]);
    return projectorModule;
});