# day5
#### 1.回调函数
- 应用程序（application program）会时常通过API调用库里所预先备好的函数。但是有些库函数（library function）却要求应用先传给它一个函数，好在合适的时候调用，以完成目标任务。这个被传入的、后又被调用的函数就称为回调函数（callback)
- 凡是需要得到一个函数内部异步操作的结果：setTimeout readFle ajax等都必须通过回调函数
```javascript
function res(x,y,callback){
setTimeout(function(){
    var ret = x+y
    callback(ret)

},1000)
}

res(10,20,function(ret){
    console.lo(ret)
})
```
