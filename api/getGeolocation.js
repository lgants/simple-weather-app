var axios = require("axios");


var getGeolocation = function(zip) {
  console.log('hit get location')

  return axios.get(`http://api.wunderground.com/api/${process.env.API_KEY}/geolookup/q/${zip}` + ".json")
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
