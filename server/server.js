// Get the configuration module
var config = require("./common/config");
console.log("Configurations loaded");

// Create the database connection
var databaseFactory = require("./common/databaseFactory");
var db = databaseFactory.create(config);
console.log("Database connection established")

// Create the routes
var express = require("express");
var app = express();
var routesFactory = require("./common/routesFactory");
console.log("route factory included");
routesFactory.create(config, app, db);
console.log("route factory created");
app.use(express.static("client")); // Use express to configure the server to servce static file from the "client" directory
console.log("Routes created");

// Bootstrap the web server
var http = require("http");
var server = http.createServer(app);
server.listen(config.settings.port, config.settings.serverName);
console.log("Server started");
console.log("Listening at: " + config.settings.serverName + ":" + config.settings.port);
