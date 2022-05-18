<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_1.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/ch04_1_0.css'/>" rel="stylesheet" type="text/css"/>

<script defer src="<c:url value='/resources/js/interaction/ch04/openMouse.js'/>" type="text/javascript"></script>


<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<div id="bg">
		<img class="background" src="<c:url value='/resources/background/ch04/4_2_1.png'/>">
	</div>
	<!-- Character -->
	<img id="servant" class="character">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_3_talk.webp'/>">
	<img class="character" src="<c:url value='/resources/character/ch04/4_11.png'/>">
	
	<img class="motion" src="<c:url value='/resources/webp/ch04/servant_4_1.webp'/>">
	
	<img id="active" onclick="tap_tool(this)" class="object">
	
	<div id="spots">
		<div id="spot" class="circle" style="top: -2vh; right: 17vh;"></div>
		<div id="spot" class="circle" style="top: 2vh; right: 21vh;"></div>
		<div id="spot" class="circle" style="top: 5vh; right: 19vh;"></div>
	</div>
	
	<img class="tool" src="<c:url value='/resources/object/ch04/4_3_1.png'/>"/>
</div>

<script>
	effectName = "Pesheskaf_touch";
	var body = document.querySelector('body');
	var servant = document.querySelector('#servant');
	var active = document.querySelector('#active');
	body.onload = function() { 
		setTimeout(init_pese, 3000); setSound();
		servant.src = "resources/webp/ch04/servant_4.webp";
		active.src = "resources/webp/ch04/pese.webp";
	};
</script>