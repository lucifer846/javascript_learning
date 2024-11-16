
function sum(a, b) {
    console.log(a+b)
}

function multiply(a,b) {
    console.log(a*b)
}

function calculator(a,b, callback) {
    callback(a,b)
}

global.setTimeout(() => {
    console.log("this is timeout");
    clearInterval(thisinterval)
}, 2000);

calculator(3,4, sum)
calculator(6,3, multiply)