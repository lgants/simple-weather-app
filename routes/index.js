var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Forecast = require('../models/forecast');
var Location = require('../models/location');

var getForecast = require('../api/getForecast');
var getGeolocation = require('../api/getGeolocation');


router.get('/api/weather/:zip', function(req, res, next) {
  let zip = req.params.zip;

  Location.findOne({zip: `${zip}`})
    .then(locationObj => {
      if (locationObj) {
        return locationObj
      } else {
        return getGeolocation(zip)
          .then(response => {
            // FIXME catch error
            
            let { city, state, zip } = response.data.location;

            return Location.create({
              zip: zip,
              city: city,
              state: state,
              forecasts: [],
            })
              .then(result => {
                return result
              })
          })
      }
    })
    .then(locationObj => {
      let lastFetch = new Date(locationObj.updatedAt).getTime()
      let hourAgo = new Date() - (1000*60*60)

      let forecastsPresent = locationObj.forecasts.length > 1;
      let forecastsActive = lastFetch > hourAgo

      if (forecastsPresent && forecastsActive) {
        return locationObj
      } else {
        return getForecast(locationObj)
          .then(response => {

            let forecastDays = response.data.forecast.simpleforecast.forecastday.map(function(element, index) {

              let { icon_url, icon, conditions, high, low, avewind, avehumidity, date } = element;

              return {
                epoch: date.epoch,
                icon_url: icon_url,
                icon: icon,
                conditions: conditions,
                high: high.fahrenheit,
                low: low.fahrenheit,
                avewind_dir: avewind.dir,
                avewind_mph: avewind.mph,
                avehumidity: avehumidity,
              };
            });

            return Location.findOneAndUpdate(
              { _id: locationObj.id },
              { forecasts: forecastDays }
            )
              .then(updatedLocationObj => {
                return updatedLocationObj
              })
              .catch(err => {
                throw err
              })
          })
      }
    })
    .then(result => {
      res.send(result)
    })
})

module.exports = router;
