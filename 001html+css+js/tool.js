 function getStyle(obj,name){
                if(window.getComputedStyle){
                  return  getComputedStyle(obj,null)[name];
                }else{
                    return obj.currentStyle[name];
                }
            }

            /*
            * 创建一个动画函数
            * 第一个参数操作对象
            * 第二个参数是需要修改的样式
            * 第三个参数移动方向距离
            * 第四个参数速度
            * 第五个参数一个回调函数
            */
            function move(obj,atrr,target,speed,callback){
                //停止上一个计时器
                clearInterval(obj.timer);

                //判断speed的方向
                //  定义一个变量curent即当前位置
                // 当当前位置大于目标位置target时，speed为负值，向左移动
               var curent=parseInt(getStyle(obj,atrr));
               if(curent>target){
                speed=-speed;
               }

                obj.timer=setInterval(function(){

                   // 调用getStyle获取盒子属性值，通过parseInt转化为数值类型
                   var oldValue= obj.style[atrr]=parseInt(getStyle(obj,atrr));
                   var newValue=oldValue+speed;

                   // 当大于或小于最大最小值时，让newValue等于最大最小值
                   // 当速度小于0即负数，表示盒子左移，当newValue<target（设定的最小值）时，让newValue=最小值
                   if((speed<0&&newValue<target)||(speed>0&&newValue>target)){
                    newValue=target;
                   }

                   obj.style[atrr]=newValue+"px";

                   // 当newValue等于最小值时，关闭定时器
                   if(newValue==target){
                    clearInterval(obj.timer);
                    
                    // 如果有回调函数再调用
                    callback&&callback();
                }
                
                },30);
              }