var w, h, x, y;
var scene, index, flag;

$(document).ready(function(){
	//런타임 실행
});

function imageReload() { //화면 재구성
	console.log("image Reloading");
	$("#heart").addClass('fade-in');	
	$("#newScale").addClass('fade-in');	
	$("#newBg").addClass('fade-in');	
	$("#pillar").addClass('fade-in');	
	
	//var i = 0;
	//$("#background > img:nth-child(" + i +")").addClass('fade-in');
	
	if(nextChapter == "chapter12") {
		//$("#ink").css("src",  "<c:url value='/resources/background/ch10/10_10_2.png'/>"); ==> ?
		$("#blueInk").addClass('flow');
		console.log("color changed");
	}
	else if(nextChapter != "null") // == "chapter11"
	{ $("#redInk").addClass('flow'); }
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