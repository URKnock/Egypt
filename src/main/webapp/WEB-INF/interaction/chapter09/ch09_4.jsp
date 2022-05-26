<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/interaction/ch09/ch09_4.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch09/ch09_4.js'/>"></script> 
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
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
	<a href="<c:url value='/chapter09_5' />" >
	<img id="next" src="<c:url value='/resources/UI/Menu/화살표next.png'/>"/>
	</a>
	</div>
	<div class="pre">
	<a href="<c:url value='/chapter09_3' />" >
	<img id="pre" src="<c:url value='/resources/UI/Menu/화살표pre.png'/>"/>
	</a>
	</div>
</div>
<video id ="mp4" autoplay loop muted>
	<source type="video/mp4" src="<c:url value='/resources/background/ch09/천국2층2.mp4'/>">
</video>
<div id="characters">
	<div id="character">
	<img id="c1" src="<c:url value='/resources/character/ch09/천국 사자 기본.webp'/>"/>
	<img id="c2" src="<c:url value='/resources/character/ch09/2층 왜가리 노예.webp'/>"/>
	<img id="c3" src="<c:url value='/resources/character/ch09/2층 왜가리1.webp'/>"/>
	<img id="c4" src="<c:url value='/resources/character/ch09/2층 영혼의 양식.webp'/>"/>
	</div>
</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch09/heaven.mp3'/>"></audio>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch09/pond.mp3'/>"></audio>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch09/valley.mp3'/>"></audio>
<audio id="splash" src="<c:url value='/resources/bgm/ch09/splash.mp3'/>"></audio>
<audio id="voice" preload="auto" src=""></audio>
<audio id="effect" preload="auto" src=""></audio>
</body>
<jsp:include page="../help.jsp"/>
<jsp:include page="../setting.jsp"/>
<jsp:include page="../info_window.jsp"/>
<jsp:include page="../shabti_new.jsp"/>
</html>
