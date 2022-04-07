<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<style>
	.knife {
		left: 34vh;
		bottom: 70%;
	}
	#active:hover{
		transform: scale(1.1);
	}
	#interact .animal {
		height: 31.11%;
		bottom: 35.5%;
	}
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
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_5.webp'/>">
	<img class="character">
	<img class="character" src="<c:url value='/resources/webp/ch04/anubis_1.webp'/>">

	<!-- object -->
	<img class="animal" src="<c:url value='/resources/webp/ch04/animal_1.webp'/>">
	
	<img class="knife" id="active" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
</div>