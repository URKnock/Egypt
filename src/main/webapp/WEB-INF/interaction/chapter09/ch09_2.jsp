<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>ch09</title>
<link href="<c:url value='/resources/css/ch09_2.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<!-- <script src="<c:url value='/resources/js/ch05.js'/>"></script> -->
<script> $(function(){ init(); }); </script>
</head>
<body>
<div id="background">
	<div id="menu">
		<img id="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img id="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img id="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img id="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>
	<div class="next">
	<a href="" target="_blank">
	<img id="next" src="<c:url value='/resources/UI/Menu/9_7_1.png'/>"/></a>
	</div>
</div>
<div id="keeper">
	<div id="keeper">
	<img id="keepers" src="<c:url value='/resources/Character/ch09/9_12.png'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
	<img id="c1" src="<c:url value='/resources/Character/ch09/9_1.png'/>"/>
	<img id="c2" src="<c:url value='/resources/Character/ch09/9_4.png'/>"/>
	<img id="c3" src="<c:url value='/resources/Character/ch09/9_5.png'/>"/>
	</div>
</div>
</body>
</html>
