<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>

<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch11.css'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch11.js'/>"></script>
<script src="<c:url value='/resources/js/sound_bgmonly.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="monkeys" style="z-index: 3;" src="<c:url value='/resources/object/ch11/1층_원숭이탕.webp'/>"/>
		<img id="hellFire" style="z-index: 1;" src="<c:url value='/resources/object/ch11/1층_땅불.webp'/>"/>
		<img id="arrow" style="z-index: 4;" class="pikachu" onClick="location.href='../chapter11part2'" src="<c:url value='/resources/object/ch11/arrow.png'/>"/>
		<img id="ground" style="z-index: 2;" src="<c:url value='/resources/object/ch11/1층_땅.png'/>"/>
		<img id="ammut" style="z-index: 3;" class="select pikachu" src="<c:url value='/resources/character/ch11/1층_암무트1.webp'/>"/>
		<img id="human" style="z-index: 2;" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
	</div>
	<div id="page">
<%-- 		<c:if test="${page ne null}"> --%>
<%-- 			<jsp:include page="./interaction/chapter11/${page}"/> --%>
<%-- 		</c:if> --%>
	</div>
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>

	<jsp:include page="interaction/setting.jsp"/>
	<jsp:include page="interaction/info_window.jsp"/>
	<form id="form" method="post" action="<c:url value='/chapter11'/>">
		<div id="dialogue">
			<img id="dialogue_bg" src='<c:url value="/resources/UI/Dialogue/0.png"/>'/>
			<img style="z-index: 222;" id="dialogue_img" src='<c:url value="${dialogue.image}"/>' />
			<div style="z-index: 222;" id="scene">
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
					<img src='<c:url value="${dialogue.player}"/>' />
				</div>
			</c:if>
		</div>
		<div id="blur"></div>
		<audio id="bgm" preload="auto" src="/resources/bgm/ch11/11_bgm.mp3" loop="true" autobuffer></audio>
	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
	</form>
</body>
</html>
