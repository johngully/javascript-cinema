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
    
    // Films
    setCollection("films");
    save({ body: data.films.lifeOfPi }, response);
    save({ body: data.films.lincoln }, response);
    save({ body: data.films.avengers }, response);
    save({ body: data.films.leMiserables }, response);
    console.log("Films saved");
    
    // Questions
    setCollection("questions");
    save({ body: data.questions.question1 }, response);
    save({ body: data.questions.question2 }, response);
    save({ body: data.questions.question3 }, response);
    console.log("Questions saved");

    // Theaters
    setCollection("theaters");
    save({ body: data.theaters.theater1 }, response);
    save({ body: data.theaters.theater2 }, response);
    console.log("Theaters saved");

    // Badges
    setCollection("badges");
    save({ body: data.badges.noobie }, response);
    save({ body: data.badges.rookie }, response);
    save({ body: data.badges.winning }, response);
    save({ body: data.badges.streak }, response);
    save({ body: data.badges.buster }, response);
    console.log("Badges saved");
    
    // Players
    setCollection("players");
    save({ body: data.players.player1 }, response);
    save({ body: data.players.player2 }, response);
    save({ body: data.players.player3 }, response);
    console.log("Players saved");
    


    // TODO: Add more seed data here ...

    response.send("Seed data populated");
};

exports.service = {
    init: init,
    setCollection: setCollection,
    populate: populate
};