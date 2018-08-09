


console.log("Program Starting");

setTimeout(() => {
    console.log("Callback");
}, 2000);



setTimeout(() => {
    console.log("Callback again: 0")
}, 0);

console.log("Ending program");