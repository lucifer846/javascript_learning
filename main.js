/*const req = require("./mouse")
console.log(req.car)
const mouse = ["Banana", "language", "mango"]*/
const fruits = ["Apple", "Orange", "Apple", "Mango"];
//console.log(fruits.indexOf("Orange"))
num = [16,4,29,9,25];

let text = "";

num.forEach(element => { // forEach function takes three arguments(value,index,array)
    text += element + "<br>"            //but here only one could be given
});
console.log(text)
let new_num = num.map(f);

function f(elmt) {
    return elmt *2; 
}
console.log(new_num);