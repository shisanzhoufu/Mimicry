
var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

// 自定义一部分数据
var comments=[
    {name:'jack',message:'hi everybody',dateTime:'2020-5-6'},
    {name:'mary',message:'hi everybody',dateTime:'2020-5-6'},
    {name:'tom',message:'hi everybody',dateTime:'2020-5-6'},
    {name:'jonh',message:'hi everybody',dateTime:'2020-5-6'},

]

// 创建server
http
    .createServer(function(req,res){

        //url.parse()方法获取URL字符串，对其进行解析，然后返回URL对象
         // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
        var parseObj = url.parse(req.url,true)
        // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
        var pathname = parseObj.pathname
        if(pathname==='/'){
            fs.readFile('./views/index.html',function(err,data){
                if(err){
                    return res.end('404 not found')
                }
                // 将模板源代码编译成函数并立刻执行
                var htmlStr = template.render(data.toString(),{
                    comments:comments
                })
                res.end(htmlStr)
            })
            // 统一处理：
      //    如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
      //    所以我们就直接可以把请求路径当作文件路径来直接进行读取
        }else if (pathname.indexOf('/public/')===0){

        fs.readFile('.'+pathname,function(err,data){
            if(err){
                return res.end('404 not found')
            }
            res.end(data)
        })
        }else if (pathname === '/post'){
            console.log(pathname)
            fs.readFile('./views/post.html',function(err,data){
                if(err){
                    return res.end('404 not found')
                }
                res.end(data)
            })
            }else if(pathname==='/pinglun'){

                // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
                // 所以接下来要做的就是：
                //  1. 获取表单提交的数据 parseObj.query，就是post页面提交过来的姓名和评论数据
                //  2. 将当前时间日期添加到数据对象中，然后存储到数组中
                //  3. 让用户重定向跳转到首页 /
                //  当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了
                // res.end(JSON.stringify(parseObj.query))
                
                var comment = parseObj.query
                comment.dataTime = new Date()
                comments.unshift(comment)
                res.statusCode = 302
                res.setHeader('Location','/')
                res.end()
            }else{
            fs.readFile('./views/404.html',function(err,data){
                if(err){
                    return res.end('404 not found')
                }
                res.end(data)
            })
        }
    })
    .listen(3000,function(){
        console.log('running')
    })