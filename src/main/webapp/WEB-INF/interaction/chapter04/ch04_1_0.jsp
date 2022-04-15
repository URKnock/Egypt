<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_1.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/ch04_1_0.css'/>" rel="stylesheet" type="text/css"/>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/openMouse.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
	body.onload = function() { setTimeout(init_pese, 3000); };
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<div id="bg">
		<img class="background" src="<c:url value='/resources/background/ch04/4_2_1.png'/>">
	</div>
	<!-- Character -->
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_4.webp'/>">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_3.webp'/>">
	<img class="character" src="<c:url value='/resources/character/ch04/4_11.png'/>">
	
	<img class="motion" src="<c:url value='/resources/webp/ch04/servant_4_1.webp'/>">
	
	<img id="active" onclick="tap_tool(this)" class="object" src="<c:url value='/resources/object/ch04/4_3_2.png'/>">
	
	<div id="spots">
		<div id="spot" class="circle" style="top: -2vh; right: 15vh;"></div>
		<div id="spot" class="circle" style="top: 1vh; right: 18.5vh;"></div>
		<div id="spot" class="circle" style="top: 3vh; right: 17vh;"></div>
	</div>
	
	<img class="tool" src="<c:url value='/resources/object/ch04/4_3_1.png'/>"/>
</div>

<script>	
	setTimeout(function() {
		obj.style.animation = "2.4s objmoving 0s infinite"
	}, 3000);
</script>