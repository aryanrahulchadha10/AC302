var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 1200;
var HEIGHT = 800;

var x,y;
var mx, my;

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28)
	ctx.closePath()
	ctx.strokeStyle = "navy"
	ctx.stroke()
	ctx.fillStyle = "cyan"
	ctx.fill()
}

function init(){
	x=  600
	y= 400
	mx= 3
	my= 4
	return setInterval(draw,20);
}

function draw(){
	clear();
	circle(x,y,31.4);
	x= x+ mx
y= y+ my

if(x+mx < 0 || x+mx> WIDTH){
	mx= -mx
}
if(y+my < 0 || y+my> HEIGHT){
	my= -my
}

}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT)
}

init()