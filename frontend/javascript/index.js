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




// Event Logging
const logsnag = new window.LogSnag({
	token: 'e55b2bd6e0689a8da22e42eadb4d6c39',
	project: 'prologue',
})

let book_meeting_event = function() {
	logsnag.publish({
		channel: "work-interest",
		event: "Schedule Meeting",
		description: "A Visitor may be scheduling a meeting.",
		icon: "🗓️",
		notify: true
		// tags: {
		// 	email: "user@example.com",
		// 	uid: "uid1234"
		// }
	})
	.then(result => console.log(result))
	.catch(error => console.log(error));
}

let buy_monthly = function() { buy_retainer_event('Monthly') }
let buy_quarterly = function() { buy_retainer_event('Quarterly') }

let buy_retainer_event = function(retainer_type) {
	logsnag.publish({
		channel: "work-interest",
		event: "Buy a Retainer",
		description: "A Visitor wants to buy a "+retainer_type+" retainer.",
		icon: "💰",
		notify: true
	})
	.then(result => console.log(result))
	.catch(error => console.log(error));
}

let designer_interested_event = function() {
	logsnag.publish({
		channel: "work-interest",
		event: "Design Interest",
		description: "A Designer may be emailing you soon.",
		icon: "🎨",
		notify: true
	})
	.then(result => console.log(result))
	.catch(error => console.log(error));
}

let say_hello_event = function() {
	logsnag.publish({
		channel: "work-interest",
		event: "Say Hello",
		description: "Someone is going to say hello!",
		icon: "🎨",
		notify: true
	})
	.then(result => console.log(result))
	.catch(error => console.log(error));
}

const bookCall = document.querySelector("#action-book-a-call");
const buyRetainerMonthly = document.querySelector("#action-buy-a-retainer-monthly");
const buyRetainerQuarterly = document.querySelector("#action-buy-a-retainer-quarterly");
const designerCollaborate = document.querySelector("#action-designer-collaborate");
const sayHello = document.querySelector("#action-say-hello");

bookCall.addEventListener("click", book_meeting_event, false);
buyRetainerMonthly.addEventListener("click", buy_monthly, false);
buyRetainerQuarterly.addEventListener("click", buy_quarterly, false);
designerCollaborate.addEventListener("click", designer_interested_event, false);
sayHello.addEventListener("click", say_hello_event, false);
