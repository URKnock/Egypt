<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_2.css'/>" rel="stylesheet" type="text/css"/>
<script>
	var body = document.querySelector('body');
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_3.png'/>">
	
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_2_4.png'/>">

	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/anubis2.webp'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_5.png'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/ammut.webp'/>">
	<c:if test="${scene eq 6 and index eq 2}">
		<jsp:include page="toss.jsp"/>
	</c:if>
	<c:if test="${scene eq 7 and index eq 0}">
		<c:choose>
			<c:when test="${result eq 'chapter08'}">
				<script defer>
				body.onload = function() {
					init();
					$("input[name=scene]").val("7");
					$("input[name=index]").val("0");
				}
				</script>
			</c:when>
			<c:otherwise>
				<c:set var="scene" value="0"/>
				<c:set var="index" value="0"/>
				<script defer>
				body.onload = function() {
					$("#dialogue").click(function() {
						location.href = '/chapter10';
					});
				}
				</script>
			</c:otherwise>
		</c:choose>
	</c:if>
</div>