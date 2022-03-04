<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/organDrag.css'/>" rel="stylesheet" type="text/css"/>
<c:forEach var="i" begin="1" end="4">
	<div class="canopic">
		<img id="ca${i}_0" class="droppable" src="<c:url value='/resources/background/ch03/k_00.png'/>"/>
		<img id="ca${i}_1" class="head droppable" src="<c:url value='/resources/background/ch03/k_0${i}.png'/>"/>
	</div>
	<div id="organDiv${i+1}" class="organ_div">
		<img src="<c:url value='/resources/object/ch03/organ_${i+1}.png'/>" id="organ${i+1}" class="organ"/>
	</div>
</c:forEach>
<img src="<c:url value='/resources/object/ch03/organ_1.png'/>" id="organ1"/>
<img src="<c:url value='/resources/character/ch03/3_2.png'/>" id="human"/>
<img src="<c:url value='/resources/character/ch03/servant_2.webp'/>" id="servant">
<script src="<c:url value='/resources/js/interaction/ch03/organDrag.js'/>"></script>