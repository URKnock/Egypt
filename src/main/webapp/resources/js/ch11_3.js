var w, h, x, y;
var scene, index, flag;

var Effect, waveLoop;
var Effect_status = false;

function effect(thisEffect) {
	if (Effect_status) {
		thisEffect.pause();
		thisEffect.currentTime = 0;
	} else { Effect_status = true; }
	thisEffect.play();
}

$(document).ready(function(){
	
	Effect = document.getElementById("effect");
	waveLoop = document.getElementById("waveLoop");
	
	effect(waveLoop);
	
	$(window).resize(function() {
		location.reload(true);
	});
	
	//전달받는 flag값들 얻어오기
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	
	var sound = document.getElementById("voice");
	
	$("#devil2").hover(
		function() { 
			$(this).css('transform','scale(1.1)'); 
			$(this).css('transform-origin','center left'); },
		function() { 
			$(this).css('transform','scale(1.0)'); }
	);

	$("#dialogue_bg").hide();
	$("#dialogue").hide();
	$("#blur").hide();
	
	if ((scene == 3 && index == 0)) {
		console.log(scene, index);
		
		$("#devil2").on("click", function() {
				$("#devil2").attr("src", '/resources/character/ch11/3층_악마3.webp');
				setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자_눈물.webp'); }, 1000);
				setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch11/splash.mp3'); effect(Effect); }, 1300);
				setTimeout(function() { $("#devil2").attr("src", '/resources/character/ch11/3층_악마1.webp'); }, 2000);
				setTimeout(function() { $("#dialogue_bg").fadeIn(500); $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime=0; sound.play();}, 2500);
				setTimeout(function() { $("#devil2").attr("src", '/resources/character/ch11/3층_악마2.webp'); }, 3000);
		});
		
		$("#dialogue").on("click", function() {
			sound.pause();
			$("#human").attr("src", '/resources/character/ch11/사자.webp');
			$("#dialogue_bg").fadeOut(500); $("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			$("#devil2").attr("src", '/resources/character/ch11/3층_악마1.webp');
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

function setSomething() {
	setSetting();
	setHelp();

	$("#setting").hide();
	$("#help").hide();
}

function init() { //화면 초기화
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 1920;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;
	
	setDialogueSize();
	setSound(0);
	setSomething();
	
	var bg1 = $("#arrow_pre"); //화살표
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	
	var bg2 = $("#ground"); //땅바닥
	bg2.width(bg2.prop("naturalWidth") * w); 
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("bottom", 1 * w);
	
	var bg3 = $("#devil2"); //악마 
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("bottom", 1 * w);
	
	var bg4 = $("#human"); //사자
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - (bg1.width() / 2.0) - 750 * w);
	bg4.css("bottom", $("#ground").height() - 1 * w);
}

function center(element) { //중앙으로 정렬
	centerX(element);
	centerY(element);
}
function centerX(element) {
	$(element).css("left", x - ($(element).width() / 2));
}
function centerY(element) {
	$(element).css("bottom", $("#dialogue").height() + 265*w);
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
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function interaction() {};