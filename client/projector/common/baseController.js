define(["root"], function (root) {
    return root.controller("baseController", function ($log, $scope) {
        var _isBusy = 0;
        
        /** Displays the current busy state */
        $scope.isBusy = false;
        
        /**
         * Set the isBusy flag
         */
        $scope.setIsBusy = function (value) {
            if (value) {
                _isBusy += 1;
            }
            else {
                _isBusy -=1;
            }

            // Log a warning if the busy indicator ever drops below 0.
            // This condition should never happen and is a sign of a bug.
            if(_isBusy < 0) {
                $log.warn("The busy indicator should never be less than 0.  It currently has a value of: '" + _isBusy + "'");
            }
            
            // If the busy counter is more than 0
            // then the busy state is "busy".
            $scope.isBusy = (_isBusy > 0);
        };
    }); // end controller
}); // end require