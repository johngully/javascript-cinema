define(["angular", 
        "angularResource",
        "angularCookies"], 
function(angular) {
	var playerModule = angular.module("playerModule", ["ngResource", "ngCookies"]);
    return playerModule;
});