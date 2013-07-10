define(["root"], function (root) {
    root.factory("theaterService", ["$resource", function ($resource) {
        return $resource("http://javascript-cinema.johngully.c9.io/api/theaters/:id");
    }]);
});