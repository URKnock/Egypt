<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>

<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch11.css'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<script src="<c:url value='/resources/js/sound_bgmonly.js'/>"></script>

</head>
<body onload="init();">
	<audio id="bgm" preload="auto" src="/resources/bgm/12_riverofchaos.mp3" loop="true" autobuffer></audio>
	<audio id="voice" src="<c:url value='/resources/bgm/ch12/12_${scene}_${index}_${flag}.mp3'/>"></audio>
	<audio id="effect" preload="auto" src=""></audio>
	<div id="view">
		<div id="wrap">
			<div id="background">
				<c:choose>
					<c:when test="${scene eq 0 and index eq 1}">
						<jsp:include page="interaction/chapter12/chapter12_1.jsp" />
					</c:when>
					<c:when test="${scene eq 0 and index eq 2}">
						<script></script>
						<jsp:include page="interaction/chapter12/chapter12_2.jsp" />
					</c:when>
					<c:when test="${scene eq 1 and index eq 0}">
						<jsp:include page="interaction/chapter12/chapter12_3.jsp" />
					</c:when>
				</c:choose>

				<div id="menu">
					<img onclick="" src="<c:url value='/resources/UI/Menu/1.png'/>" />
					<img onclick="home()" src="<c:url value='/resources/UI/Menu/2.png'/>" />
					<img onclick="setting()" src="<c:url value='/resources/UI/Menu/3.png'/>" /> 
					<img onclick="help()" src="<c:url value='/resources/UI/Menu/4.png'/>" />
				</div>
			</div>
		</div>
	</div>
	
	<script>
		$(document).ready(function(){
			$('#background').css('background-image', "url('resources/background/ch12/ch12_bg.png')");
			
			$("#loading").fadeOut(6000);
						
			var currentPath = window.location.pathname;
	
			if(currentPath == "/chapter12part2") {
				$('form').submit();
			}
			else if(currentPath == "/chapter12part3") {
				$('form').attr("action", '/chapter12part2');
				$('form').submit();
			}
		});
	</script>
	
	<jsp:include page="interaction/help.jsp"/>
	<jsp:include page="interaction/setting.jsp"/>
	
	<jsp:include page="interaction/info_window.jsp"/>
	<form method="post" action="<c:url value='/chapter12'/>">
	<div id="order"></div>
	<img id="dialogue_bg" src='<c:url value="/resources/UI/Dialogue/0.png"/>'/>
	<div id="dialogue">
		<img id="dialogue_img" src='<c:url value="${dialogue.image}"/>'/>
		<div id="scene">
			<div id="title">
				<div>${dialogue.name}</div>
				<c:if test="${dialogue.nickname ne '없음' && dialogue.nickname ne '' }">
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
	<div id="loading"></div>

	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
	</form>
</body>
</html>