import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"
import {parallaxController} from "parallaxative.js"

console.info("Bridgetown is loaded! and working.")

scrollyscroll = function() {
	parallaxController.scrollHandler();
	window.requestAnimationFrame( scrollyscroll );
}
scrollyscroll();

freelancer = document.getElementsByClassName("ostentatious-font")[0];
let control = 1680; // represents max screen width
let magicNumber = 16.25; // represents font size at that screenwidth
sizey = function() {
	let gamma = (window.innerWidth/control)
	console.log(gamma)

	let deltaForce = magicNumber / control

	if (window.innerWidth > control) {
		gamma = magicNumber
	} else {
		gamma = gamma * magicNumber
	}

	let transform = ""+gamma+"rem";
	console.log(transform)
	freelancer.style.fontSize = transform;
}
sizey();


window.addEventListener('resize', function(event) {
	sizey()
}, true);
