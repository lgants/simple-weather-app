const mongoose = require('mongoose');
const { Schema } = mongoose;

const forecastSchema = require('./forecastSchema');

const locationSchema = new Schema({
  zipCode: Number,
  fetchedAt: Date,
  forecasts: [forecastSchema],
});

mongoose.model('Location', locationSchema);
