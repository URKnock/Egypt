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
	
	//var effect = document.getElementsByTagName('audio')[2];
	//effect.src = "resources/bgm/ch04/effect/cow.mp3";
	//effect.play();
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
		$("#loading").fadeOut(2000);
	} else {
		$("#loading").hide();
	}
	
	effect = document.getElementsByTagName('audio')[2];
});

function effSoundPlay( soundName ) {
	effect.src = "resources/bgm/ch04/effect/"+soundName+".mp3";
	effect.play();
}