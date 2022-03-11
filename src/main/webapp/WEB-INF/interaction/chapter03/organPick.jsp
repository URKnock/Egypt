<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/organPick.css'/>" rel="stylesheet" type="text/css"/>
<c:forEach var="i" begin="1" end="5">
	<div id="organDiv${i}" class="organ_div">
		<img src="<c:url value='/resources/object/ch03/organ_${i}.png'/>" id="organ${i}" class="organ"/>
	</div>
	<c:if test="${i lt 5}"><div id="organDest${i}" class="dest droppable"></div></c:if>
</c:forEach>
<img src="<c:url value='/resources/character/ch03/3_2.png'/>" id="human"/>
<img src="<c:url value='/resources/character/ch03/3_3.png'/>" id="human_cover"/>
<img src="<c:url value='/resources/character/ch03/servant_2.webp'/>" id="servant">
<script src="<c:url value='/resources/js/interaction/ch03/organPick.js'/>"></script>