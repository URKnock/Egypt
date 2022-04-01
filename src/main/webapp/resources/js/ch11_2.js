var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function() {
	o_select = "0"; //클릭한 오브젝트를 담는 변수
	w = $("#background").width() / 2650 / 0.87; //배경 규격 계산
	h = $("#background").height($("#background").prop("naturalHeight") * w);
	$(window).resize(function() { //정보창?
		location.reload(true);
	});

	$("#devil").on("click", function() {
		//object("#devil", 1, 5); // ==> 테스트 단계에서는 작동 안 하고 있음
		//var path = '/resources/Character/ch11/2층_악마3.webp';
		//console.log(o_select);
		$("#pot_dead").attr("src", '/resources/object/ch11/2층_항아리사자2.webp');
		setTimeout(function() { $("#devil").attr("src", '/resources/Character/ch11/2층_악마3.webp'); }, 2000);
		setTimeout(function() { $("#devil").attr("src", '/resources/Character/ch11/2층_악마1.webp'); }, 3000);
		setTimeout(function() { $("#pot_dead").attr("src", '/resources/object/ch11/2층_항아리사자1.webp'); }, 4000);
	});

	$(".close").on("click", function() { //정보창의 닫기 버튼
		hide_info();
		if (clicked.length == 0) {
			$("form").submit();
		}
		if (o_select != "0") {
			//var path = "/resources/background/ch03/" + o_index + ".webp";
			//$(o_select).on("load", function() { canopic_one(); });
			//$(o_select).attr("src", path);
		}
	});
	//전달받는 flag값들 얻어오기
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();

	//scene 제어 
	if ((scene == 1 && index == 0)) {
		$("#background > img:nth-child(1)").addClass("select"); //원숭이
		$("#background > img:nth-child(1)").addClass("pikachu"); //원숭이

		//정보창을 띄우는 'object' 함수
		$("#background > img:nth-child(1)").on("click", function() {
			object("#background > img:nth-child(1)", 1, 5); //(index, arrIndex) ==> (정보창 번호, clicked 참조용 첨자)
		});
	} else if (scene == 7 && index == 1) { //?
		$("input[name='index']").val(0);
	}
	switch (scene) {
		case '1':
			if (index != 0) {
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
	bg1.css("left", x - (bg1.width() / 2.0) + 800 * w);
	bg1.css("bottom", $("#dialogue").height() + 160 * w);

	var bg2 = $("#background > img:nth-child(2)"); //2층 땅불1
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) - 250 * w);
	bg2.css("bottom", $("#dialogue").height() - 30 * w);

	var bg3 = $("#background > img:nth-child(3)"); //2층 땅불2
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x - (bg1.width() / 2.0) - 250 * w);
	bg3.css("bottom", $("#dialogue").height() - 15 * w);

	var bg4 = $("#background > img:nth-child(4)"); //화살표
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - (bg1.width() / 2.0) + 1200 * w);
	bg4.css("bottom", $("#dialogue").height() + 350 * w);

	var bg5 = $("#background > img:nth-child(5)"); //땅바닥
	bg5.width($("#background").width()); //계산 X, 배경에 배율이 맞춰야 함
	bg5.height(bg5.prop("naturalHeight") * w);
	//bg5.css("left", x);
	bg5.css("bottom", $("#dialogue").height()); //대화창에 가려져야 함

	var bg6 = $("#background > img:nth-child(6)"); //2층 항아리 안
	bg6.width(bg6.prop("naturalWidth") * w);
	bg6.height(bg6.prop("naturalHeight") * w);
	bg6.css("left", x - (bg1.width() / 2.0) - 120 * w);
	bg6.css("bottom", $("#dialogue").height() + 100 * w);

	var bg7 = $("#background > img:nth-child(7)"); //2층 항아리 탕
	bg7.width(bg7.prop("naturalWidth") * w);
	bg7.height(bg7.prop("naturalHeight") * w);
	bg7.css("left", x - (bg1.width() / 2.0) - 130 * w);
	bg7.css("bottom", $("#dialogue").height() + 115 * w);

	var bg8 = $("#background > img:nth-child(8)"); //2층 항아리 밖
	bg8.width(bg8.prop("naturalWidth") * w);
	bg8.height(bg8.prop("naturalHeight") * w);
	bg8.css("left", bg6.css("left")); //bg6의 css 값을 읽어와서 그대로 넣기
	bg8.css("bottom", bg6.css("bottom"));

	var bg9 = $("#background > img:nth-child(9)"); //악마 
	bg9.width(bg9.prop("naturalWidth") * w);
	bg9.height(bg9.prop("naturalHeight") * w);
	bg9.css("left", x - (bg1.width() / 2.0) + 500 * w);
	bg9.css("bottom", $("#dialogue").height() + 240 * w);

	var bg10 = $("#background > img:nth-child(10)"); //반대 화살표
	bg10.width(bg10.prop("naturalWidth") * w);
	bg10.height(bg10.prop("naturalHeight") * w);
	bg10.css("left", x - (bg1.width() / 2.0) - 950 * w);
	bg10.css("bottom", $("#dialogue").height() + 350 * w);

	var bg11 = $("#background > img:nth-child(11)"); //2층 항아리 탕 안 사자
	bg11.width(bg11.prop("naturalWidth") * w);
	bg11.height(bg11.prop("naturalHeight") * w);
	bg11.css("left", x - (bg1.width() / 2.0) + 105 * w);
	bg11.css("bottom", $("#dialogue").height() + 135 * w);
}

function object(select, index, arrIndex) { //정보창을 보여주고 셀렉트 클래스를 제거한다.
	show_info(index);
	if (arguments.length == 3) {
		o_select = select;
		o_index = arrIndex;
		if (clicked.indexOf(arrIndex) != -1) {
			clicked.splice(clicked.indexOf(arrIndex), 1);
			$(select).removeClass("select");
		}
	} else {
		o_select = "0";
		$(select).removeClass("select");
	}
}

function objectSubmit(select) {
	$(select).removeClass("select"); //노란색 shadow 제거(select class 제거)
	$("form").submit(); //폼을 통해 지금까지의 경과 전송
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