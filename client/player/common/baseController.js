define(["root", "common/appState"], function (root) {
    return root.controller("baseController", function ($log, $scope, appState) {
        // TODO: Add base behavior that all controllers use
        
        /** The current state of application */
        $scope.appState = appState;
        
    }); // end controller
}); // end require