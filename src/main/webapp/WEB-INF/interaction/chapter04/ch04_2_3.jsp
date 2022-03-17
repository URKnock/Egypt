<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!--
	걸어나오고, 칼 클릭
 -->
<link href="<c:url value='/resources/css/interaction/ch04/ch04_2.css'/>" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch04/getItem.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .animal:nth-of-type(5) { height: 23.51%; bottom: 33.8%; display: none; }
	#interact .animal:nth-of-type(6) { height: 23.79%; bottom: 33.5%; }
	
	#line { width: 8vh; bottom: 36%; left: 50%; transform: rotate(0.58turn) translate(10vh, 0); }
	.item { height: 11.20%; bottom: 54.25%; left: 15%; }
	
	@keyframes getItem {
	    from { bottom: 43%; left: 42%; }
	    to { bottom: 54.25%; left: 15%; }
	}
</style>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch04/getItem.js'/>" type="text/javascript"></script>
<script defer>
	var body = document.querySelector('body');
	body.onload = function() { init_item(); };
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_1_5.png'/>">
	<div id="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_2.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_11.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_1_7.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_10.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_6.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_4.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_5.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_8.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch04/4_3_9.png'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/Character/ch04/4_13.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_15.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_6.png'/>">
	
	<!-- animal -->
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_3_1.png'/>">
	<img class="animal" src="<c:url value='/resources/object/ch04/4_4_3.png'/>">
	
	<img class="knife" src="<c:url value='/resources/object/ch04/4_4_1.png'/>">
	
	<div class="spot1" id="circle" style="bottom: 38%; left: 43%;"></div>
	<div class="spot2" id="circle" style="bottom: 33%; left: 48%;"></div>
	<div id="line"></div>
	
	<img class="item" src="<c:url value='/resources/object/ch04/4_4_5.png'/>">
</div>