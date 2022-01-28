<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<meta charset="UTF-8">
<title>챕터3</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<style type="text/css">
	#head {
		position: absolute;
		cursor: pointer;
		top: 410;
		left: 995;
		width: 90px;
		height: 150px;	
		z-index: 3;
	}
	
	#pot {
		position: absolute;
		cursor: pointer;
		top: 500;
		left: 1000;
		width: 75px;
		height: 115px;
		z-index: 1;
	}
	
	#organ {
		position: absolute;
		cursor: pointer;
		top: 100;
		left: 700;
		width: 90px;
		height: 100px;
		z-index: 2;
	}
	
	.head-hover {
		transform: rotateZ(-80deg);
		transform-origin: bottom left;
		transition: transform 1s;
	}
	
	.head-leave {
		transform: rotateZ(0deg);
		transform-origin: bottom left;
		transition: transform 1s;
	}

	.fade-out {
	  transform: rotateZ(-45deg) scale(0.2, 0.2);
	  transform-origin: bottom left;
	  transition: transform 1s;
		
	  animation: fadeout 0.7s;
	  -moz-animation: fadeout 0.7s; /* Firefox */
	  -webkit-animation: fadeout 0.7s; /* Safari and Chrome */
	  -o-animation: fadeout 0.7s; /* Opera */
	  animation-fill-mode: forwards;
	}
	
	@-webkit-keyframes fadeout { /* Safari and Chrome */
	    from {
	        opacity: 1;
	    }
	    to {
	        opacity: 0;
	    }
	}
	
	body {
	    width: 100%;
	    height: 90vh;
	    background-image: url("../resources/background/ch03/3_1.jpg");
	    background-repeat: no-repeat;
	    background-size: cover; 
	    background-position: center;
	    overflow: hidden;
		overflow-x: hidden;
		overflow-y: hidden;
	}
		
</style>
</head>

<body>

	<img src="../resources/object/ch03/장기_위.png" id="organ" class="organ">
	
	<img src="../resources/object/ch03/카누푸스_바디_전체.png" id="pot" class="droppable">
		
	<img src="../resources/object/ch03/카노푸스_두아무테프머리.png" id="head" class="head">

	<script>
		$(function() { //런타임 동작
			$('#head').mouseenter(function() {
				console.log("마우스 오버!")
				$('#head').removeClass("head-leave")
				$('#head').addClass("head-hover")
			});
			
			$('.head').mouseleave(function() {
				console.log("마우스 포인터가 떠남")
				$('#head').removeClass("head-hover")
				$('#head').addClass("head-leave")
			});
		});

		let currentDroppable = null;

		organ.onmousedown = function(event) {
			let shiftX = event.clientX - organ.getBoundingClientRect().left;
			let shiftY = event.clientY - organ.getBoundingClientRect().top;

			// (1) absolute 속성과 zIndex 프로퍼티를 수정해 클릭한 대상이 제일 위에서 움직이기 위한 준비를 합니다.
			organ.style.position = 'absolute';
			organ.style.zIndex = 1000;

			// 현재 위치한 부모에서 body로 직접 이동하여
			// body를 기준으로 위치를 지정합니다.
			document.body.append(organ);

			moveAt(event.pageX, event.pageY);

			// 초기 이동을 고려한 좌표 (pageX, pageY)에서
			// 대상을 이동합니다.
			function moveAt(pageX, pageY) {
				organ.style.left = pageX - shiftX + 'px';
				organ.style.top = pageY - shiftY + 'px';
			}

			function onMouseMove(event) {
				moveAt(event.pageX, event.pageY); //마우스 포인터 아래로 사물을 이동시킵니다.

				organ.hidden = true;
				let elemBelow = document.elementFromPoint(event.clientX,
						event.clientY); //elemBelow는 드롭 할 수 있는 객체의 아래 요소입니다.
				organ.hidden = false;

				// 마우스 이벤트는 윈도우 밖으로 트리거 될 수 없습니다.(클릭한 객체를 윈도우 밖으로 드래그 했을 때)
				// 따라서 clientX∙clientY가 화면 밖에 있으면, elementFromPoint는 null을 반환합니다.
				if (!elemBelow)
					return;

				// 'droppable' 클래스로 미리 지정되어 있는 객체를 잠재적으로 드롭 할 수 있는 요소로 가져옵니다.
				let droppableBelow = elemBelow.closest('.droppable');
				//if($(droppableBelow).attr('id') == "pot") { //단지가 droppable로 설정되었다면
				//	console.log("pot이 인식됨")
				//	$('.head').addClass("droppable"); //head도 같이 droppable로 설정한다.
				//} //==> 꼭 필요할까?
				
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
			organ.onmouseup = function() { //대상을 드롭하는 순간에
				document.removeEventListener('mousemove', onMouseMove); //이벤트 리스너 제거
				organ.onmouseup = null; //속성 제거
				if (organ.isOverlaped == true) { //드롭 가능한 요소에 오버랩 되었다면
					console.log("오버랩 되는 중")
					leaveDroppable(currentDroppable)
					$('#organ').addClass("fade-out")
					//organ.remove(); //대상을 삭제
				}
			};
		};

		function enterDroppable(elem) { //드롭 가능한 요소에 닿았다면
			//elem.style.background = 'pink'; //해당 요소의 배경 색상 변경 ==> 테두리만 따려면?
			organ.isOverlaped = true;
			$('#head').removeClass("head-leave")
			$('#head').addClass("head-hover")
			console.log("isOverlaped 추가")
		}

		function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
			//elem.style.background = ''; //해당 요소의 배경 색상 제거
			organ.isOverlaped = false;
			$('#head').removeClass("head-hover")
			$('#head').addClass("head-leave")
			console.log("isOverlaped 해제")
		}

		organ.ondragstart = function() {
			return false;
		};
	</script>
</body>
</html>
