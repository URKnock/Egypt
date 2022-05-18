<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<style>
	form {
		cursor: default !important;
	}
	#interact .animal { 
		height: 58.98%; z-index: 3;
		animation: 0.5s put;
		animation-timing-function: ease-out;
	}
	@keyframes put {
		0% { bottom: 40%; }
		90% { bottom: 35%; }
		100% { bottom: 36%; }
	}
</style>

<script defer src="<c:url value='/resources/js/interaction/ch04/getItem.js'/>" type="text/javascript"></script>
<script defer>
	var body = document.querySelector('body');
	body.style.cursor = "none";
	var knife = document.querySelector('.knife');
	
	body.onload = function() { 
		init();
		setSound();
		body.addEventListener('mousemove', follow_mouse);
		
		var anubis = document.querySelector('#anubis');
		$("#voice").bind("ended", function() {
			anubis.src = "resources/webp/ch04/anubis_1.webp";
		});
	};

	function follow_mouse( event ) {
		const x = event.clientX - (knife.clientWidth*0.1);
		const y = event.clientY - (knife.clientHeight*1.1);
			
		knife.style.left = x + 'px';
		knife.style.top = y + 'px';
	}
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
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_6_victim1.webp'/>">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_1_talk.webp'/>">
	
	<img class="animal" src="<c:url value='/resources/webp/ch04/animal_3.webp'/>">
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
</div>