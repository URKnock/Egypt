<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_3.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .character:nth-of-type(3) { height: 61.20%; left: 37.5%; }
	#interact .character:nth-of-type(4) { height: 28.61%; left: 37.5%; }
	#interact .item { height: 23.98%; left: 44%; }
	@keyframes walk {
		from { left: -120%; opacity: 1;}
		to { left: 37.5%; opacity: 1;}	
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/toss.js'/>" type="text/javascript"></script>
<script defer>
	var body = document.querySelector('body');
	body.onload = function() { init_toss(); };
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_0_4.png'/>">
	
	<!-- character -->
	<img class="osiris" src="<c:url value='/resources/Character/ch04/4_23.png'/>">

	<img class="character" id="stand" src="<c:url value='/resources/Character/ch04/4_21.png'/>">
	<img class="character" id="sit" src="<c:url value='/resources/Character/ch04/4_22.png'/>">
	
	<img class="item" id="active" src="<c:url value='/resources/object/ch04/4_4_16.png'/>">
	
	<div class="spot"></div>
</div>