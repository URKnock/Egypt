var w, h, x, y;
var scene;
var effect;

w = $("#background").width() / 1920;
h = $("#background").height() / 1080;
x = $("#background").width() / 2.0;

function init() {
	$("#dialogue").click(function() {
		$("form").submit();
	});
	
	setSound();
	
	var nextButton = document.querySelector('#nextButton');
	nextButton.style.display = "block";
};

$(document).ready(function() {
	setDialogueSize();
	
	if($("#dialogue_img").width() == 0) {
		location.reload(true);
	}
	
	$(window).resize(function() {
		location.reload(true);
	});
	
	scene = $("input[name='scene']").val();
	if(scene == 1) {
		$("#loading").style.display = block;
		$("#loading").fadeOut(2000);
	}
	
	effect = document.getElementsByTagName('audio')[2];
});