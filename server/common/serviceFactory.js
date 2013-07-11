/**
 * Creates the specified service and initializes it with the data store
 */
var create = function (serviceName, db) {
    console.log("create " + serviceName + " service");
    var serviceModule = require("../services/" + serviceName);    
    var service = Object.create(serviceModule.service);    
    service.init(db);
    return service;
};

exports.create = create;