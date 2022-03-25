<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%request.setAttribute("choice", 0); %>
<link href="<c:url value='/resources/css/interaction/ch04/ch04_0.css'/>" rel="stylesheet" type="text/css"/>

<script> 
	var chapter = 4;
	var info_total = 6;
</script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/info_tap.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
	body.onload = function() { console.log("info time~"); };
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
	<img id="active" onclick="tap_info(this, 0)" class="pontiff"  src="<c:url value='/resources/webp/ch04/4_1_1.webp'/>">
	<img id="active" onclick="tap_info(this, 1)" class="pontiff"  src="<c:url value='/resources/webp/ch04/4_6_1.webp'/>">
	<img id="active" onclick="tap_info(this, 2)" class="pontiff"  src="<c:url value='/resources/webp/ch04/4_7_1.webp'/>">
	
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/4_3_2.webp'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_4.png'/>">
	
	<!-- object -->
	<img id="active" onclick="tap_info(this, 3)" class="object"  src="<c:url value='/resources/object/ch04/4_1_1.png'/>">
	<img id="active" onclick="tap_info(this, 4)" class="object"  src="<c:url value='/resources/object/ch04/4_1_2.png'/>">
	<img id="active" onclick="tap_info(this, 5)" class="object"  src="<c:url value='/resources/object/ch04/4_1_3.png'/>">
	
	<div class="guide" align="center">마우스를 클릭하여 주변을 둘러보세요</div>
	<jsp:include page="../info_window.jsp"/>
</div>
