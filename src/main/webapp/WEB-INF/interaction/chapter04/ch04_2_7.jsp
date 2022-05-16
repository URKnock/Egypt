<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/getItem.css'/>" rel="stylesheet" type="text/css"/>

<style>
	#interact .animal:nth-of-type(5) { bottom: 36%; height: 15.27%; left: 51%; display: none;}
	#interact .animal:nth-of-type(6) { bottom: 36%; height: 20.09%;}
	
	#line { height: 02.31%; bottom: 45%; left: 50%; transform: translate(-13.5vh, -4vh); }
	
	.item { height: 05.92%; bottom: 66%; left: 13vh; }
	@keyframes getItem {
	    from { bottom: 50%; left: 43%; }
	    to {  bottom: 66%; left: 13vh; }
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/getItem.js'/>" type="text/javascript"></script>
<script defer>
	effectName = "cut1";
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
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_5_victim2.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_6_in.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/anubis_1.webp'/>">
	
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_11.png'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_9.png'/>">
	
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
	
	<div class="spot1" id="circle" style="bottom: 46%; left: 50%; transform: translate(-17vh, 0);"></div>
	<div class="spot2" id="circle" style="bottom: 47%; left: 50%; transform: translate(-9vh, 0);"></div>
	<img id="line" src="<c:url value='/resources/object/ch04/4_4_19.png'/>">
	
	<img class="item" src="<c:url value='/resources/object/ch04/4_4_10.png'/>">
</div>