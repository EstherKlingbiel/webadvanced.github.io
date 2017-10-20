$(document).ready(function () {
	console.log("JQuery is working!");

	//make elements draggable--DONE
	$(function () {
		$('.drag').draggable();
	});

	//on .mouseover: 
		//a. have the moused over image start to degrade in opacity from 1 to 0. have it disappear in 20-30 seconds--DONE 

	$('#astronautsParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {
  		});
  	});

	$("#spaceParent").mouseover(function() {
  			$(this).animate({
    			opacity: 0
  			}, 5000, function() {
		});
  	});//end spaceParent mouseover

  	$('#blackholeParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#rosesParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#waterBlueParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#cometParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#computerParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#dolphinsParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#fishParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#snakeParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	$('#waterPurpleParent').mouseover(function () {
  			$(this).animate({
  				opacity: 0
  			}, 5000, function () {

  			});
  	});

  	//SEE BELOW FOR WHY THIS IS COMMENTED OUT CURRENTLY.
  	/*for (var i=1; i <= 1; i++) {
    //Max x percentage = 25%; so it wont cause vertical overflow
    var x = Math.max(0, Math.min(25, Math.ceil(Math.random() * 100)));
    //Max y percentage = 
    var y = Math.max(0, Math.min(65, Math.ceil(Math.random() * 100)));
    $('#spaceParent').css({
        position: 'absolute',
        top: y + '%',
        left: x + '%',
    });

    $('#astronautsParent').css({
        position: 'absolute',
        top: y + '%',
        left: x + '%',
    });
}*/

//b. when image is completely gone, have it reload in a randomized place on the screen.
	//1. so i have the random for loop that sets the imgs to random positions on page load, but i want to do this after the opacity of the div == 0. i tried making an if statement telling me if jquery recognizes that the opacity animates to 0:
		/*if ($('#spaceParent').css('opacity') === 0) {
       		console.log("ZER0");
		} else {
			console.log("NOT ZER0")
		}*/
	//i tried it with like 5 different syntaxes, but even when the opacity goes down to zero, it doesn't listen! the console.log doesn't change.
		//how do i get it to listen? and after that, how do i incorporate the for loop to only work when the opacity is at 0 and the image is reloading in a new, random place on the page?


	

	
  		



	



















	


});//end document.ready