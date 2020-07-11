var mongoose = require('mongoose')

var Schema = mongoose.Schema
// 连接数据库
mongoose.connect('mongodb://localhost/test')

// 设计数据库结构内容
var userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
// 将结构发布为模型
// 第一个参数为数据库名，User=>users
// 第二个参数为架构Schema
// 返回值：模型构造函数
var User = mongoose.model('User',userSchema)


// ---------插入数据----------
// var admin = new User({
//     username:'mary',
//     password:'123456'
// })
// admin.save(function(err,ret){
//     if(err){
//         console.log('保存失败')
//     }else{
//         console.log('保存成功')
//         console.log(ret)
//     }
// })

// ---------数据查询----------
// User.find({
//     username:'jack'
// },function(err,ret){
//     if(err){
//         console.log('查询失败')
//     }else{
//         console.log('查询成功')
//         console.log(ret)
//     }
// })


// ---------查询所有数据----------
// User.find(function(err,ret){
//     if(err){
//         console.log('查询失败')
//     }else{
//         console.log('查询成功')
//         console.log(ret)
//     }
// })

// ---------删除数据----------
// User.remove({
//     username:'admin'
// },function(err,ret){
//     if(err){
//         console.log('删除失败')
//     }else{
//         console.log('删除成功')
//         console.log(ret)
//     }
// })

// ---------更新数据----------

// User.findByIdAndUpdate('5ec1ddbe6bcdf62d1cf2706b',{
//     password:'123'
// },function(err,ret){
//     if(err){
//         console.log('更新失败')
//     }else{
//         console.log('更新成功')
//         console.log(ret)
//     }
// })


