<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_3.css'/>" rel="stylesheet" type="text/css"/>
<script> 
	var chapter = 7;
	var info_total = 4;
</script>
<c:if test="${scene eq 11}">
	<script> 
		info_total = 0;
	</script>
</c:if>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch07/info_tap_3.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
	body.onload = function() { 
		console.log("info time~"); setSomething();
//		$("#voice").bind("ended", function() {
//			if(obj[1].src != webp[1] && obj[1].src != png[1])
//				obj[1].src =  "resources/webp/ch07/anubis.webp";
//		});
	};
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_3_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_3_3.png'/>">
	
	<img id="active" onclick="tap_info(this, 10)" class="bgObj" src="<c:url value='/resources/background/ch07/7_3_4.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_5.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_6.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_7.png'/>">
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/character/ch07/6_1.png'/>">
	<img class="character" src="<c:url value='/resources/character/ch07/6_17.png'/>">
	<img id="active" onclick="tap_info(this, 7)" class="character" src="<c:url value='/resources/character/ch07/6_19.png'/>">
	<img id="active" onclick="tap_info(this, 8)" class="character" src="<c:url value='/resources/character/ch07/6_20.png'/>">
	<img id="active" onclick="tap_info(this, 9)" class="character" src="<c:url value='/resources/character/ch07/6_21.png'/>">

	<div class="guide">
		<img src="<c:url value='/resources/UI/Info/guide.png'/>">
		<div>마우스를 클릭하여 주변을 둘러보세요.</div>
	</div>
	<jsp:include page="../info_window.jsp"/>
</div>