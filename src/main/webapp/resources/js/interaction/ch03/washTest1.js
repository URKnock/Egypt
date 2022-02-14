$(function() {
	$('#kettle').hide();
	$('#dragLine').hide();
	$('#dragSpot').hide();

	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100;

	resize('#human', 2);	
	center('#human');
	
	var left = $('#human').offset().left;
	left = dirty('#dirt_leg', left);
	left = dirty('#dirt_bottom', left);
	left = dirty('#dirt_body', left);
	left = dirty('#dirt_head', left);
	
	resize('#scroll', 1.333);
	$('#scroll').css("top", 100);
	$('#scroll').css("left", x - $('#scroll').width() / 2);
	
	var scrollY = 100 + ($('#scroll').height() / 2);
	var stick = $('#stick1');
	resize('#stick1', 1.333);
	stick.css("top", scrollY - (stick.height() / 2));
	stick.css("left", $('#scroll').offset().left - (stick.width() / 2));
	
	stick = $('#stick2');
	resize('#stick2', 1.333);
	stick.css("top", scrollY - (stick.height() / 2));
	stick.css("left", $('#scroll').offset().left + $('#scroll').width() - (stick.width() / 2));
	
	resize('#kettleToClick', 1.333);
	$('#kettleToClick').css("top", scrollY - ($('#kettleToClick').height() / 2));
	$('#kettleToClick').css("left", x - 100 - ($('#kettleToClick').width() / 2));
	
	resize('#linen', 1.333);
	$('#linen').css("top", scrollY - ($('#linen').height() / 2));
	$('#linen').css("left", x + 100 - ($('#linen').width() / 2));
});

function dirty(element, l) {
	var e = $(element);
	resize(e, 2);
	e.css("left", l);
	e.css("bottom", $('#human').offset().bottom + (e.height() / 2));
//	e.css("top", $('#human').offset().top - ($('#human').height() / 2) + (e.height() / 2));
	return (l + (e.width() / 2));
}

function resize(element, div) {
	var e = $(element);
	e.width(e.prop("naturalWidth") / div);
	e.height(e.prop("naturalHeight") / div);
}

let currentDroppable = null;
let cleanCount = 0;

$('#kettleToClick').click(function(){
	  $('#kettleToClick').hide();
	  $('#kettle').show();
	  $('#dragLine').show();
	  $('#dragSpot').show();
});

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
	$('#kettle').addClass("fade-out");
	$('#dragLine').removeClass("blinking");
	$('#dragLine').addClass("fade-out");
	setTimeout(function() { 
		$('form').submit();
	}, 2000);
}

function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
	kettle.isOverlaped = false;
}

kettle.ondragstart = function() {
	return false;
};