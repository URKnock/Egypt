var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	w = $("#background").width() / 2650 / 0.87; //배경 규격 계산
	h = $("#background").height($("#background").prop("naturalHeight") * w);
	$(window).resize(function() {
		location.reload(true);
	});
	
	//전달받는 flag값들 얻어오기
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();

	$("#dialogue").hide();
	$("#blur").hide();
	
	//scene 제어 
 	if((scene == 1 && index == 0)) {
		console.log(scene, index);
	
		$("#ammut").on("click", function() {
			$("#ammut").attr("src", '/resources/character/ch11/1층_암무트3.webp');
			setTimeout(function() { $("#ammut").attr("src", '/resources/character/ch11/1층_암무트1.webp'); }, 2000);
			setTimeout(function() { $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); }, 2500);
			setTimeout(function() { $("#ammut").attr("src", '/resources/character/ch11/1층_암무트2.webp'); }, 2550);
		});
		
		$("#dialogue").on("click", function() {
			$("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
			$("#ammut").attr("src", '/resources/character/ch11/1층_암무트1.webp');
			//setTimeout($('form').submit(), 2500); //문제1: 1번 페이지에서 읽지 않으면 다음으로 전송 안 됨
		});
		
		//$("#arrow").on("click", function() {
			//어떻게든 1번 페이지에서 대화창을 안 누르고 화살표를 눌렀을 때도 submit 되게 만들어야 함
			//==> session이 사라지지 않게 해야 함
		//});
 	} 
});

function init() { //화면 초기화
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 2650 / 0.87;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;
		
	var sw = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	sw = sw - $("#choice").width();
	if (sw < 0) sw = 0;
	$("#scene").width(sw);
	$("#choice > img").height( $("#dialogue > img").height() );

	// 블러
	$("#blur").height( $("#dialogue").height() );
	$("#blur").css("left", "0");
	$("#blur").css("bottom", "0");
	
	resize("#human");
	center("#human");
	
	var b = 300*h;
	
	var bg1 = $("#background > img:nth-child(1)"); //원숭이 탕
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) + 70*w);
	bg1.css("bottom", 0 + 180*w); //dialog와 떨어진 정도가 아니라 바닥이랑 떨어진 정도로 바꿔야 할 것 같음
	
	var bg2 = $("#background > img:nth-child(2)"); //바닥 마젠타색 불꽃
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) + 120*w);
	bg2.css("bottom", 0); //대화창에 가려져야 함
	
	var bg3 = $("#background > img:nth-child(3)"); //화살표
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x - (bg1.width() / 2.0) + 1550*w);
	bg3.css("bottom", $("#hellFire").height() + 200*w);
  
	var bg4 = $("#background > img:nth-child(4)"); //땅바닥
	bg4.width($("#background").width()); //계산 X, 배경에 배율이 맞춰야 함
	bg4.height(bg4.prop("naturalHeight") * w);
	//bg4.css("left", x);
	bg4.css("bottom", 0); //대화창에 가려져야 함

	var bg5 = $("#background > img:nth-child(5)"); //암무트
	bg5.width(bg5.prop("naturalWidth") * w);
	bg5.height(bg5.prop("naturalHeight") * w);
	bg5.css("left", x - (bg1.width() / 2.0) + 1200*w);
	bg5.css("bottom", $("#ground").height());
	
	var bg6 = $("#background > img:nth-child(6)"); //사자
	bg6.width(bg6.prop("naturalWidth") * w);
	bg6.height(bg6.prop("naturalHeight") * w);
	bg6.css("left", x - (bg1.width() / 2.0) - 300*w);
	bg6.css("bottom", $("#ground").height());
}

/*
function object(select, index, arrIndex) { //정보창을 보여주고 셀렉트 클래스를 제거한다.
	show_info(index);
	if(arguments.length == 3) {
		o_select = select;
		o_index = arrIndex;
		if(clicked.indexOf(arrIndex) != -1) {
			clicked.splice(clicked.indexOf(arrIndex), 1);
			$(select).removeClass("select");
		}
	} else {
		o_select = "0";
		$(select).removeClass("select");
	}
}*/

/*
function objectSubmit(select) {
 	$(select).removeClass("select"); //노란색 shadow 제거(select class 제거)
	$("form").submit(); //폼을 통해 지금까지의 경과 전송
}*/

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