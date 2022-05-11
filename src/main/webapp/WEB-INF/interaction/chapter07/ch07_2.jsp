<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_2.css'/>" rel="stylesheet" type="text/css"/>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_3.png'/>">
	
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_2_4.png'/>">

	<!-- character -->
	<img class="character" src="<c:url value='/resources/character/ch07/6_1.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_4.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_5.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_6.png'/>">
	<c:if test="${scene eq 4 and index eq 1}">
		<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
		<script defer src="<c:url value='/resources/js/interaction/ch04/toss.js'/>" type="text/javascript"></script>
		<script defer>
			var body = document.querySelector('body');
			body.onload = function() { init_toss(); };
		</script>

		<img class="item" id="active"  src="<c:url value='/resources/character/ch07/6_6.png'/>">
		<div class="spot"></div>
		<div class="circle"></div>
	</c:if>
</div>