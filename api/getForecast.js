var axios = require("axios");
var keys = require('../config/keys');

var getForecast = function(obj) {

  let { state, city } = obj;

  return axios.get(`http://api.wunderground.com/api/${process.env.API_KEY}/forecast/q` + `/${state}/${city}` + ".json")
    .then(response => {

      if (response.data.error) {
        throw response.data
      }

      return response;
    }).catch(err => {
      console.log(err);
    })
}

module.exports = getForecast;
