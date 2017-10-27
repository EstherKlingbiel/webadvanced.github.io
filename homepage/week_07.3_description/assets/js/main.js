$(document).ready(function () {
	console.log("JQuery is working!");

	//make elements draggable--DONE
	$('#spaceParent').mousedown(function () {
		$('#spaceParent').draggable();
	});
	

	//have a description onclick that follows the mouse
	$('#spaceParent').mousedown(function(e) {
		$('#spaceDescription').css("display", "inline-block");
		$('#spaceDescription').css({
			left: e.pageX,
			top: e.pageY
		});

	});

	$('#spaceParent').mouseup(function () {
		$('#spaceDescription').css("display", "none");
	});

	



	

	

});

	