<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/ch09.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch09/ch09_1.js'/>"></script>
<script> $(function(){ init(); }); </script> 
</head>
<body>
<div id="background">
	<div id="menu">
		<img id="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img id="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img id="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img id="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>
	<div class="next">
<a href="<c:url value='/chapter09_2' />" data-transition="fade">
	<img id="next" src="<c:url value='/resources/UI/Menu/화살표next.png'/>"/>
	</a>
	</div>
</div>
<div>
<video id ="mp4" autoplay loop muted>
	<source type="video/mp4" src="<c:url value='/resources/background/ch09/9_0_1.mp4'/>">
</video>
</div>
<div id="keeper">
	<div id="keeper">
	<img id="keepers" src="<c:url value='/resources/character/ch09/1층 관문신1.webp'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
	<img id="c1" src="<c:url value='/resources/character/ch09/천국 사자 기본.webp'/>"/>
	<img id="c2" src="<c:url value='/resources/character/ch09/1층 공물 노예1.webp'/>"/>
	<img id="c3" src="<c:url value='/resources/character/ch09/1층 공물1.webp'/>"/>
	</div>
	
	
</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<!-- <audio id="bgm" preload="auto" src="/resources/bgm/ch09/heaven.mp3" loop="true" autobuffer></audio> -->
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch09/heaven.mp3'/>"></audio>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch09/pond.mp3'/>"></audio>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch09/bird.mp3'/>"></audio>
<jsp:include page="interaction/info_window.jsp"/>
<div id="page">
	<c:if test="${page ne null}">
		<jsp:include page="./interaction/chapter09/${page}"/>
	</c:if>
</div>
</body>
</html>
