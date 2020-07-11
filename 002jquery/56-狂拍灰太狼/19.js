$(function(){

// 1.监听游戏规则的点击
$(".rules").click(function(){
    $(".rule").stop().fadeIn(100);
})
// 2.监听游戏规则的关闭
$(".close").click(function(){
    $(".rule").stop().fadeOut(100);
})
//3.监听开始按钮
$(".start").click(function(){

    //调用进度条效果
    $(this).stop().fadeOut(100);
    progressHandler();
    //调用灰太狼动画效果
    

})
//4.监听重新开始按钮
$(".restart").click(function(){
    $(".mask").stop().fadeOut(100);
    progressHandler();
})

//定义一个处理进度条的方法
function progressHandler(){

    //设置进度条的默认宽度
    $(".progress").css({
        width:180
    })
var timer=setInterval(function(){
    //拿到当前进度条的宽度
    var progressWidth=$(".progress").width();
    //减少进度条的宽度
    progressWidth-=1;
    //重新个进度条赋值宽度
    $(".progress").css({
        width: progressWidth
        });
    //监听进度条是否走完
    if(progressWidth<=0){
        //关闭定时器
        clearInterval(timer);
        //重新开始显示界面
        $(".mask").stop().fadeIn(100);
    }
},10)
}

 var wolfTimer;
    // 定义一个专门处理灰太狼动画的方法
    function startWolfAnimation() {
        // 1.定义两个数组保存所有灰太狼和小灰灰的图片
        var wolf_1=['./images/h0.png','./images/h1.png','./images/h2.png','./images/h3.png','./images/h4.png','./images/h5.png','./images/h6.png','./images/h7.png','./images/h8.png','./images/h9.png'];
        var wolf_2=['./images/x0.png','./images/x1.png','./images/x2.png','./images/x3.png','./images/x4.png','./images/x5.png','./images/x6.png','./images/x7.png','./images/x8.png','./images/x9.png'];
        // 2.定义一个数组保存所有可能出现的位置
        var arrPos = [
            {left:"100px",top:"115px"},
            {left:"20px",top:"160px"},
            {left:"190px",top:"142px"},
            {left:"105px",top:"193px"},
            {left:"19px",top:"221px"},
            {left:"202px",top:"212px"},
            {left:"120px",top:"275px"},
            {left:"30px",top:"295px"},
            {left:"209px",top:"297px"}
        ];

        // 3.创建一个图片
        var $wolfImage = $("<images src='' class='wolfImage'>");
        // 随机获取图片的位置
        var posIndex = Math.round(Math.random() * 8);
        // 4.设置图片显示的位置
        $wolfImage.css({
           position: "absolute",
            left:arrPos[posIndex].left,
            top:arrPos[posIndex].top
        });
        // 随机获取数组类型
        var wolfType = Math.round(Math.random()) == 0 ? wolf_1 : wolf_2;
        // 5.设置图片的内容
        window.wolfIndex = 0;
        window.wolfIndexEnd = 5;
        wolfTimer = setInterval(function () {
            if(wolfIndex > wolfIndexEnd){
                $wolfImage.remove();
                clearInterval(wolfTimer);
                startWolfAnimation();
            }
            $wolfImage.attr("src", wolfType[wolfIndex]);
            wolfIndex++;
        }, 300);

        // 6.将图片添加到界面上
        $(".container").append($wolfImage);

    }
});