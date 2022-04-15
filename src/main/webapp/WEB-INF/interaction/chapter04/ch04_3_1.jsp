<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_3.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .item { height: 13.24%; left: 39vh; }
	
	#interact .spot {
		transform: translate(-18vh, 0);
	}
	#interact .circle {
		transform: translate(-20vh, 0);
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/toss.js'/>" type="text/javascript"></script>
<script defer>
	var body = document.querySelector('body');
	body.onload = function() { init_toss(); };
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<div id="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_6.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_7.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_8.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_9.png'/>">
	</div>
	
	<!-- character -->
	<img class="osiris" src="<c:url value='/resources/webp/ch04/osiris_motion.webp'/>">

	<img class="character" src="<c:url value='/resources/webp/ch04/servant_7_nothing.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_8_nothing.webp'/>">
	
	<img class="item" id="active" src="<c:url value='/resources/object/ch04/4_4_7.png'/>">
	
	<div class="spot"></div>
	<div class="circle"></div>
	
	<img class="victim1" src="<c:url value='/resources/object/ch04/4_4_16.png'/>">
</div>

<script>	
	var osiris = document.querySelector('.osiris');
	
	setTimeout(function() {
		osiris.src = "resources/webp/ch04/osiris.webp";
	}, 2400);
</script>