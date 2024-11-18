const { error } = require('console');
const fs = require('fs');

//reading files
// fs.readFile('./blog.txt', (err, data)=>{
//     if (err){
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

fs.writeFile('./blog.txt', "this file is rewritten", ()=>{
    console.log("file was written")
})

console.log("last line")