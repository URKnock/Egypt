<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/ch03.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch03.js'/>"></script>
</head>
<body onload="init();">
<div id="background">
	<c:forEach var="i" begin="1" end="5">
		<c:if test="${i ne 3}">
			<img src="<c:url value='/resources/background/ch03/3_0${i}.png'/>"/>
		</c:if>
	</c:forEach>
	<c:forEach var="i" begin="1" end="4">
		<div class="canopic">
			<img id="ca${i}_0" src="<c:url value='/resources/background/ch03/k_00.png'/>"/>
			<img id="ca${i}_1" src="<c:url value='/resources/background/ch03/k_0${i}.png'/>"/>
		</div>
	</c:forEach>
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
</form>
</body>
</html>
