<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/ch05.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch05.js'/>"></script>
<script> $(function(){ init(); }); </script>
</head>
<body>
<div id="background">
	<div id="menu">
		<img class="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img class="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img class="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img class="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>
</div>
<div id="characters">
	<img id="mainC" src="<c:url value='/resources/Character/ch05/5_4.png'/>"/>
</div>
<div id="backs">
	<img id="earth" src="<c:url value='/resources/background/ch05/5_1.png'/>"/>
	<img id="water1" src="<c:url value='/resources/background/ch05/5_3.png'/>"/>
</div>

<div class="modal">
  <div class="modal_content" 
       title="클릭하면 창이 닫힙니다.">
    <img class="info1" id="info1" src="<c:url value='/resources/UI/Info/3_1_1.png'/>"/> 
  </div>
  
  <div class="modal2">
  <div class="modal_content2" 
       title="클릭하면 창이 닫힙니다.">
    <img class="info2" id="info2" src="<c:url value='/resources/UI/Info/3_1_2.png'/>"/> 
  </div>
  
</body>
</html>
