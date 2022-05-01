var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	o_select = "0"; //?
	w = $("#background").width() / 2650 / 0.87; //배경 규격 계산
	h = $("#background").height($("#background").prop("naturalHeight") * w);
	$(window).resize(function() { //정보창?
		location.reload(true);
	});
	
	//전달받는 flag값들 얻어오기 ==> 이거 있나요? 
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	
	$('.chapViews').hide();
});

function init() { //화면 초기화
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 2650 / 0.87;
	x = $("#background").width() / 2.0;
		
	//var sw = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	//sw = sw - $("#choice").width();
	//if (sw < 0) sw = 0;
	//$("#scene").width(sw);
	//$("#choice > img").height( $("#dialogue > img").height() );
	
	//resize("#human"); //#human: 사자의 몸통
	//center("#human");
	
	//var b = $("#dialogue").height() + 10*w; //대화창
	
	var bg1 = $("#background > img:nth-child(1)"); //돌멩이
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) - 125*w);
	bg1.css("bottom", $("#background").height() / 2.0 - 75*w);
	
	var bg2 = $("#background > img:nth-child(2)"); //섬 1번
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - (bg1.width() / 2.0) - 550*w);
	//bg2.css("bottom", $("#dialogue").height() + 300*w);
	
	var bg3 = $("#background > img:nth-child(3)"); //섬 2번
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x - (bg1.width() / 2.0) - 100*w);
	//bg3.css("bottom", $("#dialogue").height());
	
	var bg4 = $("#background > img:nth-child(4)"); //섬 3번
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - (bg1.width() / 2.0) + 350*w);
	//bg4.css("bottom", $("#dialogue").height());
	
	var bg5 = $("#background > img:nth-child(5)"); //섬 4번
	bg5.width(bg5.prop("naturalWidth") * w);
	bg5.height(bg5.prop("naturalHeight") * w);
	bg5.css("left", x + 450*w);
	//bg5.css("bottom", $("#dialogue").height() + 160*w);
	
	var view1 = $("#background > img:nth-child(6)"); //배너 1번
	view1.width(view1.prop("naturalWidth") * w);
	view1.height(view1.prop("naturalHeight") * w);
	view1.css("left", x - (bg1.width() / 2.0) - 550*w);
	view1.css("bottom", $("#dialogue").height() + 150*w);
	
	var view2 = $("#background > img:nth-child(7)"); //배너 2번
	view2.width(view2.prop("naturalWidth") * w);
	view2.height(view2.prop("naturalHeight") * w);
	view2.css("left", x - (bg1.width() / 2.0) - 100*w);
	view2.css("bottom", $("#dialogue").height() + 160*w);
	
	var view3 = $("#background > img:nth-child(8)"); //배너 3번
	view3.width(view3.prop("naturalWidth") * w);
	view3.height(view3.prop("naturalHeight") * w);
	view3.css("left", x - (bg1.width() / 2.0) + 350*w);
	view3.css("bottom", $("#dialogue").height() + 150*w);
	
	var view4 = $("#background > img:nth-child(9)"); //배너 4번
	view4.width(view4.prop("naturalWidth") * w);
	view4.height(view4.prop("naturalHeight") * w);
	view4.css("left", x + 450*w);
	view4.css("bottom", $("#dialogue").height() + 160*w);
	
	var arrow = $("#background > img:nth-child(10)"); //화살표
	arrow.width(arrow.prop("naturalWidth") * w);
	arrow.height(arrow.prop("naturalHeight") * w);
	arrow.css("left", x + 1080*w);
	arrow.css("bottom", $("#background").height() / 2.0);
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