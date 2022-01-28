<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<meta charset="UTF-8">
<title>챕터3</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<style type="text/css">

	#human {
		position: absolute;
		cursor: pointer;
		top: 350;
		left: 550;
		width: 481px;
		height: 102px;
		z-index: 0;
	}
	
	#ka {
		position: absolute;
		top: 120;
		left: 680;
		width: calc(96px/10);
		height: calc(107px/10);
		opacity: 0;
		z-index: 1;
	}
	
	#ba {
		position: absolute;
		top: 150;
		left: 950;
		width: calc(326px/10);
		height: calc(232px/10);
		opacity: 0;
		z-index: 1;
	}
	
	hr{
		position: absolute;
		top: 320; 
		left: 750;
	    border: none;
	    border-top: 5px dotted red;
	    height: 2px;
	    width: 100;
	    z-index: 1;
	}
	
	.circle {
		cursor: pointer;
		position: absolute;
		width: 50px;
		height: 50px;
		border: solid yellow;
		opacity: 0;
		border-radius: 50%;
		background-color: #ee6c4d;
		z-index: 2;
	}

	.fade-in {
	  transform: scale(10.0);
	  transform-origin: center center;
	  transition: transform 1s;
		
	  animation: fadein 0.7s;
	  -moz-animation: fadein 0.7s; /* Firefox */
	  -webkit-animation: fadein 0.7s; /* Safari and Chrome */
	  -o-animation: fadein 0.7s; /* Opera */
	  animation-fill-mode: forwards;
	}
	
	@-webkit-keyframes fadein { /* Safari and Chrome */
	    from {
	        opacity: 0;
	    }
	    to {
	        opacity: 1;
	    }
	}
	
	.fade-out {
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

	<div id="dragSpot" class="circle" style="top: 365; left: 830; opacity: 0.8;"></div>
	
	<div id="dragDest" class="circle droppable" style="top: 200; left: 680; 
	width: 100px; height: 100px;"></div>
	
	<img src="../resources/object/ch03/3_1.png" id="human" class="human">
	
	<img src="../resources/object/ch03/카.png" id="ka">
	
	<img src="../resources/object/ch03/바.png" id="ba">
	
	<hr id="dragLine" style="transform: rotate(45deg);"></hr>
	
	<script>
		$(function() { //런타임 동작
			
		});
		
		function nextSpotInit()
		{   //만약 카를 꺼냈다면 바를 꺼낼 circle을 만들어준다. 
			if(isKaShowed == 1){
				console.log("isKaShowed가 1임.")
				$('#dragDest').attr('style', "top: 200; left: 920; width: 100px; height: 100px;"); //dragDest 위치 변경
				$('#dragSpot').show(); //화면에 dragSpot 재배치
				$('#dragSpot').attr('style', "top: 365; left: 830; opacity: 0.8; background-color: #009999");
				$('#dragLine').attr('style', "left: 860; transform: rotate(-45deg);");
				//hr 라인도 각도 수정해주기
			}
		}

		let currentDroppable = null;
		let isKaShowed = 0;

		dragSpot.onmousedown = function(event) {
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
				let elemBelow = document.elementFromPoint(event.clientX,
						event.clientY); //elemBelow는 드롭 할 수 있는 객체의 아래 요소입니다.
				dragSpot.hidden = false;

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
			dragSpot.onmouseup = function() { //대상을 드롭하는 순간에
				document.removeEventListener('mousemove', onMouseMove); //이벤트 리스너 제거
				dragSpot.onmouseup = null; //속성 제거
				if (dragSpot.isOverlaped == true) { //드롭 가능한 요소에 오버랩 되었다면
					console.log("오버랩 되는 중")
					leaveDroppable(currentDroppable)
					if(isKaShowed == 0) { //드래그된 dest에 따라서 다른 객체에 클래스를 추가해준다.
						$('#ka').addClass("fade-in");
						$('#dragSpot').hide(); //대상을 숨김
						isKaShowed = 1;
						nextSpotInit();
					}
					else {
						$('#ba').addClass("fade-in");
						$('#dragSpot').hide(); //대상을 숨김
						$('#dragDest').hide();
						$('#dragLine').hide();
					}
				}
			};
		};

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
	</script>
</body>
</html>
