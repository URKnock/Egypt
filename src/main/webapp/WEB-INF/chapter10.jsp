<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch10.css'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch10.js'/>"></script>
</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="human" style="z-index: 3;" src="<c:url value='/resources/character/ch09/사자.webp'/>"/>
		<img id="anubis" style="z-index: 3;" src="<c:url value='/resources/character/ch10/아누비스기본.webp'/>"/>
		<img id="ammut" style="z-index: 3;" src="<c:url value='/resources/character/ch10/암무트기본.webp'/>"/>
		<img id="thoth" style="z-index: 3;" src="<c:url value='/resources/character/ch10/토트기본.webp'/>"/>
		<img id="scale" style="z-index: 2;" src="<c:url value='/resources/object/ch10/저울1.png'/>"/>
		<img id="pillar" style="z-index: 2; width:100%; height:100%; background-size: 100% 100%;" src="<c:url value='/resources/background/ch10/10_1.png'/>"/>
<%-- 		<img id="ink" style="z-index: 1;" src="<c:url value='/resources/background/ch10/10_9.png'/>"/> --%>

	</div>
	<div id="page">
	</div>
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>

	<jsp:include page="interaction/info_window.jsp"/>
	<form id="form" method="post" action="<c:url value='/chapter11'/>">
	<img id="dialogue_bg" src='<c:url value="/resources/UI/Dialogue/0.png"/>'/>
		<div id="dialogue">
			<img id="dialogue_img" src='<c:url value="${dialogue.image}"/>' />
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
					<img src='<c:url value="${dialogue.player}"/>' />
				</div>
			</c:if>
		</div>
		<div id="blur"></div>
		<audio id="bgm" preload="auto" src="/resources/bgm/ch10/bgm.mp3"
			loop="true" autobuffer></audio>
		<audio id="voice" preload="auto"
			src="/resources/bgm/ch10/3_${scene}_${index}_${flag}.wav"></audio>
		<div id="blur"></div>
	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
	</form>
</body>
</html>
