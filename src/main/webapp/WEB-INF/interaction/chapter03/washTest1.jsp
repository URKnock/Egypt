<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<meta charset="UTF-8">
<title>챕터3</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<style type="text/css">
	#kettleToClick {
		position: absolute;
		cursor: pointer;
		top: 120;
		left: 600;
		z-index: 3;
	}
	
	#kettle {
		position: absolute;
		cursor: pointer;
		top: 300;
		left: 300;
		transform: rotate(45deg);
		z-index: 3;
	}
	
	#scroll {
		position: absolute;
		top: 50;
		left: 300;
		z-index: 1;
	}
	
	.stick {
		position: absolute;
		top: 25;
		z-index: 2;
	}
	
	#linen {
		position: absolute;
		top: 150;
		left: 850;
		z-index: 3;
	}
	
	#human {
		position: absolute;
		top: 400;
		left: 320;
		z-index: 1;
	}	
		
	.dirt{
		position: absolute;
		top: 400;
		opacity: 1;
		z-index: 2;
	}	
	
	hr{
		position: absolute;
		top: 350; 
		left: 300;
	    border: none;
	    border-top: 5px dotted red;
	    height: 1px;
	    width: 800;
	}
	
	.circle {
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 0;
		width: 110px;
		height: 110px;
		border-radius: 50%;
		background-color: #ee6c4d;
		opacity: 0.4;
		z-index: 3;
	}
	
	.fade-out {
	  animation: fadeout 1s;
	  -moz-animation: fadeout 1s; /* Firefox */
	  -webkit-animation: fadeout 1s; /* Safari and Chrome */
	  -o-animation: fadeout 1s; /* Opera */
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
	
	.blinking{ 
		-webkit-animation:blink 0.8s ease-in-out infinite alternate; 
		-moz-animation:blink 0.8s ease-in-out infinite alternate; 
		animation:blink 0.8s ease-in-out infinite alternate; 
	} 
	
	@-webkit-keyframes blink{ 
		0% {opacity:0;} 
		100% {opacity:1;} 
	} 
	
	@-moz-keyframes blink{
		0% {opacity:0;} 
		100% {opacity:1;} 
	} 
	
	@keyframes blink{
		0% {opacity:0;} 
		100% {opacity:1;} 
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

	<div id="dragSpot" class="circle droppable" style="top: 300; left: 1100;"></div>
	
	<img src="../resources/object/ch03/두루마기.png" id="scroll">
	<img src="../resources/object/ch03/두루마기봉.png" class="stick" style="left:300">
	<img src="../resources/object/ch03/두루마기봉.png" class="stick" style="left:1200">
	
	<img src="../resources/object/ch03/주전자.png" id="kettleToClick">
	<img src="../resources/object/ch03/주전자.png" id="kettle">
	<img src="../resources/object/ch03/3_2_4.png" id="linen">
	
	<div>
		<img src="../resources/object/ch03/3_2_1_1.png" id="dirt_head" class="dirt" 
		style="width: 252; height: 166; left: 900">
		<img src="../resources/object/ch03/3_2_1_2.png" id="dirt_body" class="dirt" 
		style="width: 299; height: 168; left: 725">
		<img src="../resources/object/ch03/3_2_1_3.png" id="dirt_bottom" class="dirt" 
		style="width: 281; height: 169; left: 570">
		<img src="../resources/object/ch03/3_2_1_4.png" id="dirt_leg" class="dirt" 
		style="width: 442; height: 157; top: 420; left: 320">
		
		<img src="../resources/object/ch03/3_2_2.png" id="human" class="human">
	</div>
	
	<hr class="blinking" id="dragLine"></hr>
	
	<script>
		$(function() { //런타임 동작을 등록
		
		});
		
		$(document).ready(function(){
			$('#kettle').hide();
			$('#dragLine').hide();
			$('#dragSpot').hide();
		});

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
				alert("다음 장면으로!"); //페이드아웃을 기다림 ==> 1초 딜레이
			}, 1000);
		}

		function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
			kettle.isOverlaped = false;
		}

		kettle.ondragstart = function() {
			return false;
		};
	</script>
</body>
</html>
