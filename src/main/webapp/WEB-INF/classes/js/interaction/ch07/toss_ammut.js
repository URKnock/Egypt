var item = document.querySelector("#interact .item");
var spot = document.querySelector("#interact .spot");
var circle = document.querySelector("#interact .circle");

let currentDroppable = null;

item.onmousedown = function(event) { 
	circle.style.display = "block";
	$('#active').removeClass("fade-in");
	
	let shiftX = event.clientX - item.getBoundingClientRect().left; //객체의 X 위치 결정
	let shiftY = event.clientY - item.getBoundingClientRect().top; //객체의 Y 위치 결정
	
	// (1) absolute 속성과 zIndex 프로퍼티를 수정해 클릭한 대상이 제일 위에서 움직이기 위한 준비를 합니다.
	item.style.position = 'absolute';
	item.style.zIndex = 1000;
	
	// 현재 위치한 부모에서 body로 직접 이동하여 body를 기준으로 위치를 지정합니다.
	document.body.append(item);
	moveAt(event.pageX, event.pageY);
	
	// 초기 이동을 고려한 좌표 (pageX, pageY)에서 대상을 이동합니다.
	function moveAt(pageX, pageY) {
		item.style.left = pageX - shiftX + 'px';
		item.style.top = pageY - shiftY + 'px';
	}
		
	function onMouseMove(event) { //만약 클릭한 채로 마우스를 움직이면
		moveAt(event.pageX, event.pageY); //마우스 포인터 아래로 사물을 이동시킵니다.
	
		item.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY); //elemBelow는 드롭 할 수 있는 객체입니다.
		item.hidden = false;
	
		if (!elemBelow) return;
	
		// 'droppable' 클래스로 미리 지정되어 있는 객체를 '잠재적으로 드롭 할 수 있는 요소'로 가져옵니다.
		let droppableBelow = elemBelow.closest('.droppable'); //여기서는 오시리스가 droppableBelow가 됩니다.
		if (currentDroppable != droppableBelow) {
			if (currentDroppable) { // 드롭 가능한 요소로부터 벗어났다면
				leaveDroppable(currentDroppable);
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) { // 드롭 가능한 요소에 닿았다면 (닿지 않았을 때는 null)
				enterDroppable(currentDroppable);
			}
		}
	}
	
	// (2) mousemove로 사물을 움직입니다.
	document.addEventListener('mousemove', onMouseMove);
	
	// (3) 사물을 드롭하고, 불필요한 핸들러를 제거합니다.
	item.onmouseup = function() { //대상을 드롭하는 순간에
		document.removeEventListener('mousemove', onMouseMove); //이벤트 리스너 제거
		item.onmouseup = null; //속성 제거
		if (item.isOverlaped == true) { //드롭 가능한 요소에 오버랩 되었다면
			console.log("오버랩 되는 중")
			leaveDroppable(currentDroppable) //사물을 드롭하고
			$('#active').hide();
			circle.style.display = "none";
			dragDone();
		}
	};
};

function enterDroppable(elem) { //드롭 가능한 요소에 닿았다면
	item.isOverlaped = true; //오버랩 되고 있음을 표시
	console.log("isOverlaped 추가")
}

function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
	item.isOverlaped = false; //오버랩 되고 있는 중이 아님
	console.log("isOverlaped 해제")
}

item.ondragstart = function() {
	return false;
};