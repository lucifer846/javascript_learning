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
btn.innerText = "click me now";
btn.style.backgroundColor = "red";
btn.style.color = "white"
document.querySelector("body").prepend(btn);
let para = document.querySelector(".ques").classList.add("newclass");

let trybtn = document.querySelector("#tryit");

trybtn.addEventListener("mouseover", () => {
    location = "https://www.google.com";
});

const fruits = {
    kind : "apple",
    color : "red",
    about : function() {
        console.log(`"its kind is ${this.kind} and color is ${this.color}"`)
    },
    nalla() {
        console.log("this is easier way to write methods")
    }
}

class Employee {
    constructor(name, age) {
        this.name = name 
        this.age = age
        console.log(`"${this.name} created successfully"`)
    }
    start() {
        console.log("start")
    }

    setExperience(experience) {
        this.experience = experience
    }

    stop() {
        console.log("stop")
    }
}


new Employee("rakesh", 33)
new Employee("saloni", 21)

class Student {
    constructor(name) {
        this.name = name
    }
    getname() {
        console.log(this.name)
    }
}

class TenthStudents extends Student {
    constructor(name, age) {
        super(name);
        this.age = age
    }
    percentage(percentage) {
        console.log(`"the percentage is ${percentage} "`)
    }
}

rajo = new TenthStudents("rajo", 23)
rajo.getname()
console.log(rajo.age)

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewdata() {
        console.log("website shit on your screen")
    }
}

class Admin extends User {
    constructor(name, email) {
    }
    editdata()  {
        console.log("welcome to this editing shit, enjoy")
    }
}
try {
let naya = new Admin("saurabh", "test@gmail.com")
} catch(err) {
    console.log("error")
}