const mongoose = require('mongoose');
const { Schema } = mongoose;

const ForecastSchema = new Schema({
  epoch: String,
  high: String,
  low: String,
  conditions: String,
  icon: String,
  icon_url: String,
  avewind_mph: String,
  avewind_dir: String,
  avehumidity: String
});

module.exports = ForecastSchema;
