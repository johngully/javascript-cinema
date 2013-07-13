define(["root", "common/socket", "services/theaterService"], function (root) {
    return root.controller("theaterController", function ($log, $scope, $routeParams, socket, theaterService) {
        // The cache of available theaters
        var _theaterId = 0;
        var _showing = {};
        
        /** Indicates whether the question or answer should be displayed */
        $scope.isAnswerDisplayed = false;
        
        /** The theater */
        $scope.theater;
        
        /** The current showing */
        $scope.question = {};

        /**
         * Set the current question if the theater changes
         */
        $scope.$watch("theater", function () {
            // Ensure the theater has been loaded
            if(!$scope.theater || !$scope.theater._id) {
                return;
            }
            
            _showing = getCurrentShowing($scope.theater);
            $scope.question = getCurrentQuestion(_showing);
        }, true);
        
        $scope.start = function(){
            theaterService.start.get({id: _theaterId});
        };
        
        $scope.stop = function () {
            theaterService.stop.get({id: _theaterId});
        };

        /**
         * Load the current game for the theater
         */
        $scope.init = function () {
            _theaterId = $routeParams.id;
            load(_theaterId);
        };
        
        socket.on("moveToAnswer", function (theater) {
            $log.debug("moveToQuestion");
            $scope.isAnswerDisplayed = true;
        });

        socket.on("moveToQuestion", function (theater) {
            $log.debug("moveToQuestion");
            $log.debug(theater);
            $scope.isAnswerDisplayed = false;
            $scope.theater = theater;
        });

        // Load the theaters
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