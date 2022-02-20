<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/kabaDrag.css'/>" rel="stylesheet" type="text/css"/>
<div>
	<div id="dragSpot" class="circle" style="opacity: 0.8;"></div>	
	<div id="dragDest" class="circle droppable" style="width: 100px; height: 100px;"></div>
	<img src="<c:url value='/resources/character/ch03/3_1.png'/>" id="human" class="human"/>	
	<img src="<c:url value='/resources/object/ch03/카.png'/>" id="ka"/>
	<img src="<c:url value='/resources/object/ch03/바.png'/>" id="ba"/>
	<c:if test="${scene eq 4}"><hr id="dragLine" style="transform: rotate(45deg);"/></c:if>
</div>
<script src="<c:url value='/resources/js/interaction/ch03/kabaDrag.js'/>"></script>
