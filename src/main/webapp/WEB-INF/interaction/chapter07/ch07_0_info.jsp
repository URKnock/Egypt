<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_0.css'/>" rel="stylesheet" type="text/css"/>

<script> 
	var chapter = 7;
	var info_total = 6;
</script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch07/info_tap.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
	body.onload = function() { console.log("info time~"); };
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_0_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_0_3.png'/>">
	
	<div class="bg">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower1.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower2.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower3.webp'/>">
		<img id="active" onclick="tap_info(this, 6)" class="bgObj" src="<c:url value='/resources/webp/ch07/45god.webp'/>">
		<img id="active" onclick="tap_info(this, 0)" class="bgObj" src="<c:url value='/resources/webp/ch07/balance.webp'/>">
		<img id="active" onclick="tap_info(this, 4)" class="bgObj" src="<c:url value='/resources/webp/ch07/feather.webp'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/character/ch07/6_1.png'/>">
	<img id="active" onclick="tap_info(this, 1)" class="character" src="<c:url value='/resources/webp/ch07/anubis.webp'/>">
	<img id="active" onclick="tap_info(this, 2)" class="character" src="<c:url value='/resources/webp/ch07/horus.webp'/>">
	<img id="active" onclick="tap_info(this, 3)"class="character" src="<c:url value='/resources/webp/ch07/thoth.webp'/>">
	<img id="active" onclick="tap_info(this, 5)" class="character" src="<c:url value='/resources/webp/ch07/ammut.webp'/>">

	<div class="guide">
		<img src="<c:url value='/resources/UI/Info/guide.png'/>">
		<div>마우스를 클릭하여 주변을 둘러보세요.</div>
	</div>
	<jsp:include page="../info_window.jsp"/>
</div>
