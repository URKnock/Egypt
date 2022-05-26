<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch02.css'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch02/page2_animation.css'/>"/>
<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
<script src="<c:url value='/resources/js/ch02_2.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<script src="<c:url value='/resources/js/sound_bgmonly.js'/>"></script>

</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="chap5" class="chapters pikachu island-move island-unlocked" src="<c:url value='/resources/object/ch02/5_1.png'/>"/>
		<img id="chap6" class="chapters pikachu island-move island-unlocked" src="<c:url value='/resources/object/ch02/6_1.png'/>"/>
		<img id="chap7" class="chapters pikachu island-move island-unlocked" src="<c:url value='/resources/object/ch02/7_1.png'/>"/>
		<img id="chap8" class="chapters pikachu island-move island-unlocked" src="<c:url value='/resources/object/ch02/8_1.png'/>"/>
		
		<img id="chap5view" class="chapViews" src="<c:url value='/resources/object/ch02/5_3.png'/>"/>
		<img id="chap6view" class="chapViews" src="<c:url value='/resources/object/ch02/6_3.png'/>"/>
		<img id="chap7view" class="chapViews" src="<c:url value='/resources/object/ch02/7_3.png'/>"/>
		<img id="chap8view" class="chapViews" src="<c:url value='/resources/object/ch02/8_3.png'/>"/>
		
		<img id="arrow" class="pikachu" style="position: absolute;" onClick="location.href='../chapter02'" src="<c:url value='/resources/UI/Menu/화살표pre.png'/>"/>
		<img id="stone1" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_2.png'/>"/>
		<img id="stone2" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_3.png'/>"/>
		<img id="stone3" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_4.png'/>"/>
		<img id="banner" src="<c:url value='/resources/object/ch02/0_6.png'/>"/>
	</div>
	<audio id="bgm" preload="auto" src="/resources/bgm/ch02/2_home.mp3" loop="true" autobuffer></audio>
	<audio id="voice" src=""></audio>
	<audio id="effect" src=""></audio>

	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	
	<jsp:include page="../help.jsp"/>
	<jsp:include page="../setting.jsp"/>
	
	<c:choose>
		<c:when test="${chapter eq '1'}">
			<script>
				console.log("1챕터에 입장 가능합니다.");
			</script>
		</c:when>
		<c:when test="${chapter ne '1'}"> <!-- chapter 번호가 1 이상이라면 -->
			<script>
				var i;	
				for(i = 5; i <= ${chapter}; i++ ) { //지금까지 해금한 챕터 모두를 처리
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