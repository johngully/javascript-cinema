define(["root",
        "features/question/questionController",
        "common/busyInterceptor"], 
function (root) {
    return root.config(function ($routeProvider, $httpProvider) {
    //return root.config(function ($routeProvider) {
        
        // Add the busy indicator to the $httpProvider
        $httpProvider.responseInterceptors.push("busyInterceptor");
        
        var config = $routeProvider
            .when('/', {
                controller : 'questionController',
                templateUrl : '/projector/features/question/questionView.html',
            })
            .when('/question', {
                controller : 'questionController',
                templateUrl : '/projector/features/question/questionView.html',
            })
            .otherwise({
                controller : 'questionController',
                templateUrl : '/projector/features/question/questionView.html',
            });
                
        return config;
    }); // end config
}); // end require