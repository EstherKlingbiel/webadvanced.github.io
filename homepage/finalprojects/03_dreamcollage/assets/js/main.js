$(document).ready(function(){
	//test to see if jquery is working
	console.log("JQuery is working!");

	//add bodyFade animation to fadeDiv (which is parent to all other page content) on mouseenter
	$('#fadeDiv').mouseenter(function () {
		$(this).addClass('bodyFade');
	});

	if (Cookies.getJSON('space')) {
		//if the cookie already exists...
		var spacePositions = Cookies.getJSON('space');

		$("#spaceParent").children("img").css({"left" : spacePositions[0] + "px", "top" : spacePositions[1] + "px"});

		console.log('the cookie exists');
	} 

	//'SPACE'
		$('#spaceParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#spaceParent').mousedown(function () {
			//trigger opacity animation on mousedown
			$(this).addClass('fade');

			//description shows up and follows the mouse
			$('#spaceDescription').css("display", "block");
		});

		//make description go away and set cookie position (to position where last moved)
		$('#spaceParent').mouseup(function () {
			// you want to get the position of the element
			var leftPosition = $(this).offset().left;
			var rightPosition = $(this).offset().top;

			console.log(leftPosition, rightPosition);

			//set the cookie
			Cookies.set('space', [leftPosition, rightPosition], { expires: 7 });

			$('#spaceDescription').css("display", "none");
		});

	//bug fix? didnt work. but maybe one day.
	/*
	$('.drag').draggable({
   		scroll:true,
   		start: function(){
      	$(this).data("startingScrollTop",$(this).parent().scrollTop());
   	},

   		drag: function(event,ui){
      		var st = parseInt($(this).data("startingScrollTop"));
      		ui.position.top -= $(this).parent().scrollTop() - st;
   		}
	});*/
	
	//'COMET'
		$('#cometParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#cometParent').mousedown(function () {
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
		$('#computerParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#computerParent').mousedown(function () {
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
		$('#rosesParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#rosesParent').mousedown(function () {
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
		$('#fishParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#fishParent').mousedown(function () {
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
		$('#dolphinsParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#dolphinsParent').mousedown(function () {
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
		$('#waterBlueParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#waterBlueParent').mousedown(function () {
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
		$('#snakeParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#snakeParent').mousedown(function () {
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#snakeDescription').css("display", "block");
		});

		//make description go away
		$('#snakeParent').mouseup(function () {
			$('#snakeDescription').css("display", "none");
		});

	//'RAINBOW'
		$('#rainbowParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#rainbowParent').mousedown(function () {
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
		$('#handParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#handParent').mousedown(function () {
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
		$('#poolParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#poolParent').mousedown(function () {
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
		$('#drowningParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#drowningParent').mousedown(function () {
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
		$('#owlParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		 $('#owlParent').mousedown(function () {
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
		$('#jewelsParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#jewelsParent').mousedown(function () {
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
		$('#nightParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#nightParent').mousedown(function () {
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
		$('#wildAnimalParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#wildAnimalParent').mousedown(function () {
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
		$('#mouthParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#mouthParent').mousedown(function () {
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
		$('#prayerParent').mouseenter(function () {
			//make element draggable
			$(this).draggable();
		});

		$('#prayerParent').mousedown(function () {
			//trigger opacity animation on mousedown
			$(this).addClass('fade');
			//description shows up and follows the mouse
			$('#prayerDescription').css("display", "block");
		});

		//make description go away
		$('#prayerParent').mouseup(function () {
			$('#prayerDescription').css("display", "none");
		});

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