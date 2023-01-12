import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"
import {parallaxController} from "parallaxative.js"

console.info("Bridgetown is loaded! and working.")

/* setup parallax */
scrollyscroll = function() {
	parallaxController.scrollHandler();
	window.requestAnimationFrame( scrollyscroll );
}
scrollyscroll();

/* Setup controlled text */
freelancer = document.getElementsByClassName("ostentatious-font")[0];
let control = 1680; // represents max screen width
let magicNumber = 17; // represents font size at that screenwidth
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
	// console.log(transform)
	freelancer.style.fontSize = transform;
}
if (freelancer != undefined) {
	sizey();
	window.addEventListener('resize', function(event) {
		sizey()
	}, true);
}

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

if (bookCall != undefined) { bookCall.addEventListener("click", book_meeting_event, false); }
if (buyRetainerMonthly != undefined) { buyRetainerMonthly.addEventListener("click", buy_monthly, false); }
if (buyRetainerQuarterly != undefined) { buyRetainerQuarterly.addEventListener("click", buy_quarterly, false); }
if (designerCollaborate != undefined) { designerCollaborate.addEventListener("click", designer_interested_event, false); }
if (sayHello != undefined) { sayHello.addEventListener("click", say_hello_event, false); }

/* setup menu thing */
const stopper = document.getElementsByClassName('reaches-top')[0]
const menu = document.getElementsByClassName('header')[0]
show_hide_menu = function() {
	// console.log("show_hide_menu:, stopper.getBoundingClientRect().top :", stopper.getBoundingClientRect().top )
	// console.log("!menu.classList.contains('visible'):", !menu.classList.contains('visible'))
	if (stopper.getBoundingClientRect().top < 0 && !menu.classList.contains('visible')) {
		menu.classList.add("visible");
	} else if (stopper.getBoundingClientRect().top > 0 && menu.classList.contains('visible')) {
		menu.classList.remove("visible");
	}
	window.requestAnimationFrame( show_hide_menu );
}
if (stopper != undefined) {
	show_hide_menu()
}

/* Setup revealer thing */
const contentBlock = document.getElementsByClassName('content')[0]
revealer = function() {
	let wight = window.innerHeight
	for (i = 0; i < contentBlock.children.length; i++) {
		// element = contentBlock.children[i]
		// console.log(contentBlock.children[i].getBoundingClientRect().top)
		if (contentBlock.children[i].getBoundingClientRect().top < wight && !contentBlock.children[i].classList.contains('revealed')) {
			contentBlock.children[i].classList.add('revealed');
		}
	}
}
if (contentBlock != undefined) {
	document.addEventListener("scroll", revealer);
	revealer()
}
