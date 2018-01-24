console.log ("test")

var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var img= new Image()
img.src = 'percy-jackson.jpg'

img.onload = function(){
	ctx.drawImage(img,0,0,1200,600)
}

var img2= new Image()
img2.src = 'HogwartsCastle.jpg'

img2.onload = function(){
	ctx.drawImage(img2,0,0,100,50)
}
