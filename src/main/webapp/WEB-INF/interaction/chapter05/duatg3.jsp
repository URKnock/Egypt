<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>duatg3</title>
<link href="<c:url value='/resources/css/interaction/ch05/duatg3.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch05/duatg3.js'/>"></script>
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
		<img class="bug1" src="<c:url value='/resources/object/ch05/5_22.png'/>">
		<img class="bug2" src="<c:url value='/resources/object/ch05/5_22.png'/>">
		<img class="bug3" src="<c:url value='/resources/object/ch05/5_22.png'/>">
		<img class="bug4" src="<c:url value='/resources/object/ch05/5_22.png'/>">
		<img class="mainC" src="<c:url value='/resources/Character/ch05/5_Lc.png'/>">
	</div>
</div>


</body>
</html>
