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
		}
	}

	scrollHandler = function() {

		let that = this;
		let scrollTop = window.pageYOffset;

		for (i = 0; i < paralaxxed.length; i++) {
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

			if (attribute == "margintop") {
				paralaxxed[i].style.marginTop = sign + tweenDelta + "rem";
			} else {
				console.log(attribute)
				paralaxxed[i].style.transform = "translateY(" + tweenDelta + "px) translateZ(0)" + defaultRotation;
				paralaxxed[i].style.webkitTransform = "translateY(" + tweenDelta + "px) translateZ(0)" + defaultRotation;
			}
			paralaxxed[i].dataset.currentDelta = tweenDelta;
		}

		// so scrollHandler calls itself to keep getting triggered when we paint.
		// window.requestAnimationFrame( scrollHandler );
	}

	// init the thing
	function init() {
		let that = this;
		let paralaxxedsettings = {
			"multiplier" : "0.2",
			"positionType": "absolute",
			"rotation": "rotate(-45deg)",
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
