<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='/resources/js/interaction/ch04/ch04_1.js'/>" type="text/javascript"></script>
	
<link href="<c:url value='/resources/css/interaction/ch04/ch04_1.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#active {
		filter: drop-shadow(0px 0px 0.5vw yellow);
	}
	#active:hover {
		transform: scale(1.1);
	}
	#active:active {
		transform: scale(1.0);
	}
</style>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_4.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_3.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">

	<!-- object -->
	<img class="object" src="<c:url value='/resources/Character/ch04/4_1.png'/>">
	<img class="object" src="<c:url value='/resources/Character/ch04/4_2.png'/>">
	<img class="object" src="<c:url value='/resources/Character/ch04/4_3.png'/>">
	<img class="object" src="<c:url value='/resources/Character/ch04/4_4.png'/>">
	<img class="object" src="<c:url value='/resources/Character/ch04/4_5.png'/>">
	
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_1.png'/>">
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_2.png'/>">
	<img class="object" src="<c:url value='/resources/object/ch04/4_1_3.png'/>">
	
	<div class="guide" align="center">마우스를 클릭하여 주변을 둘러보세요</div>
	
	<jsp:include page="../info_window.jsp"/>
</div>
