define(["root"], function (root) {
    return root.factory("appState", function ($log) {
        var _isBusyCounter = 0;
        var isBusy = false;

        /**
         * Handle all application errors
         */
        function setError (message) {
            $log.error(message);
        }
    
        /**
         * Set the isBusy flag
         */
        function setIsBusy (value) {
            if (value) {
                _isBusyCounter += 1;
            }
            else {
                _isBusyCounter -=1;
            }
        
            // Log a warning if the busy indicator ever drops below 0.
            // This condition should never happen and is a sign of a bug.
            if(_isBusyCounter < 0) {
                $log.warn("The busy indicator should never be less than 0.  It currently has a value of: '" + _isBusyCounter + "'");
            }
            
            // If the busy counter is more than 0
            // then the busy state is "busy".
            isBusy = (_isBusyCounter > 0);
        };
        
        return {
            setError: setError,
            setIsBusy: setIsBusy,
            isBusy: isBusy
        };
    });
});