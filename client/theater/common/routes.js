define([], function () {
    var routes = {
        "/:id": {
            "controller" : "theaterController",
            "templateUrl" : "/theater/features/theater/theaterView.html"
        },
        "/theater/:id": {
            "controller" : "theaterController",
            "templateUrl" : "/theater/features/theater/theaterView.html"
        },
        
        // NOTE: Add new routes here...
    };
    
    return routes;
});