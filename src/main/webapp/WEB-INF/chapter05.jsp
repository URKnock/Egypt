<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/info_window.css'/>">
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch05.css'/>"/> 
<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<script src="<c:url value='/resources/js/ch05.js'/>"></script>
<script src="<c:url value='/resources/js/interaction/info_window.js'/>"></script>
<script src="/resources/js/jquery-animate-css-rotate-scale.js" type="text/javascript"></script>
</head>
<body onload="init(); interaction();">
	<jsp:include page="interaction/help.jsp"/>
	<jsp:include page="interaction/setting.jsp"/>
	<jsp:include page="interaction/shabti_new.jsp"/>
		<div id="menu">
			<img onclick="shabti()" src="<c:url value='/resources/UI/Menu/1.png'/>" />
			<img onclick="home()" src="<c:url value='/resources/UI/Menu/2.png'/>" />
			<img onclick="setting()" src="<c:url value='/resources/UI/Menu/3.png'/>" /> 
			<img onclick="help()" src="<c:url value='/resources/UI/Menu/4.png'/>" />
		</div>

<div id="background">
	<div id="ew">
	<div id="earth">
	<img id="earth" src="<c:url value='/resources/background/ch05/5_1.png'/>">
	</div>
	<div id="water">
		<img id="water1" src="<c:url value='/resources/background/ch05/5_4.png'/>">
		<img id="water2" src="<c:url value='/resources/background/ch05/5_3.png'/>">
		<img id="water3" src="<c:url value='/resources/background/ch05/5_2.png'/>">
	</div>
	</div>
	<div id="chs">
	<img id="saja" src="<c:url value='/resources/character/ch05/두리번사자(112).webp'/>">
	</div>
	<div id="LawBoat">
	<img id="la" src="<c:url value='/resources/character/ch05/도입숨셔라(33).webp'/>">
	<img id="boat" src="<c:url value='/resources/object/ch05/배.png'/>">
	<img id="gogo" src="<c:url value='/resources/character/ch05/두아트_출발(182).webp'/>">
	<img id="gogoboat" src="<c:url value='/resources/character/ch05/두아트_배경배(96).webp'/>">
	</div>
</div>
<div id="menu">
	<div>
		<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>
</div>
<div id="page">
	<c:if test="${page ne null}">
		<jsp:include page="./interaction/chapter05/${page}"/>
	</c:if>
</div>
<form method="post" action="<c:url value='/chapter05'/>">
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
         <p id='con'>${dialogue.content}</p>
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
<div id="loading"></div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<input name="scene" type="hidden" value="${scene}"/>
<input name="index" type="hidden" value="${index}"/>
<input name="flag" type="hidden" value="${flag}"/>
</form>
<jsp:include page="interaction/info_window.jsp"/>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/water_wave.mp3'/>"></audio>
<audio id="voice" preload="auto" src=""></audio>
<audio id="effect" preload="auto" src=""></audio>
<div id="order"></div>
</body>
</html>
