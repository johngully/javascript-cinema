var serviceName = "players";

var baseService = require("./baseService")
var badgesService = baseService.createDerivedService(serviceName);

exports.service = badgesService;