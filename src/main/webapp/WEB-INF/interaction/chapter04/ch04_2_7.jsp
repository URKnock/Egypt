<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/getItem.css'/>" rel="stylesheet" type="text/css"/>

<style>
	#interact .character:nth-of-type(2) {
		display: block;
		height: 28.61%; left: 1%;
		animation: 1s walk;
		z-index: 3;
	}
	@keyframes walk {
		0% { left: -20%; }
		100% { left: 1%;}
	}
		
	#interact .character:nth-of-type(3) { height: 34.3%; }
	#interact .animal:nth-of-type(5) { bottom: 36%; height: 15.27%; left: 50.8%; display: none;}
	#interact .animal:nth-of-type(6) { bottom: 36%; height: 20.09%;}
	
	#line { height: 02.31%; bottom: 45%; left: 50%; transform: translate(-13.5vh, -4vh); }
	
	.item { height: 05.92%; bottom: 53.25%; left: 7%; }
	@keyframes getItem {
	    from { bottom: 50%; left: 43%; }
	    to { bottom: 53.25%; left: 7%; }
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/getItem.js'/>" type="text/javascript"></script>
<script defer>
	var body = document.querySelector('body');
	body.onload = function() { init_item(); };
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
	
	<!-- object -->
	<img class="character" src="<c:url value='/resources/Character/ch04/4_15.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_17.png'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/4_3_1.webp'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_11.png'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_9.png'/>">
	
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
	
	<div class="spot1" id="circle" style="bottom: 46%; left: 50%; transform: translate(-17vh, 0);"></div>
	<div class="spot2" id="circle" style="bottom: 47%; left: 50%; transform: translate(-9vh, 0);"></div>
	<img id="line" src="<c:url value='/resources/object/ch04/4_4_19.png'/>">
	
	<img class="item" src="<c:url value='/resources/object/ch04/4_4_10.png'/>">
</div>