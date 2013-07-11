var serviceName = "badges";

var baseService = require("./baseService")
var badgesService = baseService.createDerivedService(serviceName);

exports.service = badgesService;