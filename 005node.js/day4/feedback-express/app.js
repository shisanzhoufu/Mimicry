var express = require('express')

// 1.创建app
var app = express()

var comments=[
    {name:'jack',message:'hi everybody',dateTime:'2020-5-6'},
    {name:'mary',message:'hi everybody',dateTime:'2020-5-6'},
    {name:'tom',message:'hi everybody',dateTime:'2020-5-6'},
    {name:'jonh',message:'hi everybody',dateTime:'2020-5-6'},

]

app.use('/public/',express.static('./public'))
app.engine('html', require('express-art-template'))

app.get('/',function(req,res){
    res.render('index.html',{
        comments:comments
    })
})

app.get('/post',function(req,res){
    res.render('post.html')
})

app.get('/pinglun',function(req,res){
    var comment = req.query
    comment.dateTime = '2020-5-10 12:30'
    comments.unshift(comment)
    //重定向跳转首页
    res.redirect('/')
    //res.statusCode = 302
    // res.setHeader('location','/')
})

app.listen(3000,function(){
    console.log('running...')
})