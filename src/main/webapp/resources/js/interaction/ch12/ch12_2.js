var w, h, x, y;
var scene, index, flag;

var Effect;
var Effect_status = false;

function effect() {
	if (Effect_status) {
		Effect.pause();
		Effect.currentTime = 0;
	} else { Effect_status = true; }
	Effect.play();
}

$(document).ready(function() {

	Effect = document.getElementById("effect");

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

	console.log(scene, index, flag); // 010, 020, 100
	
	$("#jail").hover(
		function() { 
			$(this).css('transform','scale(1.05)'); 
			$(this).css('transform-origin','top center'); },
		function() { 
			$(this).css('transform','scale(1.0)'); }
	);
	
	if ((scene == 0 && index == 2)) {
		$("#jail").on("click", function() {
			
			$("#jail").attr("src", '/resources/background/ch12/제1철창(30).webp');
			$("#jail").removeClass("select");
			
			//사자 놀람
			$("#human").attr("src", '/resources/character/ch11/사자_놀람.webp');
			$("#effect").attr("src", '/resources/bgm/ch12/steel_barred_up.mp3'); effect();
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch12/steel_barred_down.mp3'); effect(); }, 1200); 
			
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자.webp');  }, 1800);
			setTimeout(function() { $("#anubis").attr("src", '/resources/background/ch12/아누비스동상(76).webp'); }, 1800); 
			setTimeout(function() { $("#dialogue_bg").fadeIn(500); $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime = 0; sound.play(); }, 4300);
			setTimeout(function() { $("#anubis").attr("src", '/resources/background/ch12/아누비스동상.png'); }, 4600); 
		});

		$("#dialogue").on("click", function() {
			sound.pause();
			$("#dialogue_bg").fadeOut(500); $("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			
			$("#jail").attr("src", '/resources/background/ch12/제1철창.png');
			$("#jail").addClass("select");
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

	w = $("#background").width() / 1980;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;

	setDialogueSize();
	setSound(0);
	setSomething();

	var item, i = 1;
	var ele = document.getElementById('interact');
	var eleCount = ele.childElementCount;
	for(i = 1; i <= eleCount; i++) {
		item = $("#interact > img:nth-child("+ i +")");
		item.width(item.prop("naturalWidth") * w);
		item.height(item.prop("naturalHeight") * w);
	}
	
	$("#ground").width($("#background").width());
	$("#river").width($("#background").width());
	$("#pillar").width($("#background").width());

}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function() {
		$('<img/>')[0].src = this;
	});
}

function interaction() { };