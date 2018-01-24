console.log ("test")

var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var img= new Image()
img.src = '18gayle2.jpg'

img.onload = function(){
	ctx.drawImage(img,100,100,150,150)
}

var img2= new Image()
img2.src = 'vk.jpg'

img2.onload = function(){
	ctx.drawImage(img2,200,200,250,250)
}