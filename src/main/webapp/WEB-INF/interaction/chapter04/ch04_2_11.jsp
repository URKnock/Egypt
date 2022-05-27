<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>

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
	<img id="servant1" class="character" src="<c:url value='/resources/webp/ch04/servant_5_victim2.webp'/>">
	<img id="servant2" class="character" src="<c:url value='/resources/webp/ch04/servant_6_victim2.webp'/>">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_1_motion.webp'/>">
</div>

<script defer>
	var body = document.querySelector('body');
	var anubis = document.querySelector('#anubis');
	var servant1 = document.querySelector('#servant1');
	var servant2 = document.querySelector('#servant2');
	
	body.onload = function() { 
		setSomething();
		setTimeout(function(){
			anubis.src = "resources/webp/ch04/anubis_1_talk.webp";
			servant1.src = "resources/webp/ch04/servant_5_out.webp";
			servant2.src = "resources/webp/ch04/servant_6_out.webp";
		}, 2400);
		$("#voice").bind("ended", function() {
			anubis.src = "resources/webp/ch04/anubis_1.webp";
			setTimeout(next, 500);
		});
	};
	
	function next() { $("form").submit(); }
</script>