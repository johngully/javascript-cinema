define(["root",
        "features/question/questionController"], 
function (root) {
    return root.config(function ($routeProvider) {
        var config = $routeProvider
    		.when('/', {
				controller : 'questionController',
				templateUrl : '/projector/features/question/questionView.html',
			});
                
        return config;
    }); // end config
}); // end require