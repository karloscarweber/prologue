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

	let deltaForce = magicNumber / control

	if (window.innerWidth > control) {
		gamma = magicNumber
	} else {
		gamma = gamma * magicNumber
	}

	let transform = ""+gamma+"rem";
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
		icon: "✉️",
		notify: true
	})
	.then(result => console.log(result))
	.catch(error => console.log(error));
}

let hire_us_event = function() {
	logsnag.publish({
		channel: "work-interest",
		event: "Hire Us",
		description: "Someone is going to Hire You. Expect an email!",
		icon: "✉️",
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
const contactUs = document.querySelector("#action-contact-us");
const hireUs = document.querySelector("#action-hire-us");

if (bookCall != undefined) { bookCall.addEventListener("click", book_meeting_event, false); }
if (buyRetainerMonthly != undefined) { buyRetainerMonthly.addEventListener("click", buy_monthly, false); }
if (buyRetainerQuarterly != undefined) { buyRetainerQuarterly.addEventListener("click", buy_quarterly, false); }
if (designerCollaborate != undefined) { designerCollaborate.addEventListener("click", designer_interested_event, false); }
if (sayHello != undefined) { sayHello.addEventListener("click", say_hello_event, false); }
if (contactUs != undefined) { contactUs.addEventListener("click", say_hello_event, false); }
if (hireUs != undefined) { hireUs.addEventListener("click", hire_us_event, false); }

/* setup menu thing */
const stopper = document.getElementsByClassName('reaches-top')[0]
const menu = document.getElementsByClassName('header')[0]
show_hide_menu = function() {
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
		if (contentBlock.children[i].getBoundingClientRect().top < wight && !contentBlock.children[i].classList.contains('revealed')) {
			contentBlock.children[i].classList.add('revealed');
		}
	}
}
if (contentBlock != undefined) {
	document.addEventListener("scroll", revealer);
	revealer()
}

/* setup menu thing */
const menubutton = document.getElementById('open-close-menu-button')
const main = document.getElementsByClassName('item-main')[0]
nudge_main = function() {
	main.classList.toggle('nudged');
	menubutton.classList.toggle('flipped');
}
if (menubutton != undefined) {
	menubutton.addEventListener("click", nudge_main, false);
}

let price_message_monthly = "<strong>50</strong> hours dedicated to your projects monthly.<br>iOS, Ruby, and Web."
let price_message_quarterly = "<strong>50</strong> hours dedicated to your projects monthly.<br> iOS, Ruby, and Web.<br>Interface Design.<br><strong>$1000 per month savings</strong>"
let price_title_monthly = "$7,499/<span>month</span>"
let price_title_quarterly = "$6,499/<span>month</span>"

/* Setup swippy swappy thingy */
const monthlyButton = document.getElementById('choose-monthly')
const quarterlyButton = document.getElementById('choose-quarterly')
const priceText = document.getElementById('price-text')
const priceMessage = document.getElementById('pricing-message')
show_monthly = function() {
	monthlyButton.classList.remove('inactive');
	quarterlyButton.classList.add('inactive');
	priceText.innerHTML = price_title_monthly;
	priceMessage.innerHTML = price_message_monthly;
	buyRetainerMonthly.classList.remove('hidden');
	buyRetainerQuarterly.classList.add('hidden');
}
show_quarterly = function() {
	monthlyButton.classList.add('inactive');
	quarterlyButton.classList.remove('inactive');
	priceText.innerHTML = price_title_quarterly;
	priceMessage.innerHTML = price_message_quarterly;
	buyRetainerMonthly.classList.add('hidden');
	buyRetainerQuarterly.classList.remove('hidden');
}
if (monthlyButton != undefined
	&& quarterlyButton != undefined
	&& priceText != undefined
	&& buyRetainerMonthly != undefined
	&& priceMessage != undefined
	&& buyRetainerQuarterly != undefined) {
	monthlyButton.addEventListener("click", show_monthly, false);
	quarterlyButton.addEventListener("click", show_quarterly, false);
}

/* Setup sun rise */
sun = document.getElementById("sun");
let sunWidth = 1300; // represents the sun's Actual width
sunrise = function() {
	sun.style.transform = "scale("+(window.innerWidth / sunWidth)+")";
}
if (sun != undefined) {
	sunrise();
	window.addEventListener('resize', function(event) {
		sunrise()
	}, true);
}

/* Interaction observer for the doohickey */
services_box = document.getElementById('services_box');
services_box.prevRatio = 0;
let services_reveal = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > services_box.prevRatio) {
			services_box.classList.add('active')
		} else {
			services_box.classList.remove('active')
		}
		services_box.prevRatio = entry.intersectionRatio;
	});
}
/* active */
if (services_box != undefined) {
	let observer = new IntersectionObserver(services_reveal, {threshold: 0.25});
	observer.observe(services_box)
}

/* Interaction observer for the bullet points stuff */
measured_process = document.getElementById('measured');
measured_process.prevRatio = 0;
let points_reveal = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > measured_process.prevRatio) {
			measured_process.classList.add('visible')
		}
		measured_process.prevRatio = entry.intersectionRatio;
	});
}
/* active */
if (measured_process != undefined) {
	let observer = new IntersectionObserver(points_reveal, {threshold: 0.75});
	observer.observe(measured_process)
}
