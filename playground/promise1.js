const request = require('request');


const geocode = (address) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof address === 'string') {
                var varAddress = encodeURIComponent(address);
                request({
                    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${varAddress}`,
                    json: true
                }, (error, response, body) => {
                    if(error) {
                        reject("There is error occured")
                    } else if(body.status === "ZERO_RESULTS") {
                        reject("Unable to show the address");
                    } else if(body.status === "OK") {
                        resolve({
                            address: body.results[0].formatted_address,
                            lat: body.results[0].geometry.location.lat,
                            lng: body.results[0].geometry.location.lng
                        });
                    }
                });
            } else {
                reject('Unsolved');
            }
        }, 1500);
    })
}


geocode('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log(error)
})