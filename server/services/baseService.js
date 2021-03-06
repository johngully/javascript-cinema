var BaseService = function () {
    var collection = {};
    var io = {};

    var serviceName = '';

    var init = function (collectionName, db, socketio) {
        serviceName = collectionName;
        collection = db.collection(collectionName);
        io = socketio;
    };

    /**
    * Get all entities
    */
    var all = function (request, response) {
        collection.find().toArray(function (err, results) {
            if (err) {
                response.send(500, 'Error: Could not get the entities');
                return;
            }
            response.send(results);
        });
    };

    /**
    * Get the entity specified by the "id"
    */
    var find = function (request, response) {
        var id = request.params.id;
        collection.findOne({ _id: id }, function (err, result) {
            if (err) {
                response.send(500, 'Error: Could not find the specified entity');
                return;
            }
            response.send(result);
        });
    };

    /**
    * Save the entity provided in the request body
    */
    var save = function (request, response) {
        var entity = request.body;
        collection.save(entity, { w: 1 }, function (err, result) {
            if (err) {
                response.send(500, 'Error: Could save the specified entity');
                return;
            }

            // Always return the object from the save
            if (result === 1) {
                result = entity
            }
            
            // Send the result to the requestor
            response.send(result);

            // Broadcast the update to all clients
            if (io && io.sockets) {
                io.sockets.emit(serviceName+'-save', result);
            }

        });
    }

    /**
    * Deletes the entity specified by the "id"
    */
    var remove = function (request, response) {
        var id = request.params.id;
        collection.remove({ _id: id }, function (err, result) {
            if (err) {
                response.send(500, 'Error: Could not delete the specified entity');
                return;
            }
            response.send(request.body);
        });
    };

    return {
        init: init,
        serviceName: serviceName,
        all: all,
        find: find,
        save: save,
        remove: remove
    };
};

var createDerivedService = function (serviceName) {
    var newService = new BaseService();
    var base_init = newService.init;
    newService.serviceName = serviceName;
    newService.init = function (db, io) {
        base_init(newService.serviceName, db, io);
    };
    return newService;
}

exports.service = BaseService;
exports.createDerivedService = createDerivedService;