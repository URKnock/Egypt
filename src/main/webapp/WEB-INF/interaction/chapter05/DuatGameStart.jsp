<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameStart.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameStart.js'/>"></script>
<div id="background">
</div>
<body onload="init(); interaction();">

<div id="characters">
	<div id="character">
		<img class="boat" src="<c:url value='/resources/object/ch05/배.png'/>">	
		<img class=	"saja" src="<c:url value='/resources/character/ch05/숨숴사자_좌(71).webp'/>">
		<img class=	"la" src="<c:url value='/resources/character/ch05/숨셔라(33).webp'/>">
	</div>
</div>
<div id="crocs">
	<img class="crocs1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/duat_wind.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>
</body>