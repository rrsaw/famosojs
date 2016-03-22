var bgColor = "#324D5C";
var titleColor = "#46B29D";
var descColor = "#E37B40";
var infoColor = "#F0CA4D";
var linkColor = "#DE5B49";
var urlImage = ('../images/razor3.png')


function randomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

function changeColor() {
	document.body.style.background = randomColor();
	document.getElementById("title").style.color = randomColor();
	document.getElementById("desc").style.color = randomColor();
	document.getElementById("info").style.color = randomColor();
	document.getElementById("link").style.color = randomColor();
	document.getElementById("link2").style.color = randomColor();
}

function changeColorPalette() {
	document.body.style.background = bgColor;
	document.getElementById("title").style.color = titleColor;
	document.getElementById("desc").style.color = descColor;
	document.getElementById("info").style.color = infoColor;
	document.getElementById("link").style.color = linkColor;
	document.getElementById("link2").style.color = linkColor;
}

function changeImage(imgName) {
	image = document.getElementById('razor');
	image.src = imgName;
}