<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='../../resources/js/ch11_3.js'/>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch11/ch11_2.css'/>"/>

<audio id="waveLoop" preload="auto" src="/resources/bgm/ch11/wave.mp3" loop="true" autobuffer></audio>

<div id="interact" onload="init();">
	<img id="arrow_pre" onClick="location.href='../chapter11part2'" class="pikachu" src="<c:url value='/resources/object/ch11/arrow_pre.png'/>"/>
	<img id="ground" style="opacity:0" src="<c:url value='/resources/object/ch11/3층_땅.png'/>"/>
	<img id="devil2" class="select pikachu" src="<c:url value='/resources/character/ch11/3층_악마1.webp'/>"/>
	<img id="human" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
</div>

<script>
		$('#background').css('background-image', "url('resources/background/ch11/ch11_bg_3.webp')");
</script>