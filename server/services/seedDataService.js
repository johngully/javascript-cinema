var collection = {};
var database = {};

/**
 * Initializes the base service with the core dependencies
 */
var init = function (db, io) {
    database = db;
};

/**
 * Sets the current working collection to the specified collection
 */
var setCollection = function (collectionName) {
    collection = database.collection(collectionName);
};

/**
 * Saves the requested data to the current collection
 */
var save = function (request, response) {
    if(!collection) {
        throw new Error("The collection must be set before a save can be processed.")
    }
    
    var entity = request.body;
    collection.save(entity, { w: 1 }, function (err, result) {
        if (err) {
            response.send(500, 'Error: Could save the specified entity');
            return;
        }

        // Always return the object from the save
        if (result === 1) {
            result = entity;
        }
        
        // Send the result to the requestor
        response.send(result);
    });
};

/**
 * Populates all the seed data
 */
var populate = function (request, response) {
    var data = require("../data/seedData");
    
    // Questions
    setCollection("questions");
    save({ body: data.questions.question1 }, response);
    save({ body: data.questions.question2 }, response);
    save({ body: data.questions.question3 }, response);
    console.log("Questions saved");

    setCollection("games");
    save({ body: data.games.game1 }, response);
    save({ body: data.games.game2 }, response);
    save({ body: data.games.game3 }, response);
    console.log("Games saved");
    
    // Theaters
    setCollection("theaters");
    save({ body: data.theaters.theater1 }, response);
    save({ body: data.theaters.theater2 }, response);
    console.log("Theaters saved");


    // TODO: Add more seed data here ...

    response.send("Seed data populated");
};

exports.service = {
    init: init,
    setCollection: setCollection,
    populate: populate
};