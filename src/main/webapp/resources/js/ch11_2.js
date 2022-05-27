var w, h, x, y;
var scene, index, flag;

var Effect, waveLoop, fireLoop;
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
	fireLoop = document.getElementById("fireLoop");
	
	effect(waveLoop); effect(fireLoop);
	
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
	
	if ((scene == 2 && index == 0)) {
		console.log(scene, index);
		
		$("#devil").on("click", function() {
			$("#pot_dead").attr("src", '/resources/object/ch11/2층_항아리사자2.webp');
			setTimeout(function() { $("#devil").attr("src", '/resources/character/ch11/2층_악마3.webp'); }, 2000);
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch11/hit.mp3'); effect(Effect); }, 2400);
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자_놀람.webp'); }, 2600);
			setTimeout(function() { $("#devil").attr("src", '/resources/character/ch11/2층_악마1.webp'); }, 3800);
			setTimeout(function() { $("#pot_dead").attr("src", '/resources/object/ch11/2층_항아리사자1.webp'); }, 4000);
			setTimeout(function() { $("#dialogue_bg").fadeIn(500); $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime=0; sound.play();}, 4500);
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자.webp'); }, 4525);
			setTimeout(function() { $("#devil").attr("src", '/resources/character/ch11/2층_악마2.webp'); }, 4550);
		});
		
		$("#dialogue").on("click", function() {
			sound.pause();
			$("#dialogue_bg").fadeOut(500); $("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			$("#devil").attr("src", '/resources/character/ch11/2층_악마1.webp');
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

	w = $("#background").width() / 1920;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;
	
	setDialogueSize();
	setSound(0);
	setSomething();

	var bg1 = $("#platform"); //2층 단상
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) + 700 * w);
	bg1.css("bottom", 160 * w);

	var bg2 = $("#hellFireFront"); //2층 땅불1
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) - 250 * w);
	bg2.css("bottom", 0);

	var bg3 = $("#hellFireBack"); //2층 땅불2
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x - (bg1.width() / 2.0) - 250 * w);
	bg3.css("bottom", 0);

	var bg4 = $("#arrow"); //화살표
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - (bg1.width() / 2.0) + 1080 * w);
	bg4.css("bottom", $("#hellFireFront").height() + 170 * w);

	var bg5 = $("#ground"); //땅바닥
	bg5.width($("#background").width()); //계산 X, 배경에 배율이 맞춰야 함
	bg5.height(bg5.prop("naturalHeight") * w);
	bg5.css("bottom", 0);

	var bg6 = $("#pot_back"); //2층 항아리 안
	bg6.width(bg6.prop("naturalWidth") * w);
	bg6.height(bg6.prop("naturalHeight") * w);
	bg6.css("left", x - (bg1.width() / 2.0) - 70 * w);
	bg6.css("bottom", $("#hellFireFront").height() - 150*w);

	var bg7 = $("#pot_inner"); //2층 항아리 탕
	bg7.width(bg7.prop("naturalWidth") * w);
	bg7.height(bg7.prop("naturalHeight") * w);
	bg7.css("left", x - (bg1.width() / 2.0) - 80 * w);
	bg7.css("bottom", $("#hellFireFront").height() - 135*w);

	var bg8 = $("#pot_frame"); //2층 항아리 밖
	bg8.width(bg8.prop("naturalWidth") * w);
	bg8.height(bg8.prop("naturalHeight") * w);
	bg8.css("left", bg6.css("left")); //bg6의 css 값을 읽어와서 그대로 넣기
	bg8.css("bottom", bg6.css("bottom"));

	var bg9 = $("#devil"); //악마 
	bg9.width(bg9.prop("naturalWidth") * w);
	bg9.height(bg9.prop("naturalHeight") * w);
	bg9.css("left", x - (bg1.width() / 2.0) + 400 * w);
	bg9.css("bottom", $("#platform").height() + 155*w);

	var bg10 = $("#arrow_pre"); //반대 화살표
	bg10.width(bg10.prop("naturalWidth") * w);
	bg10.height(bg10.prop("naturalHeight") * w);
	bg10.css("left", x - (bg1.width() / 2.0) - 700 * w);
	bg10.css("bottom", bg4.css("bottom"));

	var bg11 = $("#pot_dead"); //2층 항아리 탕 안 사자
	bg11.width(bg11.prop("naturalWidth") * w);
	bg11.height(bg11.prop("naturalHeight") * w);
	bg11.css("left", x - (bg1.width() / 2.0) + 160 * w);
	bg11.css("bottom", $("#hellFireFront").height() - 125*w);
	
	var bg12 = $("#human"); //사자
	bg12.width(bg12.prop("naturalWidth") * w);
	bg12.height(bg12.prop("naturalHeight") * w);
	bg12.css("left", x - (bg1.width() / 2.0) - 530 * w);
	bg12.css("bottom", $("#ground").height());
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