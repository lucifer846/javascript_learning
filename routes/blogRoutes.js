const Blog = require('../models/blog')
const express = require('express')
router = express.Router()



router.post('/blogs',(req,res)=>{
    // console.log(req.body)
    const blog = new Blog(req.body)

    blog.save()
        .then((result)=>{
            res.redirect('/blogs')
        }).catch((err)=>{console.log(err)})
})

router.get('/blogs/:id', (req,res)=>{
    const id = req.params.id
    Blog.findbyId(id)
        .then((result)=>{
            res.render('details', {blog:result, title:"Blog Details"})
        })
})

router.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt : -1})
    .then((result)=>{
        res.render('index', {title:"All-Blogs",blogs:result})  
    })
    
})
router.get('/blogs/create', (req, res)=>{
    res.render('create', {title:"Create"})
})


module.exports = router;