<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_3.css'/>" rel="stylesheet" type="text/css"/>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_4_5.png'/>">
	<div id="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_2.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_6.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_7.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_8.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_4_9.png'/>">
	</div>
	
	<!-- character -->
	<img class="osiris" src="<c:url value='/resources/webp/ch04/osiris_motion.webp'/>">
	
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_7_nothing.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_8_nothing.webp'/>">

	<img class="victim1" src="<c:url value='/resources/object/ch04/4_4_16.png'/>">
	<img class="victim2" src="<c:url value='/resources/object/ch04/4_4_7.png'/>">
</div>

<script>
	var osiris = document.querySelector('.osiris');
	if(${index} == 1) {
		setTimeout(function() {
			osiris.src = "resources/webp/ch04/osiris.webp";
		}, 2400);
	}
	else {
		osiris.src = "resources/webp/ch04/osiris_talk.webp";
	}
	
</script>