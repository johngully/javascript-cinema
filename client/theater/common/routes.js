define([], function () {
    var routes = {
        "/": {
            "controller" : "questionController",
            "templateUrl" : "/theater/features/question/questionView.html"
        },
        "/question": {
            "controller" : "questionController",
            "templateUrl" : "/theater/features/question/questionView.html"
        },
        
        // NOTE: Add new routes here...
    };
    
    return routes;
});