define(["root"], function (root) {
    root.factory("theaterService", ["$resource", function ($resource) {
        var resource = $resource("http://javascript-cinema.johngully.c9.io/api/theaters/:id");
        resource.start = $resource("http://javascript-cinema.johngully.c9.io/api/theaters/:id/start");
        resource.stop = $resource("http://javascript-cinema.johngully.c9.io/api/theaters/:id/stop");
        return resource;
    }]);
});