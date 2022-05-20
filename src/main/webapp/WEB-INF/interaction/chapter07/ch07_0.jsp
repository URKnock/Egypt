<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_0.css'/>" rel="stylesheet" type="text/css"/>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_0_2.jpg'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_0_3.png'/>">
	
	<div class="bg">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower1.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower2.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower3.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/45god.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/balance.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/feather.webp'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/character/ch07/6_1.png'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/anubis_talk.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/horus.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/thoth.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/ammut.webp'/>">
</div>

<script defer>
	var body = document.querySelector('body');
	var anubis = document.querySelector('#interact .character:nth-of-type(4)');
	body.onload = function() { 
		console.log("아아"); setSomething(); 
		$("#voice").bind("ended", function() {
			anubis.src =  "resources/webp/ch07/anubis.webp";
		});
	};
</script>