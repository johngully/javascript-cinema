define([], function () {
    var routes = {
        "/theater/:id": {
            "controller" : "theaterController",
            "templateUrl" : "/theater/features/theater/theaterView.html"
        },
        "/theaters": {
            "controller" : "theatersController",
            "templateUrl" : "/theater/features/theaters/theatersView.html"
        },

        // NOTE: Add new routes here...
    };
    
    return routes;
});