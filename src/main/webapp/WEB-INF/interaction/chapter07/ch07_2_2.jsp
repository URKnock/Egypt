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
	<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch07/anubis2.webp'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_5.png'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/ammut.webp'/>">
	<c:if test="${scene eq 6 and index eq 2}">
		<jsp:include page="toss.jsp"/>
	</c:if>
</div>

<c:if test="${index eq 1 || index eq 2}">
	<script>
		var anubis = document.querySelector('#anubis');
		anubis.src = "resources/webp/ch07/anubis2_talk.webp";
		
		$("#voice").bind("ended", function() {
			anubis.src =  "resources/webp/ch07/anubis2.webp";
		});
	</script>
</c:if>
<c:if test="${index eq 3}">
	<script>
		// 토트 말함
	</script>
</c:if>
<c:if test="${index eq 4 || index eq 5 || index eq 0}">
	<script>
		// 사자 말함
	</script>
</c:if>
