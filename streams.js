const fs = require('fs')

readstream = fs.createReadStream('./blog3.txt', {encoding:'utf-8'})
writestream = fs.createWriteStream('./blog4.txt', {encoding:'utf-8'})

// readstream.on('data', (chunk)=>{
//     console.log("---New Data---")
//     console.log(chunk)
//     writestream.write("\nNEW-DATA\n")
//     writestream.write((chunk))
// })

//piping

readstream.pipe(writestream)