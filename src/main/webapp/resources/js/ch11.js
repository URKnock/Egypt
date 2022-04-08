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
	//scene 제어 
 	if((scene == 1 && index == 0)) {
		console.log(scene, index);
	
		$("#ammut").on("click", function() {
			$("#dialogue").fadeIn(500);
			$("#ammut").attr("src", '/resources/Character/ch11/1층_암무트2.webp');
		});
		
		$("#dialogue").on("click", function() {
			$("#dialogue").fadeOut(500);
			$("#ammut").attr("src", '/resources/Character/ch11/1층_암무트3.webp');
			setTimeout(function() { $("#ammut").attr("src", '/resources/Character/ch11/1층_암무트1.webp'); }, 2000);
			setTimeout("$('form').submit()", 2500); //문제1: 1번 페이지에서 안 눌렀으면 다음으로 전송 안 됨
		});
		
		$("#arrow").on("click", function() {
			//어떻게든 1번 페이지에서 대화창을 안 누르고 화살표를 눌렀을 때도 submit 되게 만들어야 함
			//console.log("submit()");
			//$("form").submit(); 
			//$("#dialogue").hide();
		});
 	} 

	/*
	switch(scene) {
		case '1':
			if(index != 0) {
				$("#dialogue").on("click", function() {
					$("form").submit();
				});
			}
			break;
		case '3':
		case '4':
			clicked = [];
			break;
		default:
			$("#dialogue").on("click", function() {
				$("form").submit();
			});	
			break;
	}*/
});

function init() { //화면 초기화
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 2650 / 0.87;
	x = $("#background").width() / 2.0;
		
	var sw = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	sw = sw - $("#choice").width();
	if (sw < 0) sw = 0;
	$("#scene").width(sw);
	$("#choice > img").height( $("#dialogue > img").height() );
	
	//resize("#human"); //#human: 사자의 몸통
	//center("#human");
	
	var b = $("#dialogue").height() + 10*w; //대화창
	
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
	bg3.css("bottom", $("#hellFire").height() + 300*w);
	
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