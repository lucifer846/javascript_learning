/*const req = require("./mouse")
console.log(req.car)
const mouse = ["Banana", "language", "mango"]*/
const fruits = ["Apple", "Orange", "Apple", "Mango"];
//console.log(fruits.indexOf("Orange"))
num = [16,4,29,9,25];


console.log(num.sort((a,b) => {return a-b}));//this is compare function that sorts numbers
console.log(num.sort((a,b) => {return b-a}));

console.log(num.sort(()=>{return 0.5 - Math.random()})); //maths.random() returns pseudorandom num b/w 0 to 1

for (let i = num.length -1; i > 0; i--) { // fisher yates shuffle 
    let j = Math.floor(Math.random() * (i+1));
    let k = num[i];
    num[i] = num[j];
    num[j] = k;
  }
console.log(num);