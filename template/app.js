var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineWidth = 10;
moveTo(75,0);
ctx.lineTo(75,0);
ctx.lineTo(0,100);
ctx.lineTo(75,200)
ctx.lineTo(150,100)
ctx.closePath();
ctx.strokeStyle = "green";
ctx.stroke();
ctx.fillStyle="blue"
ctx.fill()

