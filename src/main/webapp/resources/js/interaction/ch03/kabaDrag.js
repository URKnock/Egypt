$(function() {
	center("#human");
	center("#dragSpot");
	if(scene == 3) {
		var left = $('#dragSpot').offset().left;
		var top = $('#dragSpot').offset().top;
		$('#ka').css("left", left);
		$('#ka').css("top", top);
		$('#dragSpot').on("click", function() {
			$('#ka').css("left", left - 2.4 + 24);
			$('#ka').css("top", top - 2.9 + 29);
			$('#ka').addClass("fade-in");
			$('#dragSpot').hide(); //대상을 숨김
			isKaShowed = 1;		
			setTimeout(function(){
				$('#ka').removeClass("fade-in");
				$('#ka').css("opacity", 1);
				$('#ka').css("left", left);
				$('#ka').css("top", top);
				$('#ka').width(48);
				$('#ka').height(58);
				$('#ka').addClass("pikachu");
 			}, 1000);
			$('#ka').on("click", function(){ object("#ka", 8); });	
		});
	}
	if(scene == 4) {
		center("#ba");
		$("#ba").css("top", 236);
		$('#dragSpot').hide();
		isKaShowed = 1;
		nextSpotInit();
		dragSpot.onmousedown = function (event) {
			let shiftX = event.clientX - dragSpot.getBoundingClientRect().left;
			let shiftY = event.clientY - dragSpot.getBoundingClientRect().top;
		
			// (1) absolute 속성과 zIndex 프로퍼티를 수정해 클릭한 대상이 제일 위에서 움직이기 위한 준비를 합니다.
			dragSpot.style.position = 'absolute';
			dragSpot.style.zIndex = 1000;
		
			// 현재 위치한 부모에서 body로 직접 이동하여
			// body를 기준으로 위치를 지정합니다.
			document.body.append(dragSpot);
			moveAt(event.pageX, event.pageY);
		
			// 초기 이동을 고려한 좌표 (pageX, pageY)에서
			// 대상을 이동합니다.
			function moveAt(pageX, pageY) {
				dragSpot.style.left = pageX - shiftX + 'px';
				dragSpot.style.top = pageY - shiftY + 'px';
			}
		
			function onMouseMove(event) {
				moveAt(event.pageX, event.pageY); //마우스 포인터 아래로 사물을 이동시킵니다.
		
				dragSpot.hidden = true;
				let elemBelow = document.elementFromPoint(event.clientX, event.clientY); //elemBelow는 드롭 할 수 있는 객체의 아래 요소입니다.
				dragSpot.hidden = false;
		
				// 마우스 이벤트는 윈도우 밖으로 트리거 될 수 없습니다.(클릭한 객체를 윈도우 밖으로 드래그 했을 때)
				// 따라서 clientX∙clientY가 화면 밖에 있으면, elementFromPoint는 null을 반환합니다.
				if (!elemBelow) return;
		
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
			dragSpot.onmouseup = function() { //대상을 드롭하는 순간에
				document.removeEventListener('mousemove', onMouseMove); //이벤트 리스너 제거
				dragSpot.onmouseup = null; //속성 제거
				if (dragSpot.isOverlaped == true) { //드롭 가능한 요소에 오버랩 되었다면
					console.log("오버랩 되는 중")
					leaveDroppable(currentDroppable)
					if(isKaShowed == 0) { //드래그된 dest에 따라서 다른 객체에 클래스를 추가해준다.
					} else {
						$('#ba').addClass("fade-in");
						$('#dragSpot').hide(); //대상을 숨김
						$('#dragDest').hide();
						$('#dragLine').hide();
						
						setTimeout(function(){
							var left = $('#ba').offset().left;
							var top = $('#ba').offset().top;
							$('#ba').removeClass("fade-in");
							$('#ba').css("opacity", 1);
							$('#ba').css("left", left);
							$('#ba').css("top", top);
							$('#ba').width(326);
							$('#ba').height(232);
							$('#ba').addClass("pikachu");
		 				}, 1000);
		 				$('#ba').on("click", function(){ object("#ba", 9); });
					}
				}
			};
		};
	}
});

function nextSpotInit() {
	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100;
	if(isKaShowed == 1){
		$('#dragSpot').show(); //화면에 dragSpot 재배치
		$('#dragSpot').attr('style', "opacity: 0.8; background-color: #009999");
		$('#dragLine').attr('style', "transform: rotate(-45deg);");
		$('#dragDest').attr('style', "width: 100px; height: 100px;");
		center("#dragSpot");
		$('#dragLine').css("top", $('#human').offset().top - ($('#dragLine').width() / Math.sqrt(2)) / 2);
		$('#dragLine').css("left", x);
		$('#dragDest').css("top", $('#dragLine').offset().top - ($('#dragDest').height() / 2));
		$('#dragDest').css("left", $('#dragLine').offset().left + $('#dragLine').width() - ($('#dragDest').width() / 2));
	}
}

let currentDroppable = null;
let isKaShowed = 0;

function enterDroppable(elem) { //드롭 가능한 요소에 닿았다면
	elem.style.background = 'pink'; //해당 요소의 배경 색상 변경 ==> 테두리만 따려면?
	dragSpot.isOverlaped = true;
	console.log("isOverlaped 추가")
}

function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
	elem.style.background = ''; //해당 요소의 배경 색상 제거
	dragSpot.isOverlaped = false;
	console.log("isOverlaped 해제")
}

dragSpot.ondragstart = function() {
	return false;
};