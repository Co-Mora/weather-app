
const asyncApp = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject("Argument must be number")
            }
        }, 2500)
        
    })
}

asyncApp(2, 10).then((res) => {
    console.log("Result: " + res);
    return asyncApp(res, '22')
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

// const somePromise = new Promise((resolve, reject) => {

//     setTimeout(() =>{
//         reject("nothing");
//     }), 2500;

// });


// somePromise.then((mess) => {
//     console.log("Success: ", mess);
    
// }, (errorMess) => {
//     console.log(errorMess)
// })