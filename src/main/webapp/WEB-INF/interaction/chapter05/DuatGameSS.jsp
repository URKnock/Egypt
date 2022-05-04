<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameStart2.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameSS.js'/>"></script>
<script> $(function(){ init(); }); </script> 
</head>
<body>
<div id="background">
</div>
<div id="keeper">
	<div id="keeper">
	<img id="keepers" src="<c:url value='/resources/character/ch09/9_12.png'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
		<img class="mainC" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class=	"saja" src="<c:url value='/resources/character/ch05/5_2.png'/>">
	</div>
</div>
</body>
</html>