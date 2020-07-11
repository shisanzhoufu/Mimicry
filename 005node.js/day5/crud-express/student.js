var mongoose = require('mongoose')

var Schema = mongoose.Schema
// 连接数据库
mongoose.connect('mongodb://localhost/itcast',{useMongoClient:true})

var studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:String,
    },
    hobbies:{
        type:String,
    }
})

module.exports = mongoose.model('Student',studentSchema)