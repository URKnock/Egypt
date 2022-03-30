var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	o_select = "0"; //클릭한 오브젝트를 담는 변수
	w = $("#background").width() / 2650 / 0.87; //배경 규격 계산
	h = $("#background").height($("#background").prop("naturalHeight") * w);
	$(window).resize(function() { //정보창?
		location.reload(true);
	});
	
	$("#devil").on("click", function() {
			//object("#devil", 1, 5); // ==> 테스트 단계에서는 작동 안 하고 있음
			var path = '/resources/Character/ch11/3층_악마3.webp';
			//console.log(o_select);
			$("#devil").attr("src", path);
			setTimeout(function() { $("#devil").attr("src", '/resources/Character/ch11/3층_악마1.webp'); }, 2000);
	});
	
	$(".close").on("click", function() { //정보창의 닫기 버튼
		hide_info();
		if(clicked.length == 0) {
			$("form").submit();
		}
		if(o_select != "0") {
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
 	if((scene == 1 && index == 0)) {
		$("#background > img:nth-child(1)").addClass("select"); //원숭이
 		$("#background > img:nth-child(1)").addClass("pikachu"); //원숭이

		//정보창을 띄우는 'object' 함수
		$("#background > img:nth-child(1)").on("click", function() { 
			object("#background > img:nth-child(1)", 1, 5); //(index, arrIndex) ==> (정보창 번호, clicked 참조용 첨자)
		});
 	} else if(scene == 7 && index == 1) { //?
 		$("input[name='index']").val(0);
 	}
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
	bg1.css("bottom", $("#dialogue").height() + 350*w);
	
	var bg2 = $("#background > img:nth-child(2)"); //악마 
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) - 220*w);
	bg2.css("bottom", $("#dialogue").height() - 125*w);
}

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