/*
Thanks: https://stackoverflow.com/a/4796985 for randomized positioning of divs
*/

// collect all the divs
var divs = document.getElementsByClassName("random");

// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for (var i = 0; i < divs.length; i++) {
	// shortcut! the current div in the list
	var thisDiv = divs[i];

	// get random numbers for each element
	randomTop = getRandomNumber(0, winHeight * 0.04);
	randomLeft = getRandomNumber(0, winWidth * 0.04);

	// Random rotation source
	randomRotate = Math.floor(Math.random() * 10 + 1);
	randomRotate2 = Math.floor(Math.random() * 10 + 1);

	// update top and left position
	thisDiv.style.top = randomTop + "vw";
	thisDiv.style.left = randomLeft + "vw";

	// Update rotation
	thisDiv.style.transform = "rotate(" + randomRotate + "deg)";
	thisDiv.style.transform = "rotate(" + randomRotate2 + "deg)";

	// Hide divs until JS has completed
	thisDiv.style.opacity = "1";
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

