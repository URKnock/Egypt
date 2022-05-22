<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_1.css'/>" rel="stylesheet" type="text/css"/>  


<script defer src="<c:url value='/resources/js/interaction/ch07/question.js'/>" type="text/javascript"></script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_1_2.jpg'/>">
	
	<div class="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_2_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_2_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_1_4.png'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<img class="god" src="<c:url value='/resources/webp/ch07/42_${questN}_talk.webp'/>">
	
	<!-- 영상 -->
	<video src="<c:url value='/resources/webp/ch07/fault_${questN}.mp4'/>" loop autoplay muted></video>
</div>

<script>
	var body = document.querySelector('body');
	var god = document.querySelector('.god');
	var video = document.querySelector('#interact video');
	var bgm = document.querySelector('#bgm');
	body.onload = function() { 
		video.style.height = "62.5vh";
		console.log("부정고백 time~"); 
		bgm.src = "resources/bgm/8_falseconfession.mp3";
		setSomething();
		$("#voice").bind("ended", function() {
			god.src =  "resources/webp/ch07/42_${questN}.webp";
		});
	};
</script>