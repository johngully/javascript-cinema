define(["root", "common/socket", "services/theaterService"], function (root) {
    return root.controller("theaterController", function ($log, $scope, $routeParams, socket, theaterService) {
        var _theaterId = 0;
        
        /** Indicates whether the question or answer should be displayed */
        $scope.isAnswerDisplayed = false;
        
        /** The theater */
        $scope.theater;
        
        /** The current showing */
        $scope.question;

        /**
         * Set the current question if the theater changes
         */
        $scope.$watch("theater", function () {
            // Ensure the theater has been loaded
            if(!$scope.theater || !$scope.theater._id) {
                return;
            }
            
            var showing = getCurrentShowing($scope.theater);
            $scope.question = getCurrentQuestion(showing);
        }, true);

        /**
         * Load the current game for the theater
         */
        $scope.init = function () {
            if (!$routeParams.id) {
                throw new Error("An id parameter is required, but was not found.");
            }
            
            _theaterId = $routeParams.id;
            load();
        };
        
        // Subscribe to the "moveToAnswer" message.  
        // Set the isAnswerDisplayed indicator to "true"
        socket.on("moveToAnswer", function (theater) {
            $log.debug("moveToQuestion");
            $scope.isAnswerDisplayed = true;
        });

        // Subscribe to the "moveToQuestion" message.  
        // Load the updated theater and set the isAnswerDisplayed indicator to "false". 
        socket.on("moveToQuestion", function (theater) {
            $scope.isAnswerDisplayed = false;
            $scope.theater = theater;
        });

        // Load the theater
        function load () {
            $scope.theater = theaterService.get({id: _theaterId});
        }
        
        // Get the current showing from the set of showings
        function getCurrentShowing (theater) {
            var currentShowing = (theater.currentShowing) ? theater.currentShowing : 0;
            return theater.showings[currentShowing];
        }
        
        // Get the current question from the set of questions
        function getCurrentQuestion (showing) {
            var currentQuestion = (showing.currentQuestion) ? showing.currentQuestion : 0;
            return showing.questions[currentQuestion];
        }
        
        
        // TODO: Move to the theater management screen
        $scope.start = function(){
            theaterService.start.get({id: _theaterId});
        };
        
        // TODO: Move to the theater management screen
        $scope.stop = function () {
            theaterService.stop.get({id: _theaterId});
        };
    }); // end controller
}); // end require