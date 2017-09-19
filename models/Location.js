const mongoose = require('mongoose');
const { Schema } = mongoose;
var timestamps = require('mongoose-timestamp');

const ForecastSchema = require('./forecast');

const LocationSchema = new Schema({
  zip: String,
  city: String,
  state: String,
  forecasts: [ForecastSchema]
});

LocationSchema.plugin(timestamps);
module.exports = mongoose.model('Location', LocationSchema);
