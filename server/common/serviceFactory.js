/**
 * Creates the specified service and initializes it with the data store
 */
var create = function (serviceName, db, io) {
    var serviceModule = require("../services/" + serviceName);    
    var service = Object.create(serviceModule.service);    
    service.init(db, io);
    return service;
};

exports.create = create;