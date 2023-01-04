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
