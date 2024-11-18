const { error } = require('console');
const fs = require('fs');

//reading files
fs.readFile('./blog.txt', (err, data)=>{
    if (err){
        console.log(err)
    } else {
        console.log(data.toString())
    }
})
console.log("last line")