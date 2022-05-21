<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch11.css'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
<script src="<c:url value='/resources/js/ch11_3.js'/>"></script>
<script src="<c:url value='/resources/js/sound_bgmonly.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>

</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="arrow_pre" onClick="location.href='../chapter11part2'" class="pikachu" src="<c:url value='/resources/object/ch11/arrow_pre.png'/>"/>
		<img id="ground" style="opacity:0" src="<c:url value='/resources/object/ch11/3층_땅.png'/>"/>
		<img id="devil" class="select pikachu" src="<c:url value='/resources/character/ch11/3층_악마1.webp'/>"/>
		<img id="human" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
	</div>
	<div id="page">
		
	</div>
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	<div id="window">
		<div class="infoImg"></div>
		<div class="infoText">
			<h3 class="name"></h3>
			<p class="content"></p>
		</div>
		<div class="close">X</div>
	</div>
	
	<script>
		//챕터11_2에서는 background 이미지를 변경
		$('#background').css('background-image', "url('resources/background/ch11/ch11_bg_3.webp')");
	</script>
	
	<jsp:include page="../setting.jsp"/>
	<script src="<c:url value='/resources/js/interaction/info_window.js'/>"></script>
	<form method="post" action="<c:url value='/chapter11part3'/>">
		<div id="dialogue">
			<img id="dialogue_bg" src='<c:url value="/resources/UI/Dialogue/0.png"/>'/>
			<img style="z-index: 222;" id="dialogue_img" src='<c:url value="${dialogue.image}"/>' />
			<div style="z-index: 222;" id="scene">
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
					<img src='<c:url value="${dialogue.player}"/>' />
				</div>
			</c:if>
		</div>
		<div id="blur"></div>
		<audio id="bgm" preload="auto" src="/resources/bgm/ch11/11_bgm.mp3" loop="true" autobuffer></audio>
	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
	</form>
</body>
</html>