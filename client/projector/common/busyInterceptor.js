define(["root", "common/appState"], function (root) {
    return root.factory("busyInterceptor", function ($q, appState) {
        return function (promise) {
        
        function success(response) {
            appState.setIsBusy(false);
            return response;
        }
        
        function error(response) {
            appState.setIsBusy(false);
            appState.setError(response);
            return $q.reject(response);
        }
        
        appState.setIsBusy(true);
        return promise.then(success, error);
        };
    });
});