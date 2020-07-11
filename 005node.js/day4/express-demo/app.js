var express = require('express')

// 1.创建app
var app = express()

app.get('/',function(req,res){
    res.end('hello')
})

app.use('/public/',express.static('public'))

app.listen(3000,function(){
    console.log('running...')
})