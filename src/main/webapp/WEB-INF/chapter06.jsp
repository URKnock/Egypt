<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>사자의 서</title>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
	<link href="<c:url value='/resources/css/ch06.css'/>" rel="stylesheet" type="text/css"/>
	<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
	<script src="<c:url value='/resources/js/ch06.js'/>"></script>
	<script src="<c:url value='/resources/js/sound.js'/>"></script>
	<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
	
</head>
<body onload="init();">
	<audio id="bgm" preload="auto" src='<c:url value="/resources/bgm/6_7_courtroom.mp3"/>' loop="true" autobuffer></audio>
	<audio id="effect" preload="auto" src='<c:url value="/resources/bgm/ch06/water_wave.mp3"/>' loop="true" autobuffer></audio>
	<audio id="voice" preload="auto" src='<c:url value="/resources/bgm/ch06/6_${scene}_${index}_${flag}.mp3"/>'></audio>
	
	<div id="wrapper">
		<img class="background" src="<c:url value='/resources/background/ch06/6_0_2.png'/>">
		<img class="background" src="<c:url value='/resources/background/ch06/6_0_8.png'/>">
		
		<img id="water1" src="<c:url value='/resources/background/ch06/6_0_3.png'/>">
		<img id="tree" src="<c:url value='/resources/background/ch06/6_0_4.png'/>">
		<img id="grass" src="<c:url value='/resources/background/ch06/6_0_5.png'/>">
		<img id="water2" src="<c:url value='/resources/background/ch06/6_0_9.png'/>">
		<img id="water3" src="<c:url value='/resources/background/ch06/6_0_10.png'/>">	
		<img id="pillar" src="<c:url value='/resources/background/ch06/6_0_6.png'/>">
		<img id="ground" src="<c:url value='/resources/background/ch06/6_0_7.png'/>">
		
		<img id="anubis" src="<c:url value='/resources/character/ch06/anubis2.webp'/>">
		<img id="anubis2" src="<c:url value='/resources/character/ch06/anubis3.webp'/>">
		<img id="anubis3" src="<c:url value='/resources/character/ch06/아누비스 걷기(48).webp'/>">
		<img id="la" src="<c:url value='/resources/character/ch06/9_3.png'/>">
		<img id="user" src="<c:url value='/resources/character/ch06/6_1.png'/>">
		<img id="user2" src="<c:url value='/resources/character/ch06/6_1.png'/>">
		<img id="user3" src="<c:url value='/resources/character/ch06/6_1.webp'/>">
		
		<img id="boat" src="<c:url value='/resources/object/ch06/boat.png'/>">
	</div>
	
	<div id="view">	
		<div id="menu">
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	<jsp:include page="interaction/help.jsp"/>
	<jsp:include page="interaction/setting.jsp"/>
	<jsp:include page="interaction/shabti_new.jsp"/>
	<form method="post" action="<c:url value='/chapter06'/>">
		<img id="dialogue_bg" src='<c:url value="/resources/UI/Dialogue/0.png"/>'/>
		<div id="dialogue">
			<img id="dialogue_img" src='<c:url value="${dialogue.image}"/>'/>
			<div id="scene">
				<div id="title">
					<div>${dialogue.name}</div>
					<c:if test="${dialogue.nickname ne '없음'}">
						<div>${dialogue.nickname}</div>
					</c:if>
				</div>
				<div id="content">
					<p>${dialogue.content}</p>
					<img id="nextButton" src='<c:url value="/resources/UI/Dialogue/next_triangle.png"/>'>
				</div>
			</div>
			<c:if test="${dialogue.choice ne null and dialogue.choice ne '-1'}">
				<div id="choice">
					<div>
						<c:forEach var="c" items="${dialogue.choice}">
							<button name="choice" type="submit" value="${c.id}">${c.content}</button>
						</c:forEach>
					</div>
					<img src='<c:url value="${dialogue.player}"/>'/>
				</div>
			</c:if>
		</div>
		<div id="loading"></div>
		<input name="scene" type="hidden" value="${scene}"/>
		<input name="index" type="hidden" value="${index}"/>
		<input name="flag" 	type="hidden" value="${flag}"/>
		<input name="choice" type="hidden" value="${choice}"/>
	</form>
</body>
</html>

<c:if test="${scene eq 2 and index eq 0}">
	<c:set var="scene" value="0"/>
	<c:set var="index" value="0"/>
	<script>
	
	$("#dialogue").click(function() {
		setTimeout(function() { location.href = 'chapter07'; }, 2000);
	});
	</script>
</c:if>