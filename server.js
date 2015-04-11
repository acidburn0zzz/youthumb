// CALL THE PACKAGES
var express = require('express');
var app     = express();
var morgan  = require('morgan');
var config  = require('./config');
var path    = require("path");

// APP CONFIGURATION
//log all requests to the console
app.use(morgan('dev'));

// set static files location
app.use(express.static(__dirname + '/public'));

// ROUTES FOR OUR API

// MAIN CATCHALL ROUTE
// SEND USERS TO FRONTEND APPLICATION
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START SERVER
app.listen(config.port);