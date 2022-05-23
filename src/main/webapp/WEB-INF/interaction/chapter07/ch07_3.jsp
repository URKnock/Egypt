<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script>bgm.src = "resources/bgm/8_falseconfession.mp3";</script>
<link href="<c:url value='/resources/css/interaction/ch07/ch07_3.css'/>" rel="stylesheet" type="text/css"/>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_3_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_3_3.png'/>">
	
	<div class="bg">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower1.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower2.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/flower3.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_5.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_3_6.png'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/lotus.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/webp/ch07/statue.webp'/>">
	</div>
	
	<!-- character -->
	<img id="men" class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<img id="horus" class="character" src="<c:url value='/resources/webp/ch07/horus2.webp'/>">
	<img id="osiris" class="character" src="<c:url value='/resources/webp/ch07/osiris.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/nephthys.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/isis.webp'/>">
	<img id="arc" src="<c:url value='/resources/webp/ch07/arc.webp'/>">
</div>

<c:if test="${scene eq 11 && index eq 0}">
	<script> 
		var body = document.querySelector('body');
		body.onload = function() { setSomething(); }
		
		var horus = document.querySelector('#horus');
		horus.src =  "resources/webp/ch07/horus2_talk.webp";
		$("#voice").bind("ended", function() {
			horus.src =  "resources/webp/ch07/horus2.webp";
		});
	</script>
</c:if>
<c:if test="${scene eq 12 && index eq 0}">
	<script> 
		var body = document.querySelector('body');
		body.onload = function() { init();
			setNextButton(44, 606);
		}
		var horus = document.querySelector('#horus');
		horus.src =  "resources/webp/ch07/horus2_talk.webp";
		$("#voice").bind("ended", function() {
			horus.src =  "resources/webp/ch07/horus2.webp";
		});
	</script>
</c:if>
<c:if test="${scene eq 13 && index eq 0}">
	<script> 
		var body = document.querySelector('body');
		body.onload = function() { init();
			setNextButton(44, 710);
		}
		var osiris = document.querySelector('#osiris');
		osiris.src =  "resources/webp/ch07/osiris_talk.webp";
		$("#voice").bind("ended", function() {
			osiris.src =  "resources/webp/ch07/osiris.webp";
		});
		
		var men = document.querySelector('#men');
		var arc = document.querySelector('#arc');
		
		setTimeout(function() { 
			men.src = "resources/webp/ch07/men_arc.webp"; 
			men.style.height = "46.20vh";
			arc.style.display = "block";
		}
		, 1000);
	</script>
</c:if>




<c:if test="${scene eq 11 && index eq 1}">
	<script>
		var men = document.querySelector('#men');
		men.src = "resources/webp/ch07/men_confess1.webp";
		setTimeout(function() { 
			men.src = "resources/webp/ch07/men_confess2.webp"; }
		, 1000);
	</script>
</c:if>
<c:if test="${scene eq 11 && (index eq 2 || index eq 3)}">
	<script>
		var men = document.querySelector('#men');
		men.src = "resources/webp/ch07/men_confess2.webp";
	</script>
</c:if>
<c:if test="${scene eq 11 && index eq 4}">
	<script>
		var men = document.querySelector('#men');
		men.src = "resources/webp/ch07/men_confess2.webp";
		setTimeout(function() { 
			men.src = "resources/webp/ch07/men_confess3.webp"; }
		, 2000);
	</script>
</c:if>