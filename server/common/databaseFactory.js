/**
 * Creates the tingodb instance.  This can be substitued for MongoDb in the future.
 */
var create = function (config) {
    var tingodb = require("tingodb");
    var Db = tingodb().Db;
    return new Db(config.settings.dataPath, {});
};

exports.create = create;