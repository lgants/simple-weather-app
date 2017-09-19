var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// require('dotenv').config();
var keys = require("../config/keys");

mongoose.connect(keys.MONGO_URI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(callback) {
  console.log("Connection succeeded.");
});

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

var routes = require('./routes');
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


var PORT = process.env.PORT || 5000;
app.listen(PORT);
