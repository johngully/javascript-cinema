define(["root", "services/theaterService"], function (root) {
    return root.controller("answerController", function ($log, $scope, questionsService) {
        
        /** The current question */
        $scope.question;
        
        /** Indicated whether there is remaining time for the current question */
        $scope.timeRemains = true;
        
        /**
         * Loads the current question
         */
        $scope.init = function () {
            $log.debug("answerController.init()");
            
            // Register as a player in the game
            
            // Get the questions for the game
            
            // Set the current question
            
            // TODO: Replace this ...
            //       Questions should be pushed from the server
            $scope.question = questionsService.get({id: 2});            
        };
        
        $log.debug("answerController - loaded");

    }); // end controller
}); // end require