<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/ch04_2_9.css'/>" rel="stylesheet" type="text/css"/>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer>
	var body = document.querySelector('body');
	body.onload = function() { setTimeout(next, 6500); };
	
	function next() { $("form").submit(); }
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
	
	<!-- object -->
	<img class="character" src="<c:url value='/resources/Character/ch04/4_20.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_17.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_6.png'/>">
	
	<img class="character" src="<c:url value='/resources/Character/ch04/4_21.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_18.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_7.png'/>">
</div>