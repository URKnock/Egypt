var w, h, x, y;
var scene, index, flag;

var Effect, boilLoop, fireLoop;
var Effect_status = false;

function effect(thisEffect) {
	if (Effect_status) {
		thisEffect.pause();
		thisEffect.currentTime = 0;
	} else { Effect_status = true; }
	thisEffect.play();
}

$(document).ready(function() {

	Effect = document.getElementById("effect");
	boilLoop = document.getElementById("boilLoop");
	fireLoop = document.getElementById("fireLoop");
	
	effect(boilLoop); effect(fireLoop);

	$(window).resize(function() {
		location.reload(true);
	});

	//전달받는 flag값들 얻어오기
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();

	var sound = document.getElementById("voice");

	$("#dialogue_bg").hide();
	$("#dialogue").hide();
	$("#blur").hide();

	if ((scene == 1 && index == 0)) {
		console.log(scene, index);

		$("#ammut").on("click", function() {
			$("#ammut").attr("src", '/resources/character/ch11/1층_암무트3.webp');
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch10/ammut1.mp3'); effect(Effect); }, 500);
			setTimeout(function() { $("#ammut").attr("src", '/resources/character/ch11/1층_암무트1.webp'); }, 2000);
			setTimeout(function() { $("#dialogue_bg").fadeIn(500); $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime = 0; sound.play(); }, 2500);
			setTimeout(function() { $("#ammut").attr("src", '/resources/character/ch11/1층_암무트2.webp'); }, 2550);
		});

		$("#dialogue").on("click", function() {
			sound.pause();
			$("#dialogue_bg").fadeOut(500); $("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			$("#ammut").attr("src", '/resources/character/ch11/1층_암무트1.webp');
		});
	}
});

function home() {
	location.href = "/chapter02";
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
	setSetting();
	setHelp();
	setShabti();

	$("#setting").hide();
	$("#help").hide();
	$("#shabti").hide();
}

function init() { //화면 초기화
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 1980;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;

	setDialogueSize();
	setSound(0);
	setSomething();

	var bg1 = $("#monkeys"); //원숭이 탕
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);

	var bg2 = $("#hellFire"); //바닥 마젠타색 불꽃
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("bottom", 0);

	var bg4 = $("#ground"); //땅바닥
	bg4.width($("#background").width()); //계산 X, 배경에 배율이 맞춰야 함
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("bottom", 0);

	var bg5 = $("#ammut"); //암무트
	bg5.width(bg5.prop("naturalWidth") * w);
	bg5.height(bg5.prop("naturalHeight") * w);
	bg5.css("bottom", $("#ground").height());

	var bg6 = $("#human"); //사자
	bg6.width(bg6.prop("naturalWidth") * w);
	bg6.height(bg6.prop("naturalHeight") * w);
	bg6.css("bottom", $("#ground").height());
}

function center(element) { //중앙으로 정렬
	centerX(element);
	centerY(element);
}
function centerX(element) {
	$(element).css("left", x - ($(element).width() / 2));
}
function centerY(element) {
	$(element).css("bottom", $("#dialogue").height() + 265 * w);
}

function resize(element) {
	$(element).width($(element).prop("naturalWidth") * w);
	$(element).height($(element).prop("naturalHeight") * w);
}
function resizeWH(element, ew, eh) {
	$(element).width(ew * w);
	$(element).height(eh * w);
}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function() {
		$('<img/>')[0].src = this;
	});
}

function interaction() { };