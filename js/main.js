/**
 * Created by 潘佳慧 on 2016/9/13.
 */
var can;
var ctx;

var w;
var h;

var girlPic=new Image();
var starPic=new Image();

var num=60;
var stars=[];

var lastTime;
var deltaTime;

var switchy=false;
var life=0;
function init(){
    //console.log("a");
    can=document.getElementById("canvas");
    ctx=can.getContext("2d");

    w=can.width;
    h=can.height;

    document.addEventListener('mousemove',mousemove,false);//添加鼠标移动事件的监听

    girlPic.src="src/girl.jpg";
    starPic.src="src/star.png";

    for(var i=0;i<num;i++)
    {
        var obj=new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime=Date.now();//获取当前时间
  //  console.log(w);

    gameloop();

}
document.body.onload=init;

function gameloop(){
    window.requestAnimationFrame(gameloop);

    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;

    console.log(deltaTime);
    drawBackground();
    drawGirl();
    drawStars();
}
//绘制背景
function drawBackground(){
    ctx.fillStyle="#393550";
    ctx.fillRect(0,0,w,h);
}

function drawGirl(){
    ctx.drawImage(girlPic,100,150,600,300);
}

function mousemove(e){
    if(e.offsetX || e.layerX){
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
       // console.log(px);
        if(px>100&&px<700&&py>150&&py<450)
        {
            switchy=true;

        }
        else
        {
            switchy=false;
        }
        console.log(switchy);

    }
}