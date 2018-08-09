

const yargs = require('yargs');
const axios = require('axios');



const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string:   true
        
        }
}) 
.help()
.alias('help', 'h')
.argv;


var varAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${varAddress}`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to fetch that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/0b7f3fc3182bbf7e0129cd52f73d211b/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl)
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
}).catch((e) => {
    if(e.code == 'ENOTFOUND') {
        console.log("Unable to resolve");
    } else {
        console.log(e.message);
    }
})


