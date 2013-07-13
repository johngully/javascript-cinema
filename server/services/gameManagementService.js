var _io = {};
var _database = {};
var _collection = {};
var _theaters = [];
var _questionDuration = 5000;
var _answerDuration = 3000;

/**
 * Initializes the base service with the core dependencies
 */
var init = function (db, io) {
    _io = io;
    _database = db;
    _collection = _database.collection("theaters");
};

/**
 * Starts a game for the specified theater
 */
var start = function (request, response) {
    var theaterId = request.params.id;

    // Ensure the theaterId has been provided
    if (!theaterId) {
        throw new Error("A parameter of 'id' is required to start a game.");
    }
    
    // Load the theater
    _collection.findOne({ _id: theaterId }, function (err, theater) {
        // Ensure the theater was found
        if (err) {
            response.send(500, 'Error: Could not find the specified theater');
            return;
        }
        
        registerTheater(theater);
        broadcastQuestion(theater);
        response.send("started");
    });
};

/**
 * Stops a game for the specified theater
 */
var stop = function (request, response) {
    var theaterId = request.params.id;
    
    // Ensure the theaterId has been provided
    if (!theaterId) {
        throw new Error("A parameter of 'id' is required to stop a game.");
    }
    unregisterTheater(theaterId);
};

function registerTheater (theater) {
    _theaters[theater._id] = theater;
}

function unregisterTheater (theater) {
    _theaters[theater._id] = undefined;
}

function broadcastQuestion (theater) {
    incrementCurrentQuestion(theater);
    _io.sockets.emit("moveToQuestion", theater);
    
    // If the game is still running go to the answer
    if (isGameActive(theater)) {
        setTimeout(function () { broadcastAnswer(theater); }, _answerDuration);
    }
}

function broadcastAnswer (theater) {
    _io.sockets.emit("moveToAnswer", theater);
    
    // If the game is still running go to the next question
    if (isGameActive(theater)) {
        setTimeout(function () { broadcastQuestion(theater); }, _questionDuration)
    }
}

function incrementCurrentQuestion (theater) {
    // Get the current question
    theater.currentShowing = (theater.currentShowingIndex) ? theater.currentShowing : 0;
    var currentShowing = theater.showings[theater.currentShowing];
    currentShowing.currentQuestion = (currentShowing.currentQuestion !== undefined) ? currentShowing.currentQuestion : -1;

    // Increment the current question
    currentShowing.currentQuestion++;
    
    // If there are no more questions, then end the game
    if (currentShowing.currentQuestion >= currentShowing.questions.length) {
        // TODO: End the game ???
        // unregisterTheater(theater);
        currentShowing.currentQuestion = 0; // For now just wrap around
    }
    
    console.log(theater);
    save(theater);
}

function isGameActive (theater) {
    return Boolean(_theaters[theater._id]);
}

function save (theater) {
    if(!_collection) {
        throw new Error("The collection must be set before a save can be processed.")
    }

    _collection.save(theater, { w: 1 }, function (err, result) {
        if (err) {
            throw new Error('Error: Could save the specified entity');
        }
    });
};

exports.service = {
    init: init,
    start: start,
    stop: stop
};