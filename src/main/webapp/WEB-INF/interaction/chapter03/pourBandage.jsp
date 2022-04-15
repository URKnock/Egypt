<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch03/pourBandage.css'/>" rel="stylesheet" type="text/css"/>
<div id="dragSpot" class="circle droppable"></div>
<img src="../resources/object/ch03/bandage.png" id="bandageToClick"/>
<img src="../resources/object/ch03/bandage.png" id="bandage"/>
<img src="<c:url value='/resources/object/ch03/paper.png'/>" id="scroll"/>
<img src="<c:url value='/resources/character/ch03/3_4.png'/>" id="human"/>
<img src="<c:url value='/resources/character/ch03/3_6.png'/>" id="human_cover"/>
<c:forEach var="i" begin="1" end="7">
	<div id="hole${i}" class="hole holes"></div>
</c:forEach>
<canvas id="canvas1"></canvas>
<canvas id="canvas2"></canvas>
<script src="<c:url value='/resources/js/interaction/ch03/pourBandage.js'/>"></script>