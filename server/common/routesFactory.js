var serviceFactory = require("./serviceFactory");
var apiRoutePrefix;

/**
 * Create the routes in the apiRoutes & fileRoutes configuration objects
 */
var create = function (config, express, db) {
    // Ensure route parameters are valid
    if (!express) {
        throw new Error("The routes factory is designed to create routes using 'express'.  The 'express' parameter was expected to be defined.");
    }

    if ((!config.apiRoutes || !config.apiRoutes.length) && !db) {
        throw new Error("Api routes require a valid 'db'.  The 'db' parameter was expected to be defined.");
    }
    
    if (!config.fileRoutes || !config.fileRoutes.length) {
        console.log("No file routes were configured.")
    }
    
    if (!config.apiRoutes || !config.apiRoutes.length) {
        console.log("No api routes were configured.")
    }
    
    apiRoutePrefix = config.settings.apiRoutePrefix;
    
    // Create the file routes
    config.fileRoutes.forEach(function (fileRoute) {
        createFileRoute(fileRoute, express);
    });

    // Create the api routes
    config.apiRoutes.forEach(function(apiRoute){
        createApiRoute(apiRoute, express, db);
    });
};

/**
 * Create a route using the file routing conventions
 */
function createFileRoute (fileRoute, express) {
    var path = './client';
    path += (fileRoute.path) ? fileRoute.path : fileRoute.route + '.html';
    express.get(fileRoute.route, function (req, res) { 
        res.sendfile(path);
    });
}

/**
 * Create a route following the api service routing conventions
 */
function createApiRoute (apiRoute, express, db) {
    if (!apiRoute.service) {
        throw new Error("A 'service' is required to be configured");
    }
    
    if (apiRoute.route || apiRoute.verb || apiRoute.method) {
        if(!apiRoute.route || !apiRoute.service || !apiRoute.verb || !apiRoute.method) {
            throw new Error("When a custom service route is configured the 'route', 'verb', 'service' and 'method' are all required.");
        }
    }
    
    // If the service is specified, but the other details are missing configure this for the default routes
    if (apiRoute.service && !apiRoute.route && !apiRoute.verb && !apiRoute.method) {
        createApiRouteDefaults(apiRoute, express, db);
        return;
    }

    // Create the route
    var route = apiRoutePrefix + apiRoute.route;
    var service = serviceFactory.create(apiRoute.service, db);
    var callback = service[apiRoute.method];
    express[apiRoute.verb](route, callback);   
}

/**
 * Generate the default routes for a service (all, find, save, delete)
 */
function createApiRouteDefaults (apiRoute, express, db) {
    if (!apiRoute.service) {
       throw new Error("Api route configuration requires a 'service' to be specified to create default routes."); 
    }

    var service = serviceFactory.create(apiRoute.service, db);
    var route = "/" + service.serviceName;
    var routeWithId = route + '/:id';

    var getAllRoute = createApiRouteObject(route, "get", apiRoute.service, "all");
    var getByIdRoute = createApiRouteObject(routeWithId, "get", apiRoute.service, "find");
    var postRoute = createApiRouteObject(route, "post", apiRoute.service, "save");
    var putRoute = createApiRouteObject(route, "put", apiRoute.service, "save");
    var deleteRoute = createApiRouteObject(routeWithId, "delete", apiRoute.service, "remove");
    
    createApiRoute(getAllRoute, express, db);
    createApiRoute(getByIdRoute, express, db);
    createApiRoute(postRoute, express, db);
    createApiRoute(putRoute, express, db);
    createApiRoute(deleteRoute, express, db);
}

/**
 * Create a new ApiRoute using the specified parameters
 */
function createApiRouteObject (route, verb, service, method) {
    return {
        route: route,
        verb: verb,
        service: service,
        method: method,
    }
}

/** Creates the configured routes for the express application */
exports.create = create;