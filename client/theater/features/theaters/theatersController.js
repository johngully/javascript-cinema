define(["root", "common/socket", "services/theaterService"], function (root) {
    return root.controller("theatersController", function ($log, $scope, socket, theaterService) {
        
        /** The list of theaters */
        $scope.theaters = {};
        
        function load () {
            $scope.theaters = theaterService.query();
        }
        
        /**
         * Starts/Stops the game for the specified theater
         */
        $scope.toggleStartStop = function (theater) {
            theaterService.toggle.get({id: theater._id}, function (response) {
                theater.gameState = response.gameState;
            });
        };
        
        /**
         * Loads the list of theaters
         */
        $scope.init = function () {
            load();
        };
        
    }); // end controller
}); // end require