<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<style>
	.knife {
		left: 10%;
		bottom: 62.1%;
		transform: rotate(0.107turn) translate(18.5vh, 0);
	}
	#active:hover{
		transform: rotate(0.107turn) scale(1.1) translate(16vh, -1vh);
	}
	#interact .animal { height: 30.09%; }
</style>
<script>
	var body = document.querySelector('body');
	body.onload = function() { 
			var knife = document.querySelector('#interact .knife');
			knife.onclick = function() { $("form").submit(); };
		};
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
	
	<!-- character -->
	<img class="character">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_15.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_6.png'/>">
	
	<!-- object -->
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_2.png'/>">
	<img class="object" src="<c:url value='/resources/object/ch04/4_4_3.png'/>">
	
	<img class="knife" id="active" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
</div>