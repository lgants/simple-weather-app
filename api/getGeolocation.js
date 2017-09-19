var axios = require("axios");
var keys = require("../config/keys");

var getGeolocation = function(zip) {
  return axios.get(`http://api.wunderground.com/api/${keys.API_KEY}/geolookup/q/${zip}` + ".json")
    .then(response => {

      if (response.data.error) {
        throw response.data
      }

      return response;
    }).catch(err => {
      console.log(err);
    })
}


module.exports = getGeolocation;
