<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>ch09</title>
<link href="<c:url value='/resources/css/interaction/ch09/ch09_6.css'/>" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch09/ch09_6.js'/>"></script> 
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
</head>
<body onload="init(); interaction();">
<jsp:include page="../info_window.jsp"/>
<div id="background">
	<div id="menu">
		<img id="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img id="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img id="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img id="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>	
	<div class="pre">
	<a href="<c:url value='/chapter09_5' />" data-transition="fade">
	<img id="pre" src="<c:url value='/resources/UI/Menu/화살표pre.png'/>"/>
	</a>
	</div>
</div>
<video id ="mp4" autoplay loop>
	<source type="video/mp4" src="<c:url value='/resources/background/ch09/천국4층.mp4'/>">
</video>
<div id="characters">
	<div id="character">
	<img id="c1" src="<c:url value='/resources/character/ch09/사자.webp'/>"/>
	<img id="c2" src="<c:url value='/resources/character/ch09/4층 라1.webp'/>"/>
	</div>
</div>
<div id="boat">
	<div id="boat_">
	<img id="boat_1" src="<c:url value='/resources/character/ch09/4층 배.webp'/>"/>
	</div>
</div>
<form method="post" >
<img id="dialogue_bg" src='<c:url value="/resources/UI/Dialogue/0.png"/>'/>
<div id="dialogue">
   <img id="dialogue_img" src='<c:url value="${dialogue.image}"/>'/>
   <div id="scene">
      <div id="title">
         <div>${dialogue.name}</div>
         <c:if test="${dialogue.nickname ne '없음'}">
            <div>${dialogue.nickname}</div>
         </c:if>
      </div>
      <div id="content">
         <p>${dialogue.content}</p>
         <img />
      </div>
   </div>
   <c:if test="${dialogue.choice ne null and dialogue.choice ne '-1'}">
      <div id="choice">
         <div>
            <c:forEach var="c" items="${dialogue.choice}">
               <button name="choice" type="submit" value="${c.id}">${c.content}</button>
            </c:forEach>
         </div>
         <img src='<c:url value="${dialogue.player}"/>'/>
      </div>
   </c:if>
</div>
<div id="blur"></div>
	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
	</form>
</body>
</html>
