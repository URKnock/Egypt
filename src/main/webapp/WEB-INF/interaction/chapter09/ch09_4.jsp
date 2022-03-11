<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>ch09</title>
<link href="<c:url value='/resources/css/interaction/ch09/ch09_4.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch09/ch09_4.js'/>"></script> 
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
	<a href="<c:url value='/chapter09_5' />" >
	<img id="next" src="<c:url value='/resources/UI/Menu/9_7_1.png'/>"/>
	</a>
	</div>
	<div class="pre">
	<a href="<c:url value='/chapter09_3' />" >
	<img id="pre" src="<c:url value='/resources/UI/Menu/9_7_2.png'/>"/>
	</a>
	</div>
</div>
<div id="characters">
	<div id="character">
	<img id="c1" src="<c:url value='/resources/Character/ch09/9_1.png'/>"/>
	<img id="c2" src="<c:url value='/resources/Character/ch09/9_9.png'/>"/>
	<img id="c3" src="<c:url value='/resources/Character/ch09/9_36.png'/>"/>
	<img id="c4" src="<c:url value='/resources/Character/ch09/9_10.png'/>"/>
	</div>
</div>
</body>
<!-- 모달 -->
<div class="modal">
  <div class="modal_content" 
       title="클릭하면 창이 닫힙니다.">
    <img class="info37" id="info37" src='<c:url value="${info37.img}"/>'/> 
  </div>
  </div>
 <div class="modal2">
 <div class="modal_content2" 
      title="클릭하면 창이 닫힙니다.">
   <img class="info38" id="info38" src='<c:url value="${info38.img}"/>'/> 
 </div>
 </div>
</html>
