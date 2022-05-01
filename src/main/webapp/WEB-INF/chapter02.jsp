<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch02.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch02.js'/>"></script>

</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="stone" class="chapters" src="<c:url value='/resources/object/ch02/2_5.png'/>"/>
		<img id="chap1" class="chapters island-move island-unlocked" src="<c:url value='/resources/object/ch02/2_1.png'/>"/>
		<img id="chap2" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_2.png'/>"/>
		<img id="chap3" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_3.png'/>"/>
		<img id="chap4" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_4.png'/>"/>
		
		<img id="chap1view" class="chapViews" src="<c:url value='/resources/object/ch02/2_6.png'/>"/>
		<img id="chap2view" class="chapViews" src="<c:url value='/resources/object/ch02/2_7.png'/>"/>
		<img id="chap3view" class="chapViews" src="<c:url value='/resources/object/ch02/2_7.png'/>"/>
		<img id="chap4view" class="chapViews" src="<c:url value='/resources/object/ch02/2_7.png'/>"/>
		
		<img id="arrow" style="position: absolute;" src="<c:url value='/resources/object/ch02/2_9.png'/>"/>
	</div>
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	
	<c:choose>
		<c:when test="${chapter eq '1'}">
			<script>
				console.log("1챕터에 입장 가능합니다.");
			</script>
		</c:when>
		<c:when test="${chapter ne '1'}"> <!-- 해금된 섬도 파일명 통일시켜서 ${chapter}로 제어 가능하게 바꾸기 -->
			<script>
				console.log(${chapter}, "챕터에 입장 가능합니다.");
				$('#chap' + ${chapter}).attr('src', "<c:url value='/resources/object/ch02/2_1.png'/>");
				$('#chap' + ${chapter}).removeClass('island-locked');
				$('#chap' + ${chapter}).addClass('island-unlocked');
			</script>
		</c:when>
		<c:when test="${chapter eq '3'}"> <!-- 아직 해금된 파일이 없어서 임시로 남겨둔 부분 -->
			<script>console.log("3챕터에 입장 가능합니다.");</script>
		</c:when>
		<c:when test="${chapter eq '4'}">
			<script>console.log("4챕터에 입장 가능합니다.");</script>
		</c:when>
		<c:otherwise>
			<script>console.log("챕터 정보가 없습니다.");</script>
		</c:otherwise>
	</c:choose>
	
	<script>

		$(function() { // 런타임 동작
			$('.island-move').mouseenter(function() {
				//console.log("마우스 오버!");
				var chapName = $(this).attr("id") + 'view'; 
				$('#' + chapName).show();
				$('#' + chapName).removeClass("fade-out");
				$('#' + chapName).addClass("fade-in");
			});
			
			$('.island-move').mouseleave(function() {
				//console.log("마우스 포인터가 떠남");
				var chapName = $(this).attr("id") + 'view'; 
				$('#' + chapName).removeClass("fade-in");
				$('#' + chapName).addClass("fade-out");
			});
			
			$('.island-unlocked').click(function() { //이미 해금된 섬이라면
				var chapName = $(this).attr("id");
				var chapNum = Number(chapName[4]) + 2;
				$(location).attr("href", "/load?chapter=" + chapNum);
			});
			
			$('.island-locked').click(function() { //아직 해금되지 않은 섬이라면
				console.log("섬이 클릭됨");
				var chapName = $(this).attr("id");
				$('#' + chapName).removeClass("island-move"); //애니메이션 paused 상태와 island-shake가 겹치지 않도록 함
				$('#' + chapName).addClass("island-shake");
				setTimeout(function() { $('#' + chapName).addClass("island-move"); }, 500); //shake가 끝나자마자 움직이지 않으면 shake 높이가 default가 됨.
				setTimeout(function() { $('#' + chapName).removeClass("island-shake"); }, 500);
				//console.log($('#' + chapName).attr("class"));
			});
		});
	</script>
</body>
</html>