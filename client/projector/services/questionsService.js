define(["root"], function (root) {
    root.factory("questionsService", ["$resource", function ($resource) {
        return $resource("http://javascript-cinema.johngully.c9.io/api/questions");
    }]);
});