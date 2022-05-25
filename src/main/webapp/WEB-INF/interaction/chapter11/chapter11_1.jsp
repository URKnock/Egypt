<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='../../resources/js/ch11.js'/>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch11/ch11_1.css'/>"/>

<audio id="boilLoop" preload="auto" src="/resources/bgm/ch11/boil.mp3" loop="true" autobuffer></audio>
<audio id="fireLoop" preload="auto" src="/resources/bgm/ch11/fire.mp3" loop="true" autobuffer></audio>

<div id="interact" onload="init();">
	<img id="arrow" style="z-index: 10;" class="pikachu"
		onClick="location.href='../chapter11part2'" src="<c:url value='/resources/object/ch11/arrow.png'/>" />
	<img id="monkeys" style="z-index: 3;" src="<c:url value='/resources/object/ch11/1층_원숭이탕.webp'/>"/>
	<img id="hellFire" style="z-index: 1;" src="<c:url value='/resources/object/ch11/1층_땅불.webp'/>"/>
	<img id="ground" style="z-index: 2;" src="<c:url value='/resources/object/ch11/1층_땅.png'/>"/>
	<img id="ammut" style="z-index: 3;" class="select pikachu" src="<c:url value='/resources/character/ch11/1층_암무트1.webp'/>"/>
	<img id="human" style="z-index: 2;" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
</div>