
const request = require('request');
const geocode = require('./geocode/geocode');
geocode()

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/0b7f3fc3182bbf7e0129cd52f73d211b/${lat},${lng}`,
        json: true
        
    }, (error, response, body) => {
    
       if(!error && response.statusCode === 200) {
        callback(undefined, {
            temperature:body.currently.temperature,
            aparentTemperature:body.currently.aparentTemperature
        })
       } else {
        callback("Unable to fetch data");
       }
    
        
    });
        
}

module.exports.getWeather = getWeather;
