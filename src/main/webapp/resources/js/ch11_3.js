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
	
	$("#devil").hover(
		function() { 
		$(this).css('transform','scale(1.1)'); 
		$(this).css('transform-origin','center left'); },
		function() { 
			$(this).css('transform','scale(1.0)'); }
	);


	$("#dialogue").hide();
	$("#blur").hide();
	
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
				$("#devil").attr("src", '/resources/character/ch11/3층_악마3.webp');
				setTimeout(function() { $("#human").attr("src", '/resources/character/ch11/사자_눈물.webp'); }, 1000);
				setTimeout(function() { $("#devil").attr("src", '/resources/character/ch11/3층_악마1.webp'); }, 2000);
				console.log("사자 눈물");
				setTimeout(function() { $("#dialogue").fadeIn(500); $("#blur").fadeIn(500); }, 2500);
				setTimeout(function() { $("#devil").attr("src", '/resources/character/ch11/3층_악마2.webp'); }, 3000);
		});
		
		$("#dialogue").on("click", function() {
				$("#human").attr("src", '/resources/character/ch11/사자.webp');
				$("#dialogue").fadeOut(500); $("#blur").fadeOut(500);
				$("#devil").attr("src", '/resources/character/ch11/3층_악마1.webp');
			});
	}	
});

function init() { //화면 초기화
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 1920;
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
	
	var bg1 = $("#background > img:nth-child(1)"); //화살표
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) - 1050*w);
	bg1.css("bottom", ($("#background").height() / 2.0) - 100*w);
	
	var bg2 = $("#background > img:nth-child(2)"); //땅바닥
	bg2.width(bg2.prop("naturalWidth") * w); 
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("bottom", 1 * w);
	
	var bg3 = $("#background > img:nth-child(3)"); //악마 
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x - (bg1.width() / 2.0) - 220*w);
	bg3.css("bottom", 1 * w);
	
	var bg4 = $("#background > img:nth-child(4)"); //사자
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - (bg1.width() / 2.0) - 750 * w);
	bg4.css("bottom", $("#ground").height());
	
	
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