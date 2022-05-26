<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch02.css'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch02/page1_animation.css'/>"/>
<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
<script src="<c:url value='/resources/js/ch02.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<script src="<c:url value='/resources/js/sound_bgmonly.js'/>"></script>

</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="chap1" class="chapters pikachu island-move island-unlocked" src="<c:url value='/resources/object/ch02/1_1.png'/>"/>
		<img id="chap2" class="chapters pikachu island-move island-locked" src="<c:url value='/resources/object/ch02/2_1.png'/>"/>
		<img id="chap3" class="chapters pikachu island-move island-locked" src="<c:url value='/resources/object/ch02/3_1.png'/>"/>
		<img id="chap4" class="chapters pikachu island-move island-locked" src="<c:url value='/resources/object/ch02/4_1.png'/>"/>
		
		<img id="chap1view" class="chapViews" src="<c:url value='/resources/object/ch02/1_3.png'/>"/>
		<img id="chap2view" class="chapViews" src="<c:url value='/resources/object/ch02/2_3.png'/>"/>
		<img id="chap3view" class="chapViews" src="<c:url value='/resources/object/ch02/3_3.png'/>"/>
		<img id="chap4view" class="chapViews" src="<c:url value='/resources/object/ch02/4_3.png'/>"/>
		
		<img id="arrow" class="pikachu" style="position: absolute;" onClick="location.href='../chapter02_2'" src="<c:url value='/resources/UI/Menu/화살표next.png'/>"/>
		<img id="stone1" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_2.png'/>"/>
		<img id="stone2" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_3.png'/>"/>
		<img id="stone3" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_4.png'/>"/>
		<img id="banner" src="<c:url value='/resources/object/ch02/0_5.png'/>"/>
	</div>
	<audio id="bgm" preload="auto" src="/resources/bgm/ch02/2_home.mp3" loop="true" autobuffer></audio>
	<audio id="voice" src=""></audio>
	<audio id="effect" src=""></audio>
	
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/><!-- 접속 코드 추가하기 -->
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	
	<jsp:include page="interaction/help.jsp"/>
	<jsp:include page="interaction/setting.jsp"/>
	
	<c:choose>
		<c:when test="${chapter eq '1'}">
			<script>
				console.log("1챕터에 입장 가능합니다.");
			</script>
		</c:when>
		<c:when test="${chapter ne '1'}"> <!-- chapter 번호가 1 이상이라면 -->
			<script>
				var i;	
				if( ${chapter} > 4 ) { var floor = 4; } 
				for(i = 2; i <= floor; i++ ) { //지금까지 해금한 챕터 모두를 처리
					$('#chap' + i).removeClass('island-locked');
					$('#chap' + i).addClass('island-unlocked');	
				}
			</script>
		</c:when>
		<c:otherwise>
			<script>console.log("챕터 정보가 없습니다.");</script>
		</c:otherwise>
	</c:choose>
</body>
</html>