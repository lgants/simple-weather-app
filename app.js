var express = require('express');
// var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var keys = require('./config/keys');
// require('./models/Forecast');
// require('./models/Location');

mongoose.connect(keys.mongoURI);
var app = express();


var routes = require('./routes');
app.use('/', routes);


var PORT = process.env.PORT || 5000;
app.listen(PORT);
