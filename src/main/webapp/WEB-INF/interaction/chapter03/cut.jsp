<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/cut.css'/>" rel="stylesheet" type="text/css"/>
<c:forEach var="i" begin="1" end="5">
	<img src="<c:url value='/resources/object/ch03/organ_${i}.png'/>" id="organ${i}" class="organ"/>
	<div id="organDest${i}" class="dest droppable"></div>
</c:forEach>
<img src="<c:url value='/resources/character/ch03/3_2.png'/>" id="human" class="human"/>
<img src="<c:url value='/resources/object/ch03/칼.png'/>" id="knifeToClick"/>
<img src="<c:url value='/resources/object/ch03/칼.png'/>" id="knife"/>
<img src="<c:url value='/resources/character/ch03/servant_1.webp'/>" id="servant">
<hr class="blinking" id="dragLine"></hr>
<div id="dragDest" class="dest droppable blinking"></div>
<script src="<c:url value='/resources/js/interaction/ch03/cut.js'/>"></script>