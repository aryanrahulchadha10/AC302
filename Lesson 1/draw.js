console.log("test");

var c= document.getElementById("myCanvas");
var ctx= c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(300,300);
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.stroke();
ctx.strokeStyle = "blue";
ctx.strokeRect(50,50,200,200);
ctx.fillStyle = "red";
ctx.fillRect(50,50,200,200);
ctx.clearRect(75,75,100,100);

var c1= document.getElementById("myCanvas1");
var ctx1= c1.getContext("2d");
ctx1.moveTo(0,0);
ctx1.lineTo(300,300);
ctx1.fillRect(0,0,300,300);
ctx1.clearRect(25,25,100,100);
ctx1.clearRect(175,25,100,100);
ctx1.clearRect(25,175,100,100);
ctx1.clearRect(175,175,100,100);