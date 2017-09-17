var express = require('express');
var router = express.Router();
const axios = require("axios");

var keys = require('../config/keys');


router.get('/api/weather/:zip', function(req, res, next) {
  let zip = req.params.zip;

  axios.get(`http://api.wunderground.com/api/${keys.WUndergroundKey}/geolookup/q/${zip}` + ".json")
    .then(function(result1) {

      if (result1.data.error) {
        throw result1.data.error
      }

      let { city, state } = result1.data.location;

      return Promise.all([
        result1,
        axios.get(`http://api.wunderground.com/api/${keys.WUndergroundKey}/forecast/q` + `/${state}/${city}` + ".json")
      ]);
    })
    .then(function(results) {
      if (results[1].data.error) {
        throw results[1].data.error
      }

      // save data in mongoose

      res.send(results[1].data.forecast.simpleforecast.forecastday)

    })
    .catch(function(err){
      console.log(err)
    });
});


module.exports = router;
