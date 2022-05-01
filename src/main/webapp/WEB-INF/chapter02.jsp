<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch02.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

</head>
<body>
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	<div>
		<img class="chapters" style="top: 340; left: 300; z-index: 0;" src="<c:url value='/resources/object/ch02/2_5.png'/>"/>
		<img id="chap1" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_1.png'/>"/>
		<img id="chap2" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_2.png'/>"/>
		<img id="chap3" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_3.png'/>"/>
		<img id="chap4" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_4.png'/>"/>
		
		<img id="chap1view" class="chapViews" src="<c:url value='/resources/object/ch02/2_6.png'/>"/>
		<img id="chap2view" class="chapViews" src="<c:url value='/resources/object/ch02/2_7.png'/>"/>
		<img id="chap3view" class="chapViews" src="<c:url value='/resources/object/ch02/2_7.png'/>"/>
		<img id="chap4view" class="chapViews" src="<c:url value='/resources/object/ch02/2_7.png'/>"/>
		
		<img id="arrow" style="position: absolute; top: 340; left: 1480;" src="<c:url value='/resources/object/ch02/2_9.png'/>"/>
	</div>
	<div id="background"></div>
	
	<c:choose>
		<c:when test="${chapter eq '1'}">
			<script>console.log("1챕터에 입장 가능합니다.");</script>
		</c:when>
		<c:when test="${chapter eq '2'}">
			<script>
				console.log("2챕터에 입장 가능합니다.");
				$('#chap2').attr('src', "<c:url value='/resources/object/ch02/2_1.png'/>");
			</script>
		</c:when>
		<c:when test="${chapter eq '3'}">
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
		$(document).ready(function(){
			$('.chapViews').hide();
		});
		
		//chapter01 끝나고 나서 chapter02로 이동하는 코드가 어느 쪽에 있는지?? 
		
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
			
<<<<<<< HEAD
=======
			$('.island-unlocked').click(function() { //이미 해금된 섬이라면
				var chapName = $(this).attr("id");
				var chapNum = Number(chapName[4]) + 2;
				$(location).attr("href", "/load?chapter=" + chapNum);
			});
			
>>>>>>> branch 'main' of https://github.com/URKnock/Egypt.git
			$('.island-locked').click(function() { //아직 해금되지 않은 섬이라면
				console.log("섬이 클릭됨");
				var chapName = $(this).attr("id");
				$('#' + chapName).removeClass("island-move"); //애니메이션 paused 상태와 island-shake가 겹치지 않도록 함
				$('#' + chapName).addClass("island-shake");
				setTimeout(function() { $('#' + chapName).addClass("island-move"); }, 1500);
				//console.log($('#' + chapName).attr("class"));
			})
		});
	</script>
</body>
</html>
