<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script>bgm.src = "resources/bgm/8_falseconfession.mp3";</script>
<link href="<c:url value='/resources/css/interaction/ch07/ch07_3.css'/>" rel="stylesheet" type="text/css"/>
<script> 
	var chapter = 7;
	var info_total = 5;
</script>
<c:if test="${scene eq 11}">
	<script> 
		info_total = 0;
	</script>
</c:if>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch07/info_tap_3.js'/>" type="text/javascript"></script>


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
		<img class="bgObj" onclick="tap_info(this, 10)" src="<c:url value='/resources/webp/ch07/lotus.webp'/>">
		<img class="bgObj" onclick="tap_info(this, 11)" src="<c:url value='/resources/webp/ch07/statue.webp'/>">
	</div>
	
	<!-- character -->
	<img id="men" class="character" src="<c:url value='/resources/webp/ch07/men_walk.webp'/>">
	<img id="horus" class="character" src="<c:url value='/resources/webp/ch07/horus2_walk.webp'/>">
	<img onclick="tap_info(this, 7)" class="character" src="<c:url value='/resources/webp/ch07/osiris.webp'/>">
	<img onclick="tap_info(this, 8)" class="character" src="<c:url value='/resources/webp/ch07/nephthys.webp'/>">
	<img onclick="tap_info(this, 9)" class="character" src="<c:url value='/resources/webp/ch07/isis.webp'/>">

	<div class="guide">
		<img src="<c:url value='/resources/UI/Info/guide.png'/>">
		<div>마우스를 클릭하여 주변을 둘러보세요.</div>
	</div>
	<jsp:include page="../info_window.jsp"/>
</div>

<c:if test="${scene eq 11}">
	<script>
		var body = document.querySelector('body');
		var horus = document.querySelector('#horus');
		var men = document.querySelector('#men');
		var guide = document.querySelector('.guide');
		
		horus.src = "resources/webp/ch07/horus2_talk.webp";
		men.src = "resources/webp/ch07/men.webp";
		
		body.onload = function() { 
			console.log("info time~"); setSomething();
			for(var i = 0; i < 5; i++) obj[i].id = "active";
			guide.style.display= "block";
		}
		$("#voice").bind("ended", function() {
			horus.src = "resources/webp/ch07/horus2.webp";
		});
	</script>
</c:if>
<c:if test="${scene eq 10}">
	<script>
		var body = document.querySelector('body');
		var men = document.querySelector('#men');
		var horus = document.querySelector('#horus');
		var guide = document.querySelector('.guide');
		men.style.animation = "walk 3s";
		men.style.height = "46.20vh";
		horus.style.animation = "walk 3s";
		guide.style.display= "none";
		
		body.onload = function() { 
			console.log("info time~"); setSomething();
			var voice = document.getElementsByTagName('audio')[1];
			voice.pause();
			setTimeout(function() { 
				horus.src = "resources/webp/ch07/horus2_talk.webp";
				men.src = "resources/webp/ch07/men.webp";
				men.style.height = "45.37vh";
				voice.play(); 
				
				for(var i = 0; i < 5; i++) obj[i].id = "active";
				guide.style.display= "block";
				}
			, 3000);
			$("#voice").bind("ended", function() {
				horus.src = "resources/webp/ch07/horus2.webp";
			});
		};
	</script>
</c:if>