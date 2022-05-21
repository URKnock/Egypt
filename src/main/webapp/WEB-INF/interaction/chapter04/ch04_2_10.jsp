<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/getItem.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .animal:nth-of-type(5) { display: none; height: 17.12%; left: 52%; bottom: 34.5%;}
	#interact .animal:nth-of-type(6) { height: 43.24%; bottom: 34.5%;}
	
	#line { height: 8%; bottom: 43%; left: 50%; transform: translate(-19vh, 0); }
	
	.item { height: 32.31%; bottom: 66%; left: 16vh; }
	@keyframes getItem {
	    from { bottom: 50%; left: 37%; }
	    to { bottom: 66%; left: 16vh; }
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/getItem.js'/>" type="text/javascript"></script>
<script defer>
	effectName = "cut1";
	var body = document.querySelector('body');
	body.onload = function() { init_item(); setSomething();};
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<div id="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_10.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_7.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_9.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_6.webp'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_4.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_5.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_7.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_8.webp'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_5_victim2.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch04/servant_6_victim1.webp'/>">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch04/anubis_1_talk.webp'/>">
	
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_15.png'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_13.png'/>">
	
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
	
	<div class="spot1" id="circle" style="bottom: 40%; left: 50%; transform: translate(-22vh, 0);"></div>
	<div class="spot2" id="circle" style="bottom: 47%; left: 50%; transform: translate(-13vh, 0);"></div>
	<img id="line" src="<c:url value='/resources/object/ch04/4_4_20.png'/>">
	
	<img class="item" src="<c:url value='/resources/object/ch04/4_4_14.png'/>">
</div>