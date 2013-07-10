define(["root", "services/questionsService"], function (root) {
    return root.controller("answerController", function ($log, $scope, questionsService) {
        
        /** The current question */
        $scope.question;
        
        /**
         * Loads the current question
         */
        $scope.init = function () {
            $log.debug("answerController.init()");
            
            // TODO: Replace this ...
            //       Questions should be pushed from the server
            $scope.question = questionsService.get({id: 2});            
        };
        
        $log.debug("answerController - loaded");

    }); // end controller
}); // end require