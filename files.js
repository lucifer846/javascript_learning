const { error } = require('console');
const fs = require('fs');
const { fileURLToPath } = require('url');

//reading files
// fs.readFile('./blog.txt', (err, data)=>{
//     if (err){
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

// fs.writeFile('./blog.txt', "this file is rewritten", ()=>{
//     console.log("file was written")
// })

// console.log("last line")

filepath = './assets'

if (!fs.existsSync(filepath)){
    fs.mkdir((filepath), (err)=>{
        if (err) {
            console.log(err)
        } else {
            console.log("file created")
      }
    })
}
else {
    fs.rmdir(filepath, (err)=>{
        if (err) {
            console.log(err)
        } else {
            console.log("file deleted")
        }
    })
}

fs.unlink('./blog.txt', ()=>{
    console.log("file is deleted")
})