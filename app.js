const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('view engine', 'ejs');

const blogs = [
    {title: "Uberman Sleep", text:"lorem ipsum"},
    {title: "Dymaxion Sleep", text:"Invented by Fuller"},
    {title:"2-Hour Monophasic Sleep", text:"Heavily Researched by Saurabh Kalra"}
]
app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index', {title:"Home", blogs});
})
app.get('/about', (req,res)=>{
    res.render("about", {title: "About"})
})
app.get('/blogs/create', (req, res)=>{
    res.render('create', {title:"Create"})
})

app.use((req, res)=>{
    res.statusCode = 404;
    res.render("404", {title:"404"})
})


app.listen(3000)