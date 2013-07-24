define(["root"], function (root) {
    root.factory("socket", function ($rootScope) {
        // Wrap the socket.io functions so that Angular will be updated
        var socketWrapper = function() {
            var socket = io.connect();
            
            var on = function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });  
            };
            
            var emit = function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            }
            
            return {
                on: on,
                emit: emit
            };
        }();
        
        return socketWrapper;
    });
});