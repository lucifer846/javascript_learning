const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.setHeader('Content-Type',  'text/html');
    html = fs.readFile("./htmls/index.html", (err, data)=>{
        res.write(data)
        console.log(data)
        res.end()
    })
    
});

server.listen(3000, 'localhost', ()=>{   //localhost is 127.0.0.1
    console.log("listening for request on port 3000") // In browser it is typed as localhost:3000
})