// Get the configuration module
var config = require("./common/config");
console.log("Configurations loaded");

// Create the database connection
var databaseFactory = require("./common/databaseFactory");
var db = databaseFactory.create(config);
console.log("Database connection established")

// Create the routes
var io = require('socket.io');
var express = require("express");
var app = express();


// Bootstrap the web server
var http = require("http");
var server = http.createServer(app);
io = io.listen(server);
server.listen(config.settings.port, config.settings.serverName);
console.log("Server started");
console.log("Listening at: " + config.settings.serverName + ":" + config.settings.port);


// Add the routes
var routesFactory = require("./common/routesFactory");
routesFactory.create(config, app, db, io);
app.use(express.static("client")); // Use express to configure the server to servce static file from the "client" directory
console.log("Routes created");


io.sockets.on('connection', function (socket) {
    console.log("A client connected. Total clients: " + io.sockets.clients().length);
});