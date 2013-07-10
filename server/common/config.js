/**
 * General settings for the node application
 */
exports.settings = {
    serverName : process.env.IP,
    port : process.env.PORT,
    dataPath : "./server/data",
    apiRoutePrefix : "/api",
};

/**
 * Routes that serve api data
 */
exports.apiRoutes = [
    {
        service: "questionService"
    },
    {
        route: "/populate/questions",
        verb: "get",
        service: "questionService",
        method: "populate"
    } 
];

/**
 * Routes that should serve files
 */
exports.fileRoutes = [
{ 
    route: "/",
    path: "/player/app.html"
},

{ 
    route: "/projector",
    path: "/projector/app.html"
},

{ 
    route: "/player",
    path: "/player/app.html"
},

];


