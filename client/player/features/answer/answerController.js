define(["root", "common/socket", "services/theaterService"], function (root) {
    return root.controller("answerController", function ($log, $scope, $routeParams, socket, theaterService) {
        var _theaterId = 0;
        
        /** Indicates whether the question or answer should be displayed */
        $scope.isAnswerDisplayed = false;
        
        /** The theater */
        $scope.theater;
        
        /** The current showing */
        $scope.question;
        
        /** The player's answer */
        $scope.selectedAnswer;

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
        
        $scope.selectAnswer = function(answer) {
            $log.debug("user selected the following answer");
            $log.debug(answer);
            $scope.selectedAnswer = answer;
        };
        
        /**
         * Save the selected answer
         */
        $scope.save = function () {
            // TODO: Save the answer
            $log.debug("TODO: Save the answer")
        };
        
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

        // Display the correct answer
        socket.on("moveToAnswer", function (theater) {
            $log.debug("moveToQuestion");
            $scope.isAnswerDisplayed = true;
        });

        // Display the next question
        socket.on("moveToQuestion", function (theater) {
            $log.debug("moveToQuestion");
            $log.debug(theater);
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
    }); // end controller
}); // end require