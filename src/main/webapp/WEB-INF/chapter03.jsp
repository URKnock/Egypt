<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/info_window.css'/>">
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch03.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch03.js'/>"></script>
<script src="<c:url value='/resources/js/interaction/info_window.js'/>"></script>
</head>
<body onload="init();">
<div id="background">
	<c:forEach var="i" begin="1" end="3">
		<img src="<c:url value='/resources/background/ch03/3_0${i}.png'/>"/>
	</c:forEach>
	<img id="anunu" src="<c:url value='/resources/background/ch03/Anubis.gif'/>"/>
	<img src="<c:url value='/resources/background/ch03/test.webp'/>"/>

	<c:choose>
		<c:when test="${scene eq 8}">
			<c:forEach var="i" begin="1" end="4">
				<div class="canopic">
					<img id="ca${i}_0" src="<c:url value='/resources/background/ch03/k_00.png'/>" class="droppable"/>
					<img id="ca${i}_1" src="<c:url value='/resources/background/ch03/k_0${i}.png'/>" class="head"/>
				</div>
			</c:forEach>
		</c:when>
		<c:otherwise>
			<div class="canopic">
				<c:forEach var="i" begin="1" end="4">
					<img id="ca${i}" src="<c:url value='/resources/background/ch03/k_${i}.png'/>"/>
				</c:forEach>
			</div>
		</c:otherwise>
	</c:choose>
	<c:if test="${page ne null}">
		<jsp:include page="./interaction/chapter03/${page}"/>
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
<div id="window">
	<div class="infoImg"></div>
	<div class="infoText">
		<h3 class="name"></h3>
		<p class="content"></p>
	</div>
	<div class="close">X</div>
</div>
<form method="post" action="<c:url value='/chapter03'/>">
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
	<c:if test="${dialogue.choice ne null}">
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
</form>
</body>
</html>
