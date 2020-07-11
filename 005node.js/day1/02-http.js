var http=require('http')

var server= http.createServer()

server.on('request',function(request,response){
    if(request.url=='/login'){
    console.log('接收到请求'+request.url)
    response.write('index')
    // response.end()
    }else if(request.url=='/h'){
        console.log('接收到请求'+request.url)
    response.write('hahahahahah')
    // response.end()
    }else{
        console.log('接收到请求'+request.url)
    response.write('node')
    // response.end()
    }
    response.end()
    console.log('接收到请求'+request.url)
})

server.listen(3000,function(){
    console.log('服务器启动成功')
})