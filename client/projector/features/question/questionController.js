define(["root", "services/questionsService"], function (root) {
    return root.controller("questionController", function ($log, $scope, questionsService) {
        // The cache of available questions
        var _questions = [];

        // Load the questions
        function loadQuestions () {
            questionsService.query(function (questions) {
                // Add each question to the questions
                for(var question in questions) {
                    _questions.push(questions[question]);
                }
                // Set the current question
                setCurrentQuestion();                
            });
        }
        
        // Set the question to the next question in the list
        function setCurrentQuestion () {
            $scope.question = _questions.shift();
        }
        
        /** The current question */
        $scope.question;
        
        /**
         * Loads the question to be displayed
         */
        $scope.init = function () {
            $log.debug("questionController.init()");
            
            // Populate the questions cache
            loadQuestions();
        };
        
        $log.debug("questionController - loaded");

    }); // end controller
}); // end require