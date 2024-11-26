const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { result } = require('lodash')

const blogRoutes = require('./routes/blogRoutes')


const dbURI = "mongodb+srv://Saurabh:ConorMcgregor@nodejscluster.ns38w.mongodb.net/LocalNode?retryWrites=true&w=majority&appName=NodejsCluster"
mongoose.connect(dbURI)
    .then((result)=>{
        console.log('connected to db')
})  .catch((err)=>{console.log(err)})

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))

// const blogs = [
//     {title: "Uberman Sleep", text:"lorem ipsum"},
//     {title: "Dymaxion Sleep", text:"Invented by Fuller"},
//     {title:"2-Hour Monophasic Sleep", text:"Heavily Researched by Saurabh Kalra"}
// ]
// app.use(morgan('dev'))
app.use(express.static('public'))

// app.get('/add-blog', (req, res)=>{
//     const blog = new Blog({
//         title:"SPAMAL",
//         text:"Sleep Polyphasic as much as you like"
//     })
//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
// })


app.get('/', (req, res)=>{
    res.redirect("/blogs") 
})
app.get('/about', (req,res)=>{
    res.render("about", {title: "About"})


app.use(blogRoutes)


})
app.use((req, res)=>{
    res.statusCode = 404;
    res.render("404", {title:"404"})
})


app.listen(3000)