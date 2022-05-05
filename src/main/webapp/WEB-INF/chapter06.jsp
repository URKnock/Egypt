<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>사자의 서</title>
	<link href="<c:url value='/resources/css/ch06.css'/>" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script src="<c:url value='/resources/js/ch06.js'/>"></script>
	<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
	
	<script> $(function(){ init(); }); </script>
</head>
<body>
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
		
		<img id="anubis" src="<c:url value='/resources/character/ch06/anubis2.gif'/>">
		<img id="anubis2" src="<c:url value='/resources/character/ch06/anubis3.gif'/>">
		<img id="la" src="<c:url value='/resources/character/ch06/9_3.png'/>">
		<img id="user" src="<c:url value='/resources/character/ch06/6_1.png'/>">
		<img id="user2" src="<c:url value='/resources/character/ch06/6_1.png'/>">
		
		<img id="boat" src="<c:url value='/resources/object/ch06/boat.png'/>">
	</div>
	
	<div id="view">	
		<div id="menu">
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	
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
						<img />
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
			<audio id="bgm" preload="auto" src="/resources/bgm/ch06/bgm.mp3" loop="true" autobuffer></audio>
			<audio id="voice" preload="auto" src="/resources/bgm/ch06/6_${scene}_${index}_${flag}.wav"></audio>
			<input name="scene" type="hidden" value="${scene}"/>
			<input name="index" type="hidden" value="${index}"/>
			<input name="flag" 	type="hidden" value="${flag}"/>
			<input name="choice" type="hidden" value="${choice}"/>
		</form>
	</div>
</body>
</html>