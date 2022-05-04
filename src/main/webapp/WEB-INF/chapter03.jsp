<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch03.css'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch03.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
</head>
<body onload="init(); interaction();">
<div id="background">
	<c:forEach var="i" begin="1" end="3">
		<img src="<c:url value='/resources/background/ch03/3_0${i}.png'/>"/>
	</c:forEach>
	<c:choose>
		<c:when test="${flag ne 0 && scene ne 2}">
			<img src="<c:url value='/resources/character/ch03/anubis_angry.webp'/>"/>
		</c:when>
		<c:when test="${scene eq 1}">
			<img src="<c:url value='/resources/character/ch03/anubis_close.webp'/>"/>
		</c:when>
		<c:otherwise>
			<img src="<c:url value='/resources/character/ch03/anubis_open.webp'/>"/>
		</c:otherwise>
	</c:choose>
	<c:if test="${scene ne 10}">
		<div class="canopic">
			<c:forEach var="i" begin="1" end="4">
				<img id="ca${i}" src="<c:url value='/resources/background/ch03/k_${i}.png'/>"/>
			</c:forEach>
		</div>
	</c:if>
</div>
<div id="page">
	<c:if test="${page ne null}">
		<jsp:include page="./interaction/chapter03/${page}"/>
	</c:if>
	<c:if test="${scene lt 3}">
		<img id="human" src = "<c:url value='/resources/character/ch03/3_1.png'/>"/>
	</c:if>
</div>
<div id="menu">
	<div>
		<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>
</div>
<jsp:include page="interaction/info_window.jsp"/>
<form method="post" action="<c:url value='/chapter03'/>">
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
<div id="blur"></div>
<audio id="bgm" preload="auto" src="/resources/bgm/ch03/bgm.mp3" loop="true" autobuffer></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch03/3_${scene}_${index}_${flag}.wav"></audio>
<input name="scene" type="hidden" value="${scene}"/>
<input name="index" type="hidden" value="${index}"/>
<input name="flag" 	type="hidden" value="${flag}"/>
<input name="choice" type="hidden" value="${choice}"/>
</form>
</body>
</html>
