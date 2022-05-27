var w, h, x, y;
var scene, index, flag;

var Effect, Effect2;
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
	Effect2 = document.getElementById("effect2");
	pillarLoop = document.getElementById("pillarLoop");
	
	effect(pillarLoop);

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

	console.log(scene, index, flag); // 100, 200, 300

	if ((scene == 3 && index == 0)) {
		$("#devil").on("click", function() {
			$("#devil").removeClass("select"); $("#devil").removeClass("pikachu");
			
			$("#devil").attr("src", '/resources/character/ch13/악마3_특수.webp');
			$("#effect").attr("src", '/resources/bgm/ch13/devil_sword.mp3'); effect(Effect);
			setTimeout(function() { $("#donkey1").attr("src", '/resources/character/ch13/당나귀화사자_특수.webp'); }, 500); 
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자_놀람.webp'); }, 500); 
			setTimeout(function() { $("#effect2").attr("src", '/resources/bgm/ch13/devil_attack.wav'); effect(Effect2); }, 1000);
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch13/donkey_howl.wav'); effect(Effect); }, 1000);
			
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자.webp'); }, 2300);
			setTimeout(function() { $("#donkey1").attr("src", '/resources/character/ch13/당나귀화사자_1.webp'); }, 2300); 
			setTimeout(function() { $("#devil").attr("src", '/resources/character/ch13/악마3_기본.webp'); }, 2300); 
			setTimeout(function() { $("#dialogue_bg").fadeIn(500); $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime = 0; sound.play(); }, 2400);
		});

		$("#dialogue").on("click", function() {
			sound.pause();
			$("#dialogue_bg").fadeOut(500); $("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			$("#effect").attr("src", '/resources/bgm/ch13/donkey_howl.wav'); effect(Effect);

			$("#devil").addClass("select"); $("#devil").addClass("pikachu");
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

	var item, i = 1;
	var ele = document.getElementById('interact');
	var eleCount = ele.childElementCount;
	for (i = 1; i <= eleCount; i++) {
		item = $("#interact > img:nth-child(" + i + ")");
		item.width(item.prop("naturalWidth") * w);
		item.height(item.prop("naturalHeight") * w);
	}

	$("#ground").width($("#background").width());
	$("#wall").width($("#background").width());
}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function() {
		$('<img/>')[0].src = this;
	});
}

function interaction() { };