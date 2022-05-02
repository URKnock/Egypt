<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>KeeperInfo</title>
<link href="<c:url value='/resources/css/interaction/ch05/DuatKeeperInfo.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch05/DuatKeeperInfo.js'/>"></script>
<script> $(function(){ init(); }); </script> 
</head>
<body>
<div id="background">	
</div>
<div id="keeper">
	<div id="keeper">
	<img id="dansang" src="<c:url value='/resources/character/ch05/단상.png'/>"/>
	<img id="keepers" src="<c:url value='/resources/character/ch05/신관들.png'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
		<img class="mainC_s" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class="mainC_k" src="<c:url value='/resources/character/ch05/5_Lc_k.png'/>">		
	</div>
</div>
<jsp:include page="../info_window.jsp"/>
</body>
<div class="guide" align="center">마우스로 클릭하여 주위를 둘러보세요.</div>
</html>