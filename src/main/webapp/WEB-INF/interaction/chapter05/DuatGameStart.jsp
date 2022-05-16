<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameStart.css'/>" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameStart.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<div id="background">
</div>
<body onload="init(); interaction();">
<div id="characters">
	<div id="character">
		<img class="mainC" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class=	"saja" src="<c:url value='/resources/character/ch05/5_2.png'/>">
	</div>
</div>
<div id="crocs">
	<img class="crocs1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
</body>