var axios = require("axios");
var keys = require('../config/keys');


var getGeolocation = function(zip) {
  console.log(zip)
  return axios.get(`http://api.wunderground.com/api/${keys.WUndergroundKey}/geolookup/q/${zip}` + ".json")
    .then(response => {

      if (response.data.error) {
        throw response.data.error
      }

      return response;

    }).catch(err => {
      // throw error to raise outside
      console.log(err);
    })
}


module.exports = getGeolocation;
