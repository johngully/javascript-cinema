var serviceName = "theaters";

var baseServiceModule = require("./baseService");
var TheaterService = new baseServiceModule.service();
var base_init = TheaterService.init; // Store a reference to any base function that will be overridden

/** The name of ther service & persistence collection */
TheaterService.serviceName = serviceName;

/**
 * Initializes the base service with the core dependencies
 */
TheaterService.init = function (db, io) {
    base_init(TheaterService.serviceName, db, io);
};

exports.service = TheaterService;