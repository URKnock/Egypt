<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_0.css'/>" rel="stylesheet" type="text/css"/>
<script>
	if(${scene} == 3) {
		var body = document.querySelector('body');
		body.onload = function() { console.log("Selection time~"); };
	}
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
	<img class="pontiff" src="<c:url value='/resources/webp/ch04/4_1_1.webp'/>">
	<img class="pontiff" src="<c:url value='/resources/webp/ch04/4_6_1.webp'/>">
	<img class="pontiff" src="<c:url value='/resources/webp/ch04/4_7_1.webp'/>">
	
	<img class="character" id="anubis" src="<c:url value='/resources/webp/ch04/4_3_4.webp'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_4.png'/>">
	
	<!-- object -->
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_1.png'/>">
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_2.png'/>">
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_3.png'/>">
</div>
