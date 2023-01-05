/**
 * parallaxative.js 0.0.2
 */
export let parallaxController;

;(function() {

	parallaxController = this;

	function extend(){
		for(var i=1; i<arguments.length; i++)
			for(var key in arguments[i])
				if(arguments[i].hasOwnProperty(key))
					arguments[0][key] = arguments[i][key];
		return arguments[0];
	}

	// HTML Stuff
	this.paralaxxed = document.getElementsByClassName("parallaxy-animate");

	// Create the logic
	parallaxate = function(parallax_elements, defaultSettings) {
		let elements = parallax_elements;

		for (i = 0; i < elements.length; i++) {
			// console.log('running')

			// Combines the settings
			let settings = JSON.parse(JSON.stringify(defaultSettings)); // defaultSettings.copy();
			let options = JSON.parse(elements[i].getAttribute('parallaxy-options'));
			elements[i].settings = extend(settings, options);

			if (options.positionType == 'relative') {
					elements[i].initial_offset = parseInt(window.getComputedStyle(elements[i], null).getPropertyValue('margin-top'), 10);
					elements[i].dataset.positionType = "relative";
			} else {
					elements[i].initial_offset = elements[i].offsetTop;
					elements[i].dataset.positionType = "absolute";
			}

			elements[i].dataset.currentDelta = 0;
			elements[i].dataset.newDelta = 0;

			// Checks to see if the element we're animating will always animate, or only when it's visible.
			if (elements[i].settings.parent == '') {
				elements[i].settings.parentElement = document.getElementsByClassName('default')[0];
			} else {
				elements[i].settings.parentElement = document.getElementsByClassName(elements[i].settings.parent)[0];
			}

		}
	}

	scrollHandler = function() {

		let that = this;

		for (i = 0; i < paralaxxed.length; i++) {

			// Only trigger if it's in the viewport
			let parent = paralaxxed[i].settings.parentElement
			let scrollTop = (paralaxxed[i].getBoundingClientRect().top - window.innerHeight)
			// console.log("scrollTop: " + scrollTop + ", parent.getBoundingClientRect().top:" + parent.getBoundingClientRect().top)
			if (paralaxxed[i].getBoundingClientRect().top < window.innerHeight & scrollTop < 0) {

				let currentDelta = paralaxxed[i].dataset.currentDelta;

				let newDelta = (0 + (scrollTop * paralaxxed[i].settings.multiplier));
				// let tweenDelta = (currentDelta - ((currentDelta - newDelta) * 0.08));
				let tweenDelta = (currentDelta - ((currentDelta - newDelta)));
				// let defaultRotation = " rotate(-45deg) ";
				let defaultRotation = " rotate(0deg) ";
				// let defaultRotation = paralaxxed[i].settings.rotation;

				let attribute = paralaxxed[i].settings.attribute;
				let direction = paralaxxed[i].settings.direction;
				let sign = "-"
				if (direction == "down") {
					sign = "+"
				}

				// work on the thing.
				if (attribute == "margintop") {
					paralaxxed[i].style.marginTop = sign + tweenDelta + "rem";
				} else {
					paralaxxed[i].style.transform = "translateY(" + tweenDelta + "px) translateZ(0)" + defaultRotation;
					paralaxxed[i].style.webkitTransform = "translateY(" + tweenDelta + "px) translateZ(0)" + defaultRotation;
				}
				paralaxxed[i].dataset.currentDelta = tweenDelta;


			} else {
				// console.log("false", parent.getBoundingClientRect())
			}
		}

		// so scrollHandler calls itself to keep getting triggered when we paint.
		// window.requestAnimationFrame( scrollHandler );
	}

	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	// init the thing
	function init() {
		let that = this;
		let paralaxxedsettings = {
			"multiplier" : "0.2",
			"positionType": "absolute",
			"rotation": "rotate(-45deg)",
			"parent": "",
		};

		if(paralaxxed.length > 0) {
			parallaxate(that.paralaxxed, paralaxxedsettings);
		}
		console.log('parallaxy started')
		scrollHandler();
	}

	init()
})();

// export parallaxController;
