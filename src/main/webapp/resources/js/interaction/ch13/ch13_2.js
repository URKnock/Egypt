var w, h, x, y;
var scene, index, flag;

var Effect, fireLoop;
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
	fireLoop = document.getElementById("fireLoop");

	effect(fireLoop);
	/*종료되면 처음부터 다시 재생*/
    fireLoop.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);

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

	$("#donkey").hover(
		function() {
			$(this).css('transform', 'scale(1.05)');
			$(this).css('transform-origin', 'top center');
		},
		function() {
			$(this).css('transform', 'scale(1.0)');
		}
	);

	console.log(scene, index, flag); // 100, 200, 300

	if ((scene == 2 && index == 0)) {
		$("#devil").on("click", function() {
			$("#devil").removeClass("select"); $("#devil").removeClass("pikachu");
			
			$("#devil").attr("src", '/resources/character/ch13/장면2_악마_특수2.webp');
			$("#effect").attr("src", '/resources/bgm/ch13/devil_sword.mp3'); effect(Effect);
			setTimeout(function() { $("#devil").attr("src", '/resources/character/ch13/장면2_악마_특수1.webp'); }, 2200); 
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch13/donkey_ghostscream.mp3'); effect(Effect); }, 2200); 			

			setTimeout(function() { $("#dialogue_bg").fadeIn(500); $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime = 0; sound.play(); }, 5000);
		});
		
		$("#donkey").on("click", function() {
			$("#donkey").removeClass("select"); $("#donkey").removeClass("pikachu");
			$("#rope").removeClass("select"); $("#rope").removeClass("pikachu");
			
			$("#donkey").attr("src", '/resources/character/ch13/당나귀밧줄_특수.webp');
			$("#rope").attr("src", '/resources/character/ch13/밧줄_특수.webp');
			$("#donkey").addClass("drop"); //1.5초
			$("#effect").attr("src", '/resources/bgm/ch13/donkey_howl.wav'); effect(Effect);
			
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자_놀람.webp'); }, 200); 
			setTimeout(function() { $("#donkey").addClass("fade-out"); }, 1500); 
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch13/devil_attack.wav'); effect(Effect); }, 1500); 
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch13/donkey_howl.wav'); effect(Effect); }, 1800); 
			setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자.webp'); }, 2000);
			setTimeout(function() { $("#devil").attr("src", '/resources/character/ch13/장면2_악마_특수3.webp'); }, 3000); 
			setTimeout(function() { $("#effect").attr("src", '/resources/bgm/ch13/donkey2_DevilLaugh.mp3'); effect(Effect); }, 3000); 
			setTimeout(function() { $("#devil").attr("src", '/resources/character/ch13/장면2_악마_특수4.webp'); }, 5300); 
		});

		$("#dialogue").on("click", function() {
			sound.pause();
			$("#dialogue_bg").fadeOut(500); $("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			$("#devil").attr("src", '/resources/character/ch13/장면2_악마_기본.webp');

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
	for (i = 1; i <= eleCount; i++) {
		item = $("#interact > img:nth-child(" + i + ")");
		item.width(item.prop("naturalWidth") * w);
		item.height(item.prop("naturalHeight") * w);
	}

	$("#ground").width($("#background").width());
}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function() {
		$('<img/>')[0].src = this;
	});
}

function interaction() { };