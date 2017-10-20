$(document).ready(function () {
	console.log("JQuery is working!");

	//make elements draggable--DONE
	$(function () {
		$('.drag').draggable();
	});

	//have a description onclick that follows the mouse
	$('#spaceParent').on('mousemove', function(e){
    $('#spaceDescription').css({
       left:  e.pageX,
       top:   e.pageY
   	 	});
	});

	$(document).click(function () {
		$('#spaceDescription').css("display", "none")
	});

});

	