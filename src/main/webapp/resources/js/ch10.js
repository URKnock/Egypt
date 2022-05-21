var w, h, x, y;
var scene, index, flag;

var Effect;
var Effect_status = false;

function effect() {
   if(Effect_status) {
      Effect.pause();
      Effect.currentTime = 0;
   } else { Effect_status = true; }
   Effect.play();
}

$(document).ready(function(){
   Effect = document.getElementById("effect");
});

function dragDone() { //모든 대화를 마치고 심장까지 먹힌 후에 실행되는 스크립트 
	$("#effect").attr("src", '/resources/bgm/ch10/ammut1.mp3'); effect();
	$("#ammut").attr("src", '/resources/character/ch10/암무트덥썩.webp');
	setTimeout(function() {
		$("#effect").attr("src", '/resources/bgm/ch10/eat.mp3'); effect();
		$("#ammut").attr("src", '/resources/character/ch10/암무트냠냠.webp'); 
	}, 2500);
	setTimeout(function() { 
		$("#effect").attr("src", '/resources/bgm/ch10/Disappear.mp3'); effect();
		$("#human").attr("src", '/resources/character/ch10/사자날라감.webp'); 
	}, 3000);
	setTimeout(function() { $("#loading").addClass('fade-in'); $("#loading").show(); }, 5500);
	setTimeout(function() {
		if (nextChapter != "null") {
			location.href = '/' + nextChapter;
			//var link = '/' + nextChapter;
		}
	}, 6500);
}

function imageReload() { //화면 재구성
	$("#oldScale").addClass('fade-out');
	$("#newScale").addClass('fade-in');
	$("#newBg").addClass('fade-in');
	$("#pillar").addClass('fade-in');
	
	$("#human").attr("src", '/resources/character/ch10/사자벌벌.webp');
	$("#thoth").attr("src", '/resources/character/ch10/토트손내림.webp');
	setTimeout(function() { 
		$("#thoth").attr("src", '/resources/character/ch10/토트손내림기본.webp'); 
	}, 2500);

	if (nextChapter == "chapter12") {
		$("#ink").attr("src", '/resources/background/ch10/10_10_2.png');
		$("#ink").addClass('flow');
	}
	else if (nextChapter == "chapter11") { $("#ink").addClass('flow'); }
}

function soundReload() { //소리 재설정
	var currentBgm = document.getElementById("bgm") // Audio 객체 취득

	$("#bgm").attr("src", '/resources/bgm/10_ammut.mp3'); currentBgm.play();
	$("#effect").attr("src", '/resources/bgm/ch10/despair.mp3'); effect();
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