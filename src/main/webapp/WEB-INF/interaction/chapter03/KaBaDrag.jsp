<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/kabaDrag.css'/>" rel="stylesheet" type="text/css"/>
<div>
	<img src="<c:url value='/resources/character/ch03/3_1.png'/>" id="human" class="human"/>	
	<img src="<c:url value='/resources/object/ch03/ka.webp'/>" id="ka"/>
	<img src="<c:url value='/resources/object/ch03/ba.webp'/>" id="ba"/>
	<img src="<c:url value='/resources/object/ch03/ka.png'/>" id="kaPng" class="pikachu"/>
	<img src="<c:url value='/resources/object/ch03/ba.png'/>" id="baPng" class="pikachu"/>	
</div>
<script src="<c:url value='/resources/js/interaction/ch03/kabaDrag.js'/>"></script>
