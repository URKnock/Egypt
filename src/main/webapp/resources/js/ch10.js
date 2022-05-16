var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	$(window).resize(function() {
		location.reload(true);
	});
	
	//전달받는 flag값들 얻어오기
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	
	var sound = new Audio("/resources/bgm/ch10/10_"+ scene +"_" + index + "_" + flag + ".mp3");
	
	$("#dialogue").hide();
	$("#blur").hide();
	
	//scene 제어 
 	if((scene == 1 && index == 0)) {
		console.log(scene, index);
	
		/*
		$("#ammut").on("click", function() {
			$("#ammut").attr("src", '/resources/character/ch11/1층_암무트3.webp');
			setTimeout(function() { $("#ammut").attr("src", '/resources/character/ch11/1층_암무트1.webp'); }, 2000);
			setTimeout(function() { $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); sound.currentTime=0; sound.play();}, 2500);
			setTimeout(function() { $("#ammut").attr("src", '/resources/character/ch11/1층_암무트2.webp'); }, 2550);
		});
		
		$("#dialogue").on("click", function() {
			sound.pause();
			$("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			$("#ammut").attr("src", '/resources/character/ch11/1층_암무트1.webp');
			//setTimeout($('form').submit(), 2500); //문제1: 1번 페이지에서 읽지 않으면 다음으로 전송 안 됨
		});*/
 	} 
});

function init() { //화면 초기화
	scene = $("input[name='scene']").val();
	setDialogueSize();
	setSound();

	w = $("#background").width() / 1980;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;
		
	var sw = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	sw = sw - $("#choice").width();
	if (sw < 0) sw = 0;
	$("#scene").width(sw);
	$("#choice > img").height( $("#dialogue > img").height() );
	
	resize("#human");
	center("#human");
	
	var b = 300*h;
	
	$("#pillar").hide();
	$("#ink").hide();
	
	var ground = $("#background > img:nth-child(1)"); //바닥
	ground.width($("#background").width());
	ground.height(ground.prop("naturalHeight") * w);
	ground.css("bottom", 0); 
	
	var human = $("#background > img:nth-child(2)"); //사자
	human.width(human.prop("naturalWidth") * w);
	human.height(human.prop("naturalHeight") * w);
	human.css("left", x - (ground.width() / 2.0) + 220*w);
	human.css("bottom", $("#ground").height()); //대화창에 가려져야 함
	
	var anubis = $("#background > img:nth-child(3)"); //아누비스
	anubis.width(anubis.prop("naturalWidth") * w);
	anubis.height(anubis.prop("naturalHeight") * w);
	anubis.css("left", x - 100 * w);
	anubis.css("bottom", $("#ground").height());
  
	var ammut = $("#background > img:nth-child(4)"); //암무트
	ammut.width(ammut.prop("naturalWidth") * w); 
	ammut.height(ammut.prop("naturalHeight") * w);
	ammut.css("left", x - (ground.width() / 2.0) + 1380*w);
	ammut.css("bottom", $("#ground").height()); //대화창에 가려져야 함

	var thoth = $("#background > img:nth-child(5)"); //토트 
	thoth.width(thoth.prop("naturalWidth") * w);
	thoth.height(thoth.prop("naturalHeight") * w);
	thoth.css("left", x - (ground.width() / 2.0) + 1700*w);
	thoth.css("bottom", $("#ground").height());
	
	var scale = $("#background > img:nth-child(6)"); //저울
	scale.width(scale.prop("naturalWidth") * w);
	scale.height(scale.prop("naturalHeight") * w);
	scale.css("left", x - 320 * w);
	scale.css("bottom", $("#ground").height());
	
	var heart = $("#background > img:nth-child(7)"); //심장
	heart.width(heart.prop("naturalWidth") * w);
	heart.height(heart.prop("naturalHeight") * w);
	heart.css("left", x - (ground.width() / 2.0) + 275*w);
	heart.css("bottom", $("#human").height() + 100 * w);
	
	var pillar = $("#background > img:nth-child(8)"); //기둥
	pillar.width(pillar.prop("naturalWidth") * w);
	pillar.height(pillar.prop("naturalHeight") * w);
	pillar.css("left", x - (ground.width() / 2.0) - 200*w);
	pillar.css("bottom", $("#ground").height());
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