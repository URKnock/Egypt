<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .animal:nth-of-type(5) { height: 24.16%; z-index: 3; }	
	#interact .animal:nth-of-type(6) { height: 20.09%; display: none; }
	
	#active:hover {
		transform: scale(1.1) translate(-50%, 0%);
	}
	#active:active {
		transform: scale(1.0) translate(-50%, 0%);
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/kill.js'/>" type="text/javascript"></script>
<script defer>
	effectName = "duck";
	var body = document.querySelector('body');
	body.onload = function() { init_kill(); setSound();};
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<div id="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_10.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_7.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_9.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_6.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_4.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_5.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_7.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_8.webp'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_5_victim2.webp'/>">
	<img class="character">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_1_talk.webp'/>">
	
	<!-- animal -->
	<img class="animal" id="active" src="<c:url value='/resources/webp/ch04/animal_2.webp'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_9.png'/>">
	
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
</div>