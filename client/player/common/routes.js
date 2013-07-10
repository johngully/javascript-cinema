define([], function () {
    var routes = {
        "/": {
            "controller" : "answerController",
            "templateUrl" : "/player/features/answer/answerView.html"
        },
        "/question": {
            "controller" : "answerController",
            "templateUrl" : "/player/features/answer/answerView.html"
        },
        
        // NOTE: Add new routes here...
    };
    
    return routes;
});