// 1.引入http模块
var http=require('http')
var fs=require('fs')
// 2.创建server
var server=http.createServer()

// 3.监听server事件


//index.html和a.txt需要在www文件夹内
//方法一
//  server.on('request',function(req,res){
//     var url = req.url

//     if(url=='/'){
//         fs.readFile('./index.html',function(err,data){
//         if(err){
//             return res.end('404 not fond')
//         }
//     })
//     }else if(url==='/index.html'){
//         fs.readFile('./index.html',function(err,data){
//             if(err){
//                 return res.end('404 not fond')
//             }
//             res.end(data)
//         })
//     }else if(url==='/a.txt'){
//         fs.readFile('./a.txt',function(err,data){
//             if(err){
//                 return res.end('404 not fond')
//             }
//             res.end(data)
//         })
//     }
//     else{
//         res.end('wrong')
//     } 
// })

// 方法二 使用filePath
server.on('request',function(req,res){
var url = req.url
var path='./'
var filePath='/index.html'
if(url !== '/'){
    filePath = url
}
fs.readFile(path+filePath,function(err,data){
    if(err){
        return res.end('404 not fond')
    }
    res.end(data)
})
})


// 4.绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('running.....')
})
