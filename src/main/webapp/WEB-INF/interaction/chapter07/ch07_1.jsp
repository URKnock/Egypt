<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_1.css'/>" rel="stylesheet" type="text/css"/>  
<script defer src="<c:url value='/resources/js/interaction/ch07/ch07_1.js'/>" type="text/javascript"></script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_2.png'/>">
	
	<div class="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_0_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_1_4.png'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<c:choose>
		<c:when test="${scene eq 3}">
			<img class="god" src="<c:url value='/resources/webp/ch07/42_1.webp'/>">
		</c:when>
		<c:otherwise>
			<img class="god" src="<c:url value='/resources/webp/ch07/42_10.webp'/>">
		</c:otherwise>
	</c:choose>	
</div>


<c:if test="${scene eq '5'}">
	<script defer>
		var body = document.querySelector('body');
		body.onload = function() {
			init();
			$("input[name=scene]").val("6");
			$("input[name=index]").val("0");
		}
	</script>
</c:if>
