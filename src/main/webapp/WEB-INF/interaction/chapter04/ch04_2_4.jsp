<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/getItem.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .animal { height: 23.79%; bottom: 33.8%; }
	#interact .animal:nth-of-type(5) { display: none; }
	
	#line { height: 18.14%; bottom: 28%; left: 50%; transform: translate(0vh, -8vh); }
	.item { height: 05.74%; bottom: 67.5%; left: 41vh; }
	
	@keyframes getItem {
	    from { bottom: 33%; left: 49%; }
	    to { bottom: 67.5%; left: 41vh; }
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/getItem.js'/>" type="text/javascript"></script>
<script defer>
	effectName = "cut2";
	var body = document.querySelector('body');
	body.onload = function() { init_item(); setSound();};
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
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_5_victim1.webp'/>">
	<img class="character">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_1_talk.webp'/>">
	
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_4.png'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_3_1.png'/>">
	
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
	
	<div class="spot1" id="circle" style="bottom: 49%; left: 50%; transform: translate(-2.5vh, 0);"></div>
	<div class="spot2" id="circle" style="bottom: 32%; left: 50%; transform: translate(-2.5vh, 0);"></div>
	<img id="line" src="<c:url value='/resources/object/ch04/4_4_18.png'/>">
	
	<img class="item" src="<c:url value='/resources/object/ch04/4_4_6.png'/>">
</div>