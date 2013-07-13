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
    { service: "badgeService" },
    { service: "playerService" },
    { service: "questionService" },
    { service: "theaterService" },
    {
        route: "/theaters/:id/start",
        verb: "get",
        service: "gameManagementService",
        method: "start"
    },
    {
        route: "/theaters/:id/stop",
        verb: "get",
        service: "gameManagementService",
        method: "stop"
    },
    {
        route: "/data/populate",
        verb: "get",
        service: "seedDataService",
        method: "populate"
    },
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
        route: "/player",
        path: "/player/app.html"
    },
    { 
        route: "/theater",
        path: "/theater/app.html"
    }
];


