$(document).ready(function(){
	//test to see if jquery is working
	console.log("JQuery is working!");

	//'SPACE'
		$('#spaceParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#spaceDescription').css("display", "block");
		});

		//make description go away
		$('#spaceParent').mouseup(function () {
			$('#spaceDescription').css("display", "none");
		});

	//'COMET'
		$('#cometParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#cometDescription').css("display", "block");
		});

		//make description go away
		$('#cometParent').mouseup(function () {
			$('#cometDescription').css("display", "none");
		});

	//'COMPUTER'
		$('#computerParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#computerDescription').css("display", "block");
		});

		//make description go away
		$('#computerParent').mouseup(function () {
			$('#computerDescription').css("display", "none");
		});

	//'ROSES' (DESCRIPTION: 'FLOWERS')
		$('#rosesParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#rosesDescription').css("display", "block");
		});

		//make description go away
		$('#rosesParent').mouseup(function () {
			$('#rosesDescription').css("display", "none");
		});

	//'FISH'
		$('#fishParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#fishDescription').css("display", "block");
		});

		//make description go away
		$('#fishParent').mouseup(function () {
			$('#fishDescription').css("display", "none");
		});

	//'DOLPHINS'
		$('#dolphinsParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#dolphinsDescription').css("display", "block");
		});

		//make description go away
		$('#dolphinsParent').mouseup(function () {
			$('#dolphinsDescription').css("display", "none");
		});

	//'WATER BLUE'
		$('#waterBlueParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#waterBlueDescription').css("display", "block");
		});

		//make description go away
		$('#waterBlueParent').mouseup(function () {
			$('#waterBlueDescription').css("display", "none");
		});

	//'SNAKE'
		$('#snakeParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#snakeDescription').css("display", "block");
		});

		//make description go away
		$('#snakeParent').mouseup(function () {
			$('#snakeDescription').css("display", "none");
		});

	/*'UFO'
		$('#ufoParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#ufoDescription').css("display", "block");
		});

		//make description go away
		$('#ufoParent').mouseup(function () {
			$('#ufoDescription').css("display", "none");
		});*/

	//'RAINBOW'
		$('#rainbowParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#rainbowDescription').css("display", "block");
		});

		//make description go away
		$('#rainbowParent').mouseup(function () {
			$('#rainbowDescription').css("display", "none");
		});
		
	//'HAND'
		$('#handParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#handDescription').css("display", "block");
		});

		//make description go away
		$('#handParent').mouseup(function () {
			$('#handDescription').css("display", "none");
		});

	//'POOL'
		$('#poolParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#poolDescription').css("display", "block");
		});

		//make description go away
		$('#poolParent').mouseup(function () {
			$('#poolDescription').css("display", "none");
		});

	//'DROWNING'
		$('#drowningParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#drowningDescription').css("display", "block");
		});

		//make description go away
		$('#drowningParent').mouseup(function () {
			$('#drowningDescription').css("display", "none");
		});

	//'OWL'
		 $('#owlParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#owlDescription').css("display", "block");
		});

		//make description go away
		$('#owlParent').mouseup(function () {
			$('#owlDescription').css("display", "none");
		});
		
	//'JEWELS'
		$('#jewelsParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#jewelsDescription').css("display", "block");
		});

		//make description go away
		$('#jewelsParent').mouseup(function () {
			$('#jewelsDescription').css("display", "none");
		});

	//'NIGHT'
		$('#nightParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#nightDescription').css("display", "block");
		});

		//make description go away
		$('#nightParent').mouseup(function () {
			$('#nightDescription').css("display", "none");
		});

	//'WILD ANIMAL'
		$('#wildAnimalParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#wildAnimalDescription').css("display", "block");
		});

		//make description go away
		$('#wildAnimalParent').mouseup(function () {
			$('#wildAnimalDescription').css("display", "none");
		});

	//'MOUTH'
		$('#mouthParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#mouthDescription').css("display", "block");
		});

		//make description go away
		$('#mouthParent').mouseup(function () {
			$('#mouthDescription').css("display", "none");
		});
		
	//PRAYER
		$('#prayerParent').mousedown(function () {
			//make element draggable
			$(this).draggable();
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#prayerDescription').css("display", "block");
		});

		//make description go away
		$('#prayerParent').mouseup(function () {
			$('#prayerDescription').css("display", "none");
		});

	//TO DO
		//Remember where the user dragged the images on page reload
		//Fix positioning glitch. Lukas, help.
		//put background images...or a div that will fade in as "bodyFade" fades out?

/*Cookie stuff
	//define cookie and its initial array
	var allCookies = [],//empty array
		circle = '<div class="circles" />'//element to call (in this case, test circle)

	//create a conditional to check whether the user already has this cookie
	if (Cookies.getJSON('circles')) {
		//if the cookie already exists...
		console.log("There is a cookie here");
	} else {
		//if the cookie doesn't already exist...
		console.log("This is the first cookie");

		//push the first circle in to the empty array ("allCookies")
		allCookies.push(circle);

		//set the cookie "circles", define its value & expiration date
		Cookies.set("circles", allCookies, {expires: 1});
			//cookie will expire in one day
	}

	//set a conditional if the cookie exists...
	if (Cookies.getJSON('circles')) {
		//get contents of cookie and equate it to a variable
		var existingCircles = Cookies.getJSON('circles');

		//iterate through retrieved array and output each variable with a loop :-(
		//for loop that appends each circle to the DOM...
		for (var i = 0; i < existingCircles.length; i++) {
			$('.cookieContainer').append(existingCircles[i]);
		}

		//append new value (circle) to cookies array on each visit (aka when the webpage is reloaded)
		existingCircles.push(circles);

		//the following line resets the cookie with the updated array:
		Cookies.set('circles', existingCircles, {expires: 1})
			//cookie will expire in one day
	}
*/
})//end jquery