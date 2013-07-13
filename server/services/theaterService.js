var serviceName = "theaters";

var baseService = require("./baseService")
var badgesService = baseService.createDerivedService(serviceName);

exports.service = badgesService;