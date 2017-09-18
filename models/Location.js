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


// LocationSchema.query.findOrCreate  = function(conditions) {
//   // add check to verify conditions is object
//   this.findOne(conditions)
//   .then(record => {
//     if (record) {
//       return record
//     } else {
//       var location = new (this)(conditions);
//       return location.save();
//     }
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

LocationSchema.plugin(timestamps);
module.exports = mongoose.model('Location', LocationSchema);
