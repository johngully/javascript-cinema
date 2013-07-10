// Configure require's default paths and shortcuts to base libraries
require.config({
    baseUrl: "/",
    paths: {
        jQuery: "lib/jquery",
        angular: "lib/angular",
        angularResource: "lib/angular-resource",
        angularCookies: "lib/angular-cookies",
        underscore: "lib/underscore",
        common: "theater/common",
        features: "theater/features",
        services: "theater/services",
        root: "theater/theaterModule"
        
    },
    shim: {
        "jQuery": {
            exports: "jQuery"
        },
        "underscore": {
            exports: "underscore"
        },
        "angular": {
            deps: ["jQuery"],
            exports: "angular"
        },
        "angularResource": {
            deps: ["angular"],
            exports: "angularResource"
        },
        "angularCookies": {
            deps: ["angular"],
            exports: "angularCookies"
        }
    }
});

// Bootstrap the angular application
require(["angular",
         "angularResource",
         "angularCookies",
         "underscore",
         "root",
         "common/config",
         "common/baseController"],
    function (angular) {
        angular.bootstrap(document, ["theaterModule"]);
});