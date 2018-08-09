
const request = require('request');

const geocodeAddress = (address, callback) => {

var varAddress = encodeURIComponent(address);

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${varAddress}`,
    json: true
}, (error, response, body) => {

   
    if(error) {
        callback("There is error occured")
    } else if(body.status === "ZERO_RESULTS") {
        callback("Unable to show the address");
    } else if(body.status === "OK") {
        callback(undefined, {
            address: body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            lng: body.results[0].geometry.location.lng
        });
    }

   
});

};
module.exports.geocodeAddress = geocodeAddress


const newFun = () => {
    console.log("Hello");
}

module.exports = newFun;