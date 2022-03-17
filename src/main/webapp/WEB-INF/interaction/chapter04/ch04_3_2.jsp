<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch04/ch04_3.css'/>" rel="stylesheet" type="text/css"/>
<style>
	#interact .character:nth-of-type(3) { height: 28.61%; left: 37.5%; }
	#interact .character:nth-of-type(4) { height: 28.61%; left: 17.5%; }
</style>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch04/4_0_4.png'/>">
	
	<!-- character -->
	<img class="osiris" src="<c:url value='/resources/Character/ch04/4_23.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_22.png'/>">
	<img class="character" src="<c:url value='/resources/Character/ch04/4_22.png'/>">
</div>