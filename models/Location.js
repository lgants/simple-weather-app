const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamps = require('mongoose-timestamp');

const ForecastSchema = require('./Forecast');

const LocationSchema = new Schema({
  zip: String,
  city: String,
  state: String,
  forecasts: [ForecastSchema]
});

LocationSchema.plugin(timestamps);
module.exports = mongoose.model('Location', LocationSchema);
