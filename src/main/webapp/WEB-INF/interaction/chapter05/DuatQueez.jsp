<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatQueez.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatQueez.js'/>"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<div id="keeper">
	<div id="keeper">
	<img id="dansang" src="<c:url value='/resources/character/ch05/단상.png'/>"/>
	<img id="keeper1" src="<c:url value='/resources/character/ch05/토끼전체.png'/>"/>
 	<img id="keeper12" src="<c:url value='/resources/character/ch05/뱀전체.png'/>"/> 
	<img id="keeper2" src="<c:url value='/resources/character/ch05/뱀전체.png'/>"/>
	<img id="keeper3" src="<c:url value='/resources/character/ch05/소전체.png'/>"/>
	</div>
</div>
<div id="menu">
		<img id="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img id="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img id="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img id="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>	
</div>
<div id="characters">
	<div id="character">
		<img class="mainC_s" src="<c:url value='/resources/character/ch05/관문사자라배(60).webp'/>">		
	</div>
</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/5_duat_gateway.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>