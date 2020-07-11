var template = require('art-template')
var fs = require('fs')

fs.readFile('./03.tpl.html',function(err,data){
    if(err){
        return console.log('404 not found')
    }
    // data是二进制 render需要接受二进制
    var ret = template.render(data.toString(),{
    name:'jack',
    age:19
    })
    console.log(ret)
})
