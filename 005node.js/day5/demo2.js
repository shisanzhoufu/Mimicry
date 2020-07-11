var http = require('http')
var server = http.createServer(function(req,res){
    //http头部信息
    //状态码200
    //内容类型：text/plain,text/html
    res.end('<h1>hi,everybody</h1>')
})
server.listen(3000,function(){
    console.log('running....')
})