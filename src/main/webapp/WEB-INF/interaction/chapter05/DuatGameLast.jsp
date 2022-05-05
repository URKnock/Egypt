<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameThird.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameThird.js'/>"></script>
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
		<img class="mainC_s" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class="mainC_k" src="<c:url value='/resources/character/ch05/5_Lc_k.png'/>">		
		<img class="spear" src="<c:url value='/resources/object/ch05/spear.png'/>">
	</div>
</div>
<div id="snakes">
	<img class="snake1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="snake2" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<div class="guide2" align="center">마우스로 클릭하여 뱀을 처치해주세요.</div>
</body>
</html>