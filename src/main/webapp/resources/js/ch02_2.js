var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function() {
	$(window).resize(function() {
		location.reload(true);
	});

	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();

	$('.chapViews').hide();

	// 런타임 동작
	$('.island-move').hover( //첫 번째 인자는 mouseover 함수, 두 번째 인자는 mouseout 함수
		function() {
			var chapName = $(this).attr("id") + 'view';
			var chapNum = Number(chapName[4]);
			var imgSrc = '/resources/object/ch02/' + chapNum + '_2.webp';

			$('#chap' + chapNum).attr('src', imgSrc);
			console.log(imgSrc);
			$('#' + chapName).show();
			$('#' + chapName).removeClass("fade-out");
			$('#' + chapName).addClass("fade-in");
		},

		function() {
			var chapName = $(this).attr("id") + 'view';
			var chapNum = Number(chapName[4]);
			var imgSrc = '/resources/object/ch02/' + chapNum + '_1.png';

			$('#chap' + chapNum).attr('src', imgSrc);
			$('#' + chapName).removeClass("fade-in");
			$('#' + chapName).addClass("fade-out");
		});

	$('.island-unlocked').click(function() { //이미 해금된 섬이라면
		var sound = new Audio("/resources/bgm/ch02/click.mp3");
		sound.play();
		var chapName = $(this).attr("id");
		var chapNum = Number(chapName[4]) + 3; //chapNum 수정해야 함 => 엔딩 파트는 섬 순서랑 챕터 번호가 일치하지 않음
		if(Number(chapName[4]) == 6) {
			chapNum = 13
		} else if(Number(chapName[4]) == 7) {
			chapNum = 11
		} else if(Number(chapName[4]) == 8) {
			chapNum = 12
		}
		setTimeout(function() { $(location).attr("href", "/load?chapter=" + chapNum); }, 700);
	});

	$('.island-locked').click(function() { //아직 해금되지 않은 섬이라면
		var chapName = $(this).attr("id");
		$('#' + chapName).removeClass("island-move"); //애니메이션 paused 상태와 island-shake가 겹치지 않도록 함
		$('#' + chapName).addClass("island-shake");
		setTimeout(function() { $('#' + chapName).addClass("island-move"); }, 500); //shake가 끝나자마자 움직이지 않으면 shake 높이가 default가 됨.
		setTimeout(function() { $('#' + chapName).removeClass("island-shake"); }, 500);
	});

	$("#menu img:nth-child(2)").on("click", function() {
		alert("현재 홈 화면에 있습니다.");
	});
	$("#menu img:nth-child(3)").on("click", function() {
		$("#setting").css("display", "flex");
	});
	$("#menu img:nth-child(4)").on("click", function() {
		$("#help").css("display", "flex");
	});
});

function init() { //화면 초기화
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 1920;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;

	setSetting();
	setSound(0);
	setHelp();
	
	$("#setting").hide();
	$("#help").hide();

	var bg1 = $("#background > img:nth-child(1)"); //섬 5번
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) - 540 * w);
	
	var bg2 = $("#background > img:nth-child(2)"); //섬 6번
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) + 100 * w);
	
	var bg3 = $("#background > img:nth-child(3)"); //섬 7번
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x - (bg1.width() / 2.0) + 510 * w);
	
	var bg4 = $("#background > img:nth-child(4)"); //섬 8번
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - (bg1.width() / 2.0) + 840 * w);

	var view1 = $("#background > img:nth-child(5)"); //배너 1번
	view1.width(view1.prop("naturalWidth") * w);
	view1.height(view1.prop("naturalHeight") * w);
	view1.css("left", x - (bg1.width() / 2.0) - 430 * w);
	view1.css("bottom", ($("#background").height() / 2.0) + 220 * w);

	var view2 = $("#background > img:nth-child(6)"); //배너 2번
	view2.width(view2.prop("naturalWidth") * w);
	view2.height(view2.prop("naturalHeight") * w);
	view2.css("left", x - (bg1.width() / 2.0) + 110 * w);
	view2.css("bottom", ($("#background").height() / 2.0) + 120 * w);

	var view3 = $("#background > img:nth-child(7)"); //배너 3번
	view3.width(view3.prop("naturalWidth") * w);
	view3.height(view3.prop("naturalHeight") * w);
	view3.css("left", x - (bg1.width() / 2.0) + 460 * w);
	view3.css("bottom", ($("#background").height() / 2.0) + 40 * w);

	var view4 = $("#background > img:nth-child(8)"); //배너 4번 
	view4.width(view4.prop("naturalWidth") * w);
	view4.height(view4.prop("naturalHeight") * w);
	view4.css("left", x - (bg1.width() / 2.0) + 820 * w);
	view4.css("bottom", ($("#background").height() / 2.0) - 70 * w);

	var arrow = $("#background > img:nth-child(9)"); //화살표
	arrow.width(arrow.prop("naturalWidth") * w);
	arrow.height(arrow.prop("naturalHeight") * w);
	arrow.css("left", 40 * w);
	arrow.css("bottom", ($("#background").height() / 2.0) - 80 * w);

	var stone1 = $("#background > img:nth-child(10)"); //돌멩이
	stone1.width(stone1.prop("naturalWidth") * w);
	stone1.height(stone1.prop("naturalHeight") * w);
	stone1.css("left", x - (bg1.width() / 2.0) + 80 * w);

	var stone2 = $("#background > img:nth-child(11)"); //돌멩이
	stone2.width(stone2.prop("naturalWidth") * w);
	stone2.height(stone2.prop("naturalHeight") * w);
	stone2.css("left", x - (bg1.width() / 2.0) + 450 * w);

	var stone3 = $("#background > img:nth-child(12)"); //돌멩이
	stone3.width(stone3.prop("naturalWidth") * w);
	stone3.height(stone3.prop("naturalHeight") * w);
	stone3.css("left", x - (bg1.width() / 2.0) + 830 * w);

	var banner = $("#background > img:nth-child(13)"); //메인 챕터
	banner.width(banner.prop("naturalWidth") * w);
	banner.height(banner.prop("naturalHeight") * w);
	banner.css("left", 50 * w);
	banner.css("bottom", $("#menu").css("bottom"));
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