<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='../../resources/js/ch11_2.js'/>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch11/ch11_2.css'/>"/>

<audio id="waveLoop" preload="auto" src="/resources/bgm/ch11/wave_boil.mp3" loop="true" autobuffer></audio>
<audio id="fireLoop" preload="auto" src="/resources/bgm/ch11/fire.mp3" loop="true" autobuffer></audio>

<div id="interact" onload="init();">
	<img id="platform" src="<c:url value='/resources/object/ch11/2층_단상.png'/>"/>
	<img id="hellFireFront" style="z-index: 6;" src="<c:url value='/resources/object/ch11/2층_땅불1.webp'/>"/>
	<img id="hellFireBack" style="z-index: 1;" src="<c:url value='/resources/object/ch11/2층_땅불2.webp'/>"/>
	<img id="arrow" onClick="location.href='../chapter11part3'" class="pikachu" src="<c:url value='/resources/object/ch11/arrow.png'/>"/>
	<img id="ground" style="z-index: 7;" src="<c:url value='/resources/object/ch11/2층_땅.png'/>"/>
	<img id="pot_back" style="z-index: 2;" src="<c:url value='/resources/object/ch11/2층_항아리안.png'/>"/>
	<img id="pot_inner" style="z-index: 4;" src="<c:url value='/resources/object/ch11/2층_항아리탕.webp'/>"/>
	<img id="pot_frame" style="z-index: 5;" src="<c:url value='/resources/object/ch11/2층_항아리밖.png'/>"/>
	<img id="devil" style="z-index: 5;" class="select pikachu" src="<c:url value='/resources/character/ch11/2층_악마1.webp'/>"/>
	<img id="arrow_pre" onClick="location.href='../chapter11'" class="pikachu" src="<c:url value='/resources/object/ch11/arrow_pre.png'/>"/>
	<img id="pot_dead" style="z-index: 3;" src="<c:url value='/resources/object/ch11/2층_항아리사자1.webp'/>"/>
	<img id="human" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
</div>

<script>
		$('#background').css('background-image', "url('resources/background/ch11/ch11_bg_2.png')");
</script>