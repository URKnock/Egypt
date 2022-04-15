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
	if ((scene == 1 && index == 0)) {
		$('form').submit()
	}
	
	if ((scene == 2 && index == 0)) { 
		$('form').submit() //하드코딩...(수정 예정)
	}
	
	if ((scene == 3 && index == 0)) {
		console.log(scene, index);
		
		$("#devil").on("click", function() {
				$("#dialogue").fadeIn(500);
				$("#devil").attr("src", '/resources/Character/ch11/3층_악마2.webp');
		});
		
		$("#dialogue").on("click", function() {
				$("#dialogue").fadeOut(500);
				$("#devil").attr("src", '/resources/Character/ch11/3층_악마3.webp');
				setTimeout(function() { $("#devil").attr("src", '/resources/Character/ch11/3층_악마1.webp'); }, 2000);
			});
	}	
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
	
	var bg1 = $("#background > img:nth-child(1)"); //화살표
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) - 920*w);
	bg1.css("bottom", ($("#background").height() / 2.0) - 50*w);
	
	var bg2 = $("#background > img:nth-child(2)"); //악마 
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) - 220*w);
	bg2.css("bottom", ($("#arrow").height() / 4.0) - 130*w);
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