define([], function () {
    var routes = {
        "/:id": {
            "controller" : "answerController",
            "templateUrl" : "/player/features/answer/answerView.html"
        },
        "/player/:id": {
            "controller" : "answerController",
            "templateUrl" : "/player/features/answer/answerView.html"
        },
        
        // NOTE: Add new routes here...
    };
    
    return routes;
});