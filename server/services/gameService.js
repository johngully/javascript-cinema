var serviceName = "games";

var baseServiceModule = require("./baseService");
var GameService = new baseServiceModule.service();
var base_init = GameService.init; // Store a reference to any base function that will be overridden

/** The name of ther service & persistence collection */
GameService.serviceName = serviceName;

/**
 * Initializes the base service with the core dependencies
 */
GameService.init = function (db, io) {
    base_init(GameService.serviceName, db, io);
};

exports.service = GameService;