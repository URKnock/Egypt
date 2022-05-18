<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_0.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/ch04_0_2.css'/>" rel="stylesheet" type="text/css"/>

<script defer src="<c:url value='/resources/js/interaction/ch04/effect.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
	body.onload = function() { 
		var anubis = document.querySelector('#anubis');
		
		$("#voice").bind("ended", function() {
			anubis.src = "resources/webp/ch04/anubis_2.webp";
		});
		setSound();
		//nextButton = document.querySelector('#nextButton');
		//nextButton.style.display = "none";
	};
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_3.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">
	
	<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_6.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_7.png'/>">
	
	<!-- character -->
	<img id="active" onclick="tap_motion(this, 0)" class="pontiff" src="<c:url value='/resources/webp/ch04/servant_1.webp'/>">
	<img id="active" onclick="tap_motion(this, 1)" class="pontiff" src="<c:url value='/resources/webp/ch04/servant_2.webp'/>">
	<img class="pontiff" src="<c:url value='/resources/webp/ch04/servant_3.webp'/>">
	
	<img class="character" id="anubis" src="<c:url value='/resources/webp/ch04/anubis_2_talk.webp'/>">
	<img class="character" src="<c:url value='/resources/character/ch04/4_4.png'/>">
	
	<!-- object -->
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_1.png'/>">
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_2.png'/>">
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_3.png'/>">
	
	<img class="effect1" src="<c:url value='/resources/webp/ch04/effect2.webp'/>">
	<img class="effect2" src="<c:url value='/resources/webp/ch04/effect1.webp'/>">
	<img class="effect3" src="<c:url value='/resources/object/ch04/4_2_3.png'/>">
</div>
