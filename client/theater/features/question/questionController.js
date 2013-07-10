define(["root", "services/theaterService"], function (root) {
    return root.controller("questionController", function ($log, $scope, theaterService) {
        // The cache of available questions
        var _theater = {};
        var _theaterId = 0;

        // Load the questions
        function load () {
            $scope.theater = theaterService.get({id: _theaterId});
        }
        
        /**
         * Loads the current game for the theater
         */
        $scope.init = function () {
            // TODO: Get the theater id from the route parameters
            _theaterId = 1;
            load(_theaterId);
        };
        
    }); // end controller
}); // end require