define(["root", "services/theaterService"], function (root) {
    return root.controller("theaterController", function ($log, $scope, $routeParams, theaterService) {
        // The cache of available theaters
        var _theater = {};
        var _theaterId = 0;

        // Load the theaters
        function load () {
            $scope.theater = theaterService.get({id: _theaterId});
        }
        
        /**
         * Loads the current game for the theater
         */
        $scope.init = function () {
            _theaterId = $routeParams.id;
            load(_theaterId);
        };
        
    }); // end controller
}); // end require