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

$(document).ready(function() {

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

	$("#dialogue_bg").hide();
	$("#dialogue").hide();
	$("#blur").hide();

	console.log(scene, index, flag); // 010, 020, 100
	
	if ((scene == 0 && index == 1)) {
		$("#pot_whole").on("click", function() {
			$("#pot_whole").hide();
			$("#pot").show(); $("#pot_keeper").show(); $("#spirit_pot").show();
			$("#pot").addClass("fade-out"); 
			
			var d = new Date();    
	        imgSrc = $("#spirit_pot").attr('src')+'?'+d.getTime(); //랜덤 값 부착(캐싱 방지)
	        $("#spirit_pot").attr('src', imgSrc); //이미지 소스 교체
	        $("#spirit_pot").css('display', 'block');
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch12/man_scream.mp3'); effect(Effect); }, 400); 
			$("#human").attr("src", '/resources/character/ch11/사자_놀람.webp');
			
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자.webp');  }, 1800);
			setTimeout(function() { $("#pot").removeClass("fade-out"); $("#pot").addClass("fade-in");  }, 1800);
			setTimeout(function() { $("#dialogue_bg").fadeIn(500); $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime = 0; sound.play(); }, 2400);
		});

		$("#dialogue").on("click", function() {
			sound.pause();
			$("#dialogue_bg").fadeOut(500); $("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			
			$("#pot_whole").show();
			$("#pot").hide(); $("#pot_keeper").hide(); $("#spirit_pot").hide();
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
	
	$("#pot").hide(); $("#pot_keeper").hide(); $("#spirit_pot").hide();
}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function() {
		$('<img/>')[0].src = this;
	});
}

function interaction() { };