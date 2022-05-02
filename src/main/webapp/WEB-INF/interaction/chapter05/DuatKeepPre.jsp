<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>keeppre</title>
<link href="<c:url value='/resources/css/interaction/ch05/DuatLast.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch05/DuatLast.js'/>"></script>
<script> $(function(){ init(); }); </script> 
</head>
<body>
<div id="background">	
</div>
<div id="keeper">
	<div id="keeper">
	<img class="keepers" src="<c:url value='/resources/character/ch05/단상.png'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
		<img class="mainC_s" src="<c:url value='/resources/character/ch05/la_b.png'/>">
	</div>
</div>

</body>
</html>