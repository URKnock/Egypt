<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/info_window.css'/>">
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch11.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch11_2.js'/>"></script>
<script src="<c:url value='/resources/js/interaction/info_window.js'/>"></script>
</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="platform" src="<c:url value='/resources/object/ch11/2층_단상.png'/>"/>
		<img id="hellFireFront" style="z-index: 6;" src="<c:url value='/resources/object/ch11/2층_땅불1.webp'/>"/>
		<img id="hellFireBack" style="z-index: 1;" src="<c:url value='/resources/object/ch11/2층_땅불2.webp'/>"/>
		<img id="arrow" onClick="location.href='../chapter11part3'" src="<c:url value='/resources/object/ch11/arrow.png'/>"/>
		<img id="ground" style="z-index: 7;" src="<c:url value='/resources/object/ch11/2층_땅.png'/>"/>
		<img id="pot_back" style="z-index: 2;" src="<c:url value='/resources/object/ch11/2층_항아리안.png'/>"/>
		<img id="pot_inner" style="z-index: 4;" src="<c:url value='/resources/object/ch11/2층_항아리탕.webp'/>"/>
		<img id="pot_frame" style="z-index: 5;" src="<c:url value='/resources/object/ch11/2층_항아리밖.png'/>"/>
		<img id="devil" class="select" src="<c:url value='/resources/Character/ch11/2층_악마1.webp'/>"/>
		<img style="transform: scale(0.5) scaleX(-1);" onClick="location.href='../chapter11'" src="<c:url value='/resources/object/ch11/arrow.png'/>"/>
		<img id="pot_dead" style="z-index: 3;" src="<c:url value='/resources/object/ch11/2층_항아리사자1.webp'/>"/>
	</div>
	<div id="page">
		<!-- 안 쓸듯 -->
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
		$('#background').css('background-image', "url('resources/background/ch11/ch11_bg_2.png')");
		
	</script>
	<form method="post" action="<c:url value='/chapter11'/>">
	<div id="dialogue">
		<img src='<c:url value="${dialogue.image}"/>'/>
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
	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
	</form>
</body>
</html>
