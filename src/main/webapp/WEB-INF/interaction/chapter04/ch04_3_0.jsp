<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_3.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .item { display: none; height: 23.98%; left: 22vh; }

	#interact .circle {
		transform: translate(-5vh, 0);
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
	<img class="osiris" src="<c:url value='/resources/webp/ch04/osiris.webp'/>">

	<img class="character" src="<c:url value='/resources/webp/ch04/servant_7_up.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_8_up.webp'/>">
	
	<img class="item" id="active" src="<c:url value='/resources/object/ch04/4_4_16.png'/>">
	
	<div class="spot"></div>
	<div class="circle"></div>
</div>

<script>	
	var servant7 = document.querySelector('#interact .character:nth-of-type(3)');
	var servant8 = document.querySelector('#interact .character:nth-of-type(4)');
	var item = document.querySelector('.item');
	
	setTimeout(function() {
		servant7.src = "resources/webp/ch04/servant_7.webp";
		servant8.src = "resources/webp/ch04/servant_8_nothing.webp";
		
		item.style.display = "block";
	}, 3150);
</script>