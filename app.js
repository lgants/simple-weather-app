var express = require('express');
// var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var keys = require('./config/keys');
// require('./models/Forecast');
// require('./models/Location');

mongoose.connect(keys.mongoURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(callback) {
  console.log("Connection succeeded.");
});


var app = express();


var routes = require('./routes');
app.use('/', routes);


var PORT = process.env.PORT || 5000;
app.listen(PORT);
