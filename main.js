// && is logical and operator
// || is logical or operator
// ! is logical not operator
// ** is same as Math.pow(x,3) function

function display(a, b) { // function naming is same as variable
    return a*b
}

obj = {
    age:23,
    car:"maruti",
    show: function() {
        console.log("shown")
        console.log(this.age+" is the age")
        console.log(this.car+" is the car")
    }
}
obj.show()
// there aer a lot of html events for which js can respond