$(function() { //런타임 동작을 등록
	
});

function checkWipeCount(element) {
	if(wipeCount == 5) {
		//console.log("cleanCount: ", cleanCount)
		$('#' + element.id).addClass("fade-out");
		wipeCount = 0;
		if($(".fade-out").length >= 4){
			console.log("닦기 완료!");
			$('#linen').attr('style', "top: 150; left: 900;");
			setTimeout(function() { 
				$("form").submit();
			}, 2000);
		}
	}
}

let currentDroppable = null;
let wipeCount = 0;
let cleanCount = 0;

linen.onmousedown = function(event) {
	let shiftX = event.clientX - linen.getBoundingClientRect().left;
	let shiftY = event.clientY - linen.getBoundingClientRect().top;

	// (1) absolute 속성과 zIndex 프로퍼티를 수정해 클릭한 대상이 제일 위에서 움직이기 위한 준비를 합니다.
	linen.style.position = 'absolute';
	linen.style.zIndex = 1000;

	// 현재 위치한 부모에서 body로 직접 이동하여
	// body를 기준으로 위치를 지정합니다.
	document.body.append(linen);

	moveAt(event.pageX, event.pageY);

	// 초기 이동을 고려한 좌표 (pageX, pageY)에서
	// 대상을 이동합니다.
	function moveAt(pageX, pageY) {
		linen.style.left = pageX - shiftX + 'px';
		linen.style.top = pageY - shiftY + 'px';
	}

	function onMouseMove(event) {
		moveAt(event.pageX, event.pageY); //마우스 포인터 아래로 사물을 이동시킵니다.

		linen.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX,
				event.clientY); //elemBelow는 드롭 할 수 있는 객체의 아래 요소입니다.
		linen.hidden = false;

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
	linen.onmouseup = function() { //대상을 드롭하는 순간에
		document.removeEventListener('mousemove', onMouseMove); //이벤트 리스너 제거
		linen.onmouseup = null; //속성 제거
		if (linen.isOverlaped == true) { //드롭 가능한 요소에 오버랩 되었다면
			console.log("오버랩 되는 중")
			leaveDroppable(currentDroppable)
		}
		else { //요소 밖에 드롭했다면
			console.log("원위치")
			$('#linen').attr('style', "top: 150; left: 900;");
		}
	};
};

function enterDroppable(elem) { //드롭 가능한 요소에 닿았다면
	linen.isOverlaped = true;
	wipeCount = wipeCount + 1;
	checkWipeCount(elem)
}

function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
	linen.isOverlaped = false;
	checkWipeCount(elem)
}

linen.ondragstart = function() {
	return false;
};