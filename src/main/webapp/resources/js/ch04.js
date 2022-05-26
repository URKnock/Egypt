var w, h, x, y;
var scene;
var effect;

w = $("#background").width() / 1920;
h = $("#background").height() / 1080;
x = $("#background").width() / 2.0;

setSomething();

function init() {
	$("#dialogue").click(function() {
		$("form").submit();
	});
	
	setSomething();
	
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

function home() {
	location.href = "chapter02";
}
function setting() {
	$("#setting").css("display", "flex");
}
function help() {
	$("#help").css("display", "flex");
}
function shabti() {
	$("#shabti").css("display", "flex");
}

function setSomething() {
	setSound();
	setSetting();
	setHelp();
	setShabti();
	
	$("#setting").hide();
	$("#help").hide();
	$("#shabti").hide();
}

function setNextButton(t, l) {
	var nextButton = document.querySelector('#nextButton');
	nextButton.style.display = "block";
	nextButton.style.position = "absolute";
	nextButton.style.top = $("#title").height() + t;
	nextButton.style.left = $("#dialogue_img").width() + l;
}