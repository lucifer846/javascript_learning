const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.setHeader('Content-Type',  'text/html');
    path = './htmls/'
    switch(req.url){
        case '/': 
            path+='index.html'
            res.statusCode = 200
            break
        case '/about':
            path+='about.html'; 
            res.statusCode = 200
            break;
        case '/about-me':
            res.setHeader('Location', '/about')
            res.statusCode = 301
            res.end()
            break
        default:
            path+="404.html"
            res.statusCode = 404;
            break
    }
    html = fs.readFile(path, (err, data)=>{
        console.log(data)
        res.end(data)
    
});    })

server.listen(3000, 'localhost', ()=>{   //localhost is 127.0.0.1
    console.log("listening for request on port 3000") // In browser it is typed as localhost:3000
})