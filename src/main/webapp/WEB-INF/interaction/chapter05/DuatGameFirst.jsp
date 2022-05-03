<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameStart2.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameFirst.js'/>"></script>
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
		<img class="saja" src="<c:url value='/resources/character/ch05/창든사자(위)_1처음.webp'/>">
		<img class="mainC" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class="mainC_s" src="<c:url value='/resources/character/ch05/5_Lc.png'/>">
		<img class="mainC_k" src="<c:url value='/resources/character/ch05/5_Lc_k.png'/>">		
		<img class="spear" src="<c:url value='/resources/object/ch05/spear.png'/>">
	</div>
</div>
<div id="crocs">
	<img class="crocs1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<div id="crocs2">
	<img class="crocs11" src="<c:url value='/resources/object/ch05/croc_im3.webp'/>">
	<img class="crocs21" src="<c:url value='/resources/object/ch05/croc_im3.webp'/>">
	<img class="crocs31" src="<c:url value='/resources/object/ch05/croc_im3.webp'/>">
	<img class="crocs41" src="<c:url value='/resources/object/ch05/croc_im3.webp'/>">
</div>
<div id="crocs_imsi">
	<img class="crocsi1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocsi2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocsi3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocsi4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<div class="guide2" align="center">마우스로 클릭하여 악어를 처치해주세요.</div>
</body>
</html>