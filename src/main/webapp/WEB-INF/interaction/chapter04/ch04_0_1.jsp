<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%request.setAttribute("choice", 0); %>
<link href="<c:url value='/resources/css/interaction/ch04/ch04_0.css'/>" rel="stylesheet" type="text/css"/>

<script> 
	var chapter = 4;
	var info_total = 6;
</script>
<c:if test="${page eq null}">
	<script> info_total = 0; </script>
</c:if>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/info_tap.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
	body.onload = function() { 
		var anubis = document.querySelector('#anubis');
		
		$("#voice").bind("ended", function() {
			anubis.attr("src", "resources/webp/ch04/anubis_2.webp");
			setTimeout(function() { $("form").submit(); }, 2000);
		});
		setSound(); 
	};
</script>

<style>
	#visited:hover {
		transform: scale(1.1);
	}
	#visited:active {
		transform: scale(1.0);
	}
</style>


<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_3.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">
	
	<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_6.png'/>">
	<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_7.png'/>">
	
	<!-- character -->
	<img id="active" onclick="tap_info(this, 0)" class="pontiff"  src="<c:url value='/resources/webp/ch04/servant_1.webp'/>">
	<img id="active" onclick="tap_info(this, 1)" class="pontiff"  src="<c:url value='/resources/webp/ch04/servant_2.webp'/>">
	<img id="active" onclick="tap_info(this, 2)" class="pontiff"  src="<c:url value='/resources/webp/ch04/servant_3.webp'/>">
	
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_2_talk.webp'/>">
	<img class="character" src="<c:url value='/resources/character/ch04/4_4.png'/>">
	
	<!-- object -->
	<img id="active" onclick="tap_info(this, 3)" class="object"  src="<c:url value='/resources/object/ch04/4_1_1.png'/>">
	<img id="active" onclick="tap_info(this, 4)" class="object"  src="<c:url value='/resources/object/ch04/4_1_2.png'/>">
	<img id="active" onclick="tap_info(this, 5)" class="object"  src="<c:url value='/resources/object/ch04/4_1_3.png'/>">
	
	<div class="guide">
		<img src="<c:url value='/resources/UI/Info/guide.png'/>">
		<div>마우스를 클릭하여 주변을 둘러보세요.</div>
	</div>
	<jsp:include page="../info_window.jsp"/>
</div>

<script defer>
	var anubis = document.querySelector('#anubis');
	
	if(${scene} == 3) {
		var body = document.querySelector('body');
		body.onload = function() { console.log("Selection time~"); };
	
		anubis.src = "resources/webp/ch04/anubis_2_motion.webp";
		setTimeout(function() {
			anubis.src = "resources/webp/ch04/anubis_2_talk.webp";
		}, 2400);
	}
	$("#voice").bind("ended", function() {
		anubis.src= "resources/webp/ch04/anubis_2.webp";
	});
</script>