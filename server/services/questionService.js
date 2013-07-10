var serviceName = "questions";

var baseServiceModule = require("./baseService");
var QuestionService = new baseServiceModule.service();
var base_init = QuestionService.init; // Store a reference to any base function that will be overridden

/** The name of ther service & persistence collection */
QuestionService.serviceName = serviceName;

/**
 * Initializes the base service with the core dependencies
 */
QuestionService.init = function (db, io) {
    base_init(QuestionService.serviceName, db, io);
};

exports.service = QuestionService;