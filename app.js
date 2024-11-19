const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/htmls/index.html`)
})
app.get('/about', (req,res)=>{
    res.sendFile(`${__dirname}/htmls/about.html`)
})
app.get('/about-us', (req,res)=>{
    res.redirect("/about")
})
app.use((req, res)=>{
    res.statusCode = 404;
    res.sendFile(`${__dirname}/htmls/404.html`)
})


app.listen(3000)