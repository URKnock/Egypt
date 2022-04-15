var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function() {

	w = $("#background").width() / 2650 / 0.87; //배경 규격 계산
	h = $("#background").height($("#background").prop("naturalHeight") * w);
	$(window).resize(function() { //정보창?
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
	
	if ((scene == 2 && index == 0)) { //문제2: 이 페이지에서 scene 번호가 null임 (못 읽어옴) ==> session이 날라감
		console.log(scene, index);
		
		$("#devil").on("click", function() {
			$("#dialogue").fadeIn(500);
			$("#devil").attr("src", '/resources/Character/ch11/2층_악마2.webp');
		});
		
		$("#dialogue").on("click", function() {
			$("#dialogue").fadeOut(500);
			$("#pot_dead").attr("src", '/resources/object/ch11/2층_항아리사자2.webp');
			setTimeout(function() { $("#devil").attr("src", '/resources/Character/ch11/2층_악마3.webp'); }, 2000);
			setTimeout(function() { $("#devil").attr("src", '/resources/Character/ch11/2층_악마1.webp'); }, 3000);
			setTimeout(function() { $("#pot_dead").attr("src", '/resources/object/ch11/2층_항아리사자1.webp'); }, 4000);
			//setTimeout($('form').submit(), 4500); //null이라서 전송 불가. 
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
	$("#choice > img").height($("#dialogue > img").height());

	//resize("#human"); //#human: 사자의 몸통
	//center("#human");

	var b = $("#dialogue").height() + 10 * w; //대화창

	var bg1 = $("#background > img:nth-child(1)"); //2층 단상
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) + 700 * w);
	bg1.css("bottom", 160 * w);

	var bg2 = $("#background > img:nth-child(2)"); //2층 땅불1
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) - 250 * w);
	bg2.css("bottom", 0);

	var bg3 = $("#background > img:nth-child(3)"); //2층 땅불2
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x - (bg1.width() / 2.0) - 250 * w);
	bg3.css("bottom", 0);

	var bg4 = $("#background > img:nth-child(4)"); //화살표
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - (bg1.width() / 2.0) + 1200 * w);
	bg4.css("bottom", $("#hellFireFront").height() + 250 * w);

	var bg5 = $("#background > img:nth-child(5)"); //땅바닥
	bg5.width($("#background").width()); //계산 X, 배경에 배율이 맞춰야 함
	bg5.height(bg5.prop("naturalHeight") * w);
	//bg5.css("left", x);
	bg5.css("bottom", 0);

	var bg6 = $("#background > img:nth-child(6)"); //2층 항아리 안
	bg6.width(bg6.prop("naturalWidth") * w);
	bg6.height(bg6.prop("naturalHeight") * w);
	bg6.css("left", x - (bg1.width() / 2.0) - 70 * w);
	bg6.css("bottom", $("#hellFireFront").height() - 150*w);

	var bg7 = $("#background > img:nth-child(7)"); //2층 항아리 탕
	bg7.width(bg7.prop("naturalWidth") * w);
	bg7.height(bg7.prop("naturalHeight") * w);
	bg7.css("left", x - (bg1.width() / 2.0) - 80 * w);
	bg7.css("bottom", $("#hellFireFront").height() - 135*w);

	var bg8 = $("#background > img:nth-child(8)"); //2층 항아리 밖
	bg8.width(bg8.prop("naturalWidth") * w);
	bg8.height(bg8.prop("naturalHeight") * w);
	bg8.css("left", bg6.css("left")); //bg6의 css 값을 읽어와서 그대로 넣기
	bg8.css("bottom", bg6.css("bottom"));

	var bg9 = $("#background > img:nth-child(9)"); //악마 
	bg9.width(bg9.prop("naturalWidth") * w);
	bg9.height(bg9.prop("naturalHeight") * w);
	bg9.css("left", x - (bg1.width() / 2.0) + 400 * w);
	bg9.css("bottom", $("#platform").height() + 155*w);

	var bg10 = $("#background > img:nth-child(10)"); //반대 화살표
	bg10.width(bg10.prop("naturalWidth") * w);
	bg10.height(bg10.prop("naturalHeight") * w);
	bg10.css("left", x - (bg1.width() / 2.0) - 950 * w);
	bg10.css("bottom", $("#hellFireFront").height() + 250 * w);

	var bg11 = $("#background > img:nth-child(11)"); //2층 항아리 탕 안 사자
	bg11.width(bg11.prop("naturalWidth") * w);
	bg11.height(bg11.prop("naturalHeight") * w);
	bg11.css("left", x - (bg1.width() / 2.0) + 160 * w);
	bg11.css("bottom", $("#hellFireFront").height() - 125*w);
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