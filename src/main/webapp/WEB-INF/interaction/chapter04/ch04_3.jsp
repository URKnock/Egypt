<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_3.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .circle {
		transform: translate(-5vh, 0);
	}
</style>

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
	<img class="osiris" src="<c:url value='/resources/webp/ch04/osiris.webp'/>">

	<img class="character" src="<c:url value='/resources/webp/ch04/servant_7_nothing.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_8_nothing.webp'/>">
	
	<img class="item1" id="active" src="<c:url value='/resources/object/ch04/4_4_16.png'/>">
	<img class="item2" id="active" src="<c:url value='/resources/object/ch04/4_4_7.png'/>">
	
	<div class="spot"></div>
	<div class="circle"></div>
	
	<img class="victim1" src="<c:url value='/resources/object/ch04/4_4_16.png'/>">
	<img class="victim2" src="<c:url value='/resources/object/ch04/4_4_7.png'/>">
</div>

<script src="<c:url value='/resources/js/interaction/ch04/toss.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
	body.onload = function() { setSomething(); init_toss(); };
</script>