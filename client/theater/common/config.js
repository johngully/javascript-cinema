define(["root",
        "common/routes",
        "common/busyInterceptor",
        "features/question/questionController"], 
function (root, routes) {
    
    /**
     * Add configured routes to the route provider 
     */
    function processRouteConfig (routeConfig, routeProvider) {
        if(!routeConfig) {
            throw new Error("No routes have been configured for the application.");
        }
        
        angular.forEach(routeConfig, function(value, key) {
            routeProvider.when(key, value);
        });
    }

    // Add the busy interceptor and configure the routes
    var config = root.config(function ($routeProvider, $httpProvider) {
        $httpProvider.responseInterceptors.push("busyInterceptor");
        processRouteConfig(routes, $routeProvider);
    }); // end config
    
}); // end require