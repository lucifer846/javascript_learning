// const req = require("./mouse")
// console.log(req)
// console.log      


cars = ["maruti", "suzuki", "toyota", "fortuner"]
let text0 = "<ul>"
for (let i = 0;i<cars.length;i++) {
    text0 += "<li>"+cars[i]+"</li>"
}
text0+="</ul>"
console.log(text0)


let text = "<ul>"

cars = ["maruti", "suzuki", "toyota", "fortuner"]
cars.forEach((element) => { // forEach method instead of looping
    text+="<li>"+element+"</li>"
});
text+="</ul>"
console.log(text)

cars.forEach((i) => {
    console.log(`print ${i}`)
}) 

