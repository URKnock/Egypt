<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<meta charset="UTF-8">
<title>챕터4</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<style type="text/css">
	#osiris {
		position: absolute;
		top: 252;
		left: 1230;
		width: 300px;
		height: 450px;
	}
	
	#tray {
		position: absolute;
		cursor: pointer;
		top: 400;
		left: 600;
		width: 300px;
		height: 190px;
	}
	
	.fade-out {
	  animation: fadeout 0.5s;
	  -moz-animation: fadeout 0.5s; /* Firefox */
	  -webkit-animation: fadeout 0.5s; /* Safari and Chrome */
	  -o-animation: fadeout 0.5s; /* Opera */
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
		background: no-repeat url("../resources/background/ch04/4_0_4.png");
		width: 1920px;
		height: 1080px;
		overflow: hidden;
		overflow-x: hidden;
		overflow-y: hidden;
	}
</style>
</head>

<body>

  <img src="../resources/object/ch04/4_23.png" id="osiris" class="droppable">
  
  <img src="../resources/object/ch04/4_4_16.png" id="tray">

  <script>
	  let currentDroppable = null;
	
	  tray.onmousedown = function(event) { //tray(제물이 얹혀있는 쟁반)를 클릭하면 시작됩니다.
	  	let shiftX = event.clientX - tray.getBoundingClientRect().left; //객체의 X 위치 결정
	  	let shiftY = event.clientY - tray.getBoundingClientRect().top; //객체의 Y 위치 결정
	
	  	// (1) absolute 속성과 zIndex 프로퍼티를 수정해 클릭한 대상이 제일 위에서 움직이기 위한 준비를 합니다.
	  	tray.style.position = 'absolute';
	  	tray.style.zIndex = 1000;
	  	
	 	// 현재 위치한 부모에서 body로 직접 이동하여
		// body를 기준으로 위치를 지정합니다.
	  	document.body.append(tray);
	
	  	moveAt(event.pageX, event.pageY);
	
	  	// 초기 이동을 고려한 좌표 (pageX, pageY)에서
	  	// 대상을 이동합니다.
	  	function moveAt(pageX, pageY) {
	  		tray.style.left = pageX - shiftX + 'px';
	  		tray.style.top = pageY - shiftY + 'px';
	  	}
	
	  	function onMouseMove(event) { //만약 클릭한 채로 마우스를 움직이면
	  		moveAt(event.pageX, event.pageY); //마우스 포인터 아래로 사물을 이동시킵니다.
	
	  		tray.hidden = true;
	  		let elemBelow = document.elementFromPoint(event.clientX, event.clientY); //elemBelow는 드롭 할 수 있는 객체입니다.
	  		tray.hidden = false;
	
	  		// 마우스 이벤트는 윈도우 밖으로 트리거 될 수 없습니다.(클릭한 객체를 윈도우 밖으로 드래그 했을 때)
	        // 따라서 clientX∙clientY가 화면 밖에 있으면, elementFromPoint는 null을 반환합니다.
	  		if (!elemBelow) return;
	
	  		// 'droppable' 클래스로 미리 지정되어 있는 객체를 '잠재적으로 드롭 할 수 있는 요소'로 가져옵니다.
	  		let droppableBelow = elemBelow.closest('.droppable'); //여기서는 오시리스가 droppableBelow가 됩니다.
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
	  	tray.onmouseup = function() { //대상을 드롭하는 순간에
	  		document.removeEventListener('mousemove', onMouseMove); //이벤트 리스너 제거
	  		tray.onmouseup = null; //속성 제거
	  		if (tray.isOverlaped == true) { //드롭 가능한 요소에 오버랩 되었다면
	  			console.log("오버랩 되는 중")
	  			leaveDroppable(currentDroppable) //사물을 드롭하고
	  			$('#tray').addClass("fade-out") //페이드아웃 애니메이션을 재생합니다.
	  		}
	  	};
	  };
	
	  function enterDroppable(elem) { //드롭 가능한 요소에 닿았다면
	  	elem.style.background = 'pink'; //해당 요소의 배경 색상 변경 ==> 이 부분을 지우고 테두리를 노랗게 하는 CSS로 바꿔주세요.
	  	tray.isOverlaped = true; //오버랩 되고 있음을 표시
	  	console.log("isOverlaped 추가")
	  }
	
	  function leaveDroppable(elem) { //드롭 가능한 요소로부터 벗어났다면
	  	elem.style.background = '';
	  	tray.isOverlaped = false; //오버랩 되고 있는 중이 아님
	  	console.log("isOverlaped 해제")
	  }
	
	  tray.ondragstart = function() {
	  	return false;
	  };
  </script>
</body>
</html>
