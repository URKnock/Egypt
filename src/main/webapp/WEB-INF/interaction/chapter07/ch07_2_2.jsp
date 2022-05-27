<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch07/ch07_2.css'/>" rel="stylesheet" type="text/css"/>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_3.png'/>">
	
	<img class="balance" src="<c:url value='/resources/object/ch07/balance_after.png'/>">

	<!-- character -->
	<img id="men" class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch07/anubis2.webp'/>">
	<img id="thoth" class="character" src="<c:url value='/resources/webp/ch07/thoth2.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/ammut.webp'/>">
	<img id="horus">
	<c:if test="${scene eq 6 and index eq 2}">
		<jsp:include page="toss.jsp"/>
	</c:if>
</div>

<c:if test="${index eq 0 || index eq 1}">
	<c:if test="${scene eq 7}">
	<script>
		// 아누비스 말함
		var anubis = document.querySelector('#anubis');
		anubis.src = "resources/webp/ch07/anubis2_talk.webp";
		
		$("#voice").bind("ended", function() {
			anubis.src =  "resources/webp/ch07/anubis2.webp";
		});
	</script>
	</c:if>
</c:if>
<c:if test="${index eq 2}">
	<script>
		// 토트 말함
		var thoth = document.querySelector('#thoth');
		thoth.src = "resources/webp/ch07/thoth2_talk.webp";
		
		$("#voice").bind("ended", function() {
			thoth.src =  "resources/webp/ch07/thoth2.webp";
		});
		
		var body = document.querySelector('body');
		body.onload = function() { 
			init();
			setNextButton(44, 640);
		}
	</script>
</c:if>
<c:if test="${index eq 3}">
	<script>
		var men = document.querySelector('#men');
		men.src = "resources/webp/ch07/men_confess1.webp";
		setTimeout(function() { 
			men.src = "resources/webp/ch07/men_confess2.webp"; }
		, 1000);
	</script>
</c:if>
<c:if test="${index eq 4}">
	<script>
		var men = document.querySelector('#men');
		men.src = "resources/webp/ch07/men_confess2.webp";
	</script>
</c:if>
<c:if test="${scene eq 8 && index eq 0}">
	<script>
		var men = document.querySelector('#men');
		men.src = "resources/webp/ch07/men_confess2.webp";
		setTimeout(function() { 
			men.src = "resources/webp/ch07/men_confess3.webp"; }
		, 2000);
		var horus = document.querySelector('#horus');
		horus.src = "resources/webp/ch07/horus2_walk.webp";
		horus.style.animation = "walk 3.5s";
		setTimeout(function() { 
			horus.src = "resources/webp/ch07/horus2.webp"; }
		, 2500);
	</script>
</c:if>

<c:if test="${scene eq 9}">
	<script>
		// 사자 말함
		var horus = document.querySelector('#horus');
		horus.src = "resources/webp/ch07/horus2_talk.webp";
		$("#voice").bind("ended", function() {
			horus.src =  "resources/webp/ch07/horus2.webp";
		});
	</script>
</c:if>