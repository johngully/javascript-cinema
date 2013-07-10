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

/**
 * Populates the questions collection with seed data
 */
QuestionService.populate = function (request, response) {
    var data = require("../data/seedData");
    QuestionService.save({ body: data.question1 }, response);
    QuestionService.save({ body: data.question2 }, response);
    QuestionService.save({ body: data.question3 }, response);
};

exports.service = QuestionService;