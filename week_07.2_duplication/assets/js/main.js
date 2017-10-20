$(document).ready(function () {
	console.log("JQuery is working!");

	//make elements draggable--DONE
	$(function () {
		$('.drag').draggable();
	});

	
//break the image into smaller and smaller pieces on hover
$("#space").mouseenter(function() {
  		$("#space").css("display", "none");
  	});

	$('#spaceFour').mouseleave(function () {
		$("#spaceFour").css("display", "none");
		$("#spaceSixteen").css("opacity", "1");
			$('#spaceParent').animate({
    			opacity: 0
  			}, 5000, function() {
		});
	});



});