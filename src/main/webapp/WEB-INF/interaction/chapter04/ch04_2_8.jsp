<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .character:nth-of-type(2) { display: block; height: 44.81%; left: 1%; }
	#interact .character:nth-of-type(3) { height: 34.3%; }
	
	#interact .animal:nth-of-type(5) { height: 58.98%; z-index: 3; }
	#interact .animal:nth-of-type(6) { display: none; height: 43.24%; }
	
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
	var body = document.querySelector('body');
	body.onload = function() { init_kill(); };
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<div id="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_11.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_7.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_10.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_6.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_4.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_5.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_8.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_9.png'/>">
	</div>
	
	<!-- object -->
	<img class="character" src="<c:url value='/resources/Character/ch04/4_19.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_17.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_6.png'/>">
	<img class="animal" id="active" src="<c:url value='/resources/object/ch04/4_4_12.png'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_13.png'/>">
	
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
</div>