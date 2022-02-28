function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}
$(function() {
	$('#kettle').hide();
	$('#dragLine').hide();
	$('#dragSpot').hide();

	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100;

	$('#human').on("load", function() {
		var arr = ["#human", "#dirt_head", "#dirt_body", "#dirt_bottom", "#dirt_leg"]
		arr.forEach (function (item, idx) {
			resize(item);
			centerX(item);
			$(item).css("bottom", $("#dialogue").height() + 90*w);
		});
		resize("#bed");
		centerX("#bed");
		$("#bed").css("bottom", 0);
		$("#dirty").children().fadeIn(100);
	});
	$("#dirty").children().fadeOut(100);
	
	preload([
	    $('#scroll').attr("src"),
	    $('#stick1').attr("src"),
	    $('#stick2').attr("src"),
	    $('#kettleToClick').attr("src"),
	    $('#linen').attr("src"),
	    $('#servant').attr("src")
	]);
	
	resizeWithDiv('#scroll', 1.333);
	$('#scroll').css("top", 100);
	$('#scroll').css("left", x - $('#scroll').width() / 2);
	
	var scrollY = 100 + ($('#scroll').height() / 2);
	var stick = $('#stick1');
	resizeWithDiv('#stick1', 1.333);
	stick.css("top", scrollY - (stick.height() / 2));
	stick.css("left", x - stick.width());
		
	stick = $('#stick2');
	resizeWithDiv('#stick2', 1.333);
	stick.css("top", scrollY - (stick.height() / 2));
	stick.css("left", x);
	
	var sLeft;
	resize('#kettleToClick');
	$('#kettleToClick').css("top", scrollY - ($('#kettleToClick').height() / 2));
	$('#kettleToClick').css("left", x - 100 - ($('#kettleToClick').width() / 2));
	$('#kettleToClick').on("click", function() {
		sLeft = sLeft - $('#scroll').width();
		var dLeft = sLeft + $('#dragLine').width();
		$('#kettleToClick').removeClass("select");
		$('#kettleToClick').hide();
		$('#kettle').css("left", sLeft);
		$('#dragLine').css("left", sLeft);
		$('#dragSpot').css("top", 300);
		$('#dragSpot').css("left", dLeft);
		$('#kettle').show();
		$('#dragLine').show();
		$('#dragSpot').show();
	});
	
	resize('#linen');
	$('#linen').css("top", scrollY - ($('#linen').height() / 2));
	$('#linen').css("left", x + 100 - ($('#linen').width() / 2));
	
	resize('#servant');
	$('#servant').css("bottom", $("#dialogue").height());
	$('#servant').css("left", 0);
	$('#servant').addClass("select");
	$('#servant').on("click", function() {
		$('#servant').on("load", function() {
			$('#scroll').fadeIn(3000);
			$('#stick1').fadeIn(100);
			$('#stick2').fadeIn(100);
			sLeft = $('#scroll').offset().left - (stick.width() / 2);
			$('#stick1').animate({
				left: sLeft
			}, 1000);
			sLeft = sLeft + $('#scroll').width();
			$('#stick2').animate({
				left: sLeft
			}, 1000, function(){
				$('#linen').fadeIn("slow");
				$('#kettleToClick').fadeIn("slow", function() {
					$('#kettleToClick').addClass("select");
				});
				$('#background').children().hide();
				$('#servant').hide();
				$('#human').attr("src", "/resources/object/ch03/3_2_2.png");
			});
		});
		$('#servant').attr("src", "/resources/character/ch03/3_9.png");
		$('#servant').removeClass("select");
	});
});

function resizeWithDiv(element, div) {
	var e = $(element);
	e.width(e.prop("naturalWidth") / div);
	e.height(e.prop("naturalHeight") / div);
}

function resizeCenter(element) {
	resize(element);
	center(element);
}

function rescale(element, div) {
	var e = $(element);
	resizeWithDiv(e);
	e.width(e.width() / div);
	e.height(e.height() / div);
}

let currentDroppable = null;
let cleanCount = 0;

kettle.onmousedown = function(event) {
	let shiftX = event.clientX - kettle.getBoundingClientRect().left; //가로로만 움직임
	//let shiftY = event.clientY - kettle.getBoundingClientRect().top; 

	// (1) absolute 속성과 zIndex 프로퍼티를 수정해 클릭한 대상이 제일 위에서 움직이기 위한 준비를 합니다.
	kettle.style.position = 'absolute';
	kettle.style.zIndex = 1000;

	// 현재 위치한 부모에서 body로 직접 이동하여
	// body를 기준으로 위치를 지정합니다.
	document.body.append(kettle);
	moveAt(event.pageX);

	// 초기 이동을 고려한 좌표 (pageX, pageY)에서
	// 대상을 이동합니다.
	function moveAt(pageX) {
		kettle.style.left = pageX - shiftX + 'px';
		//kettle.style.top = pageY - shiftY + 'px';
	}

	function onMouseMove(event) {
		moveAt(event.pageX); //마우스 포인터 아래로 사물을 이동시킵니다.

		kettle.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX,
				event.clientY); //elemBelow는 드롭 할 수 있는 객체의 아래 요소입니다.
		kettle.hidden = false;

		// 마우스 이벤트는 윈도우 밖으로 트리거 될 수 없습니다.(클릭한 객체를 윈도우 밖으로 드래그 했을 때)
		// 따라서 clientX∙clientY가 화면 밖에 있으면, elementFromPoint는 null을 반환합니다.
		if (!elemBelow)
			return;

		// 'droppable' 클래스로 미리 지정되어 있는 객체를 잠재적으로 드롭 할 수 있는 요소로 가져옵니다.
		let droppableBelow = elemBelow.closest('.droppable');
		
		if (currentDroppable != droppableBelow) {
			//currentDroppable=null 이벤트 전에 놓을 수 있는 요소 위에 있지 않다면(예: 빈 공간)
			//droppableBelow=null 이벤트 동안 놓을 수 있는 요소 위에 있지 않다면
			if (currentDroppable) { //드롭 가능한 요소로부터 벗어났다면
				leaveDroppable(currentDroppable);
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) { //드롭 가능한 요소에 닿았다면 (닿지 않았을 때는 null)
				enterDroppable(currentDroppable);
			}
		}
	}

	// (2) mousemove로 사물을 움직입니다.
	document.addEventListener('mousemove', onMouseMove);

	// (3) 사물을 드롭하고, 불필요한 핸들러를 제거합니다.
	kettle.onmouseup = function() { //대상을 드롭하는 순간에
		document.removeEventListener('mousemove', onMouseMove); //이벤트 리스너 제거
		kettle.onmouseup = null; //속성 제거
		if (kettle.isOverlaped == true) { //드롭 가능한 요소에 오버랩 되었다면
			console.log("오버랩 되는 중")
			leaveDroppable(currentDroppable)
		}
	};
};

function enterDroppable(elem) { //드롭 가능한 요소에 닿았다면
	kettle.isOverlaped = true;
	$('#dragSpot').hide();
	$('#dragLine').removeClass("blinking");
	$('#dragLine').addClass("fade-out");
	$('#kettle').addClass("fade-out");
	$('#dirt_leg').fadeOut(1000);
	$('#dirt_bottom').fadeOut(2000);
	$('#dirt_body').fadeOut(3000);
	$('#dirt_head').fadeOut(4000);
	setTimeout(function() { 
		$('form').submit();
	}, 5000);
}

function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
	kettle.isOverlaped = false;
}

kettle.ondragstart = function() {
	return false;
};