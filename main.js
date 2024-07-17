/*const fruits = ["Apple", "Orange", "Apple", "Mango"];

let btn1 = document.querySelector("#tryit");

btn1.onclick = () => {
    alert("what's up Beachh")
}

let btn2 = document.querySelector("#endbutton");

btn2.onclick = () => {
    console.log("working")
}

let div = document.querySelector('div')
div.onmouseover = () => {console.log('you hovered over the div');}

class Car {
    constructor(color, model, year) {
        this.color = color
        this.model = model
        this.year = year
    }
    checkscore() {
        if (this.year>2010) {
            console.log("Good Score")
        }
        else {
            console.log("nah shove it up your arse")
        }
    }
}d

car = new Car('white', 's-class', '2019')
car.checkscore()*/

let btn = document.createElement("button");
btn.innerText = "click me bitch"

document.querySelector("#endbutton").after(btn);
document.querySelector("#endbutton").remove();
btn.onclick = () => {
    location = "https://www.google.com"
}