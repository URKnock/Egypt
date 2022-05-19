<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_3.css'/>" rel="stylesheet" type="text/css"/>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_3_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_3_3.png'/>">
	
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_4.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_5.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_6.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_7.png'/>">
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/character/ch07/6_1.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_17.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_19.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_20.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_21.png'/>">
</div>

<c:if test="${scene eq 11 && index eq 0}">
	<script> 
		var body = document.querySelector('body');
		body.onload = function() { setSomething(); } 
	</script>
</c:if>
<c:if test="${scene eq 12 && index eq 0}">
	<script> 
		var body = document.querySelector('body');
		body.onload = function() { init();
			var next = document.querySelector('#nextButton');
			next.style.position = "absolute";
			next.style.top = "48%";
			next.style.left = "735px";
		} 
	</script>
</c:if>
<c:if test="${scene eq 13 && index eq 0}">
	<script> 
		var body = document.querySelector('body');
		body.onload = function() { init();
			var next = document.querySelector('#nextButton');
			next.style.position = "absolute";
			next.style.top = "48%";
			next.style.left = "857px";
		} 
	</script>
</c:if>