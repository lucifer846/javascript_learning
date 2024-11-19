const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=>{

    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(()=>{
        console.log('hello')
    })

    greet()
    greet()
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
        res.end(data)
    
});    })

server.listen(3000, 'localhost', ()=>{   //localhost is 127.0.0.1
    console.log("listening for request on port 3000") // In browser it is typed as localhost:3000
})