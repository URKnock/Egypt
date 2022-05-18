<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>사자의 서</title>
	<link href="<c:url value='/resources/css/ch04.css'/>" rel="stylesheet" type="text/css"/>
	<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
	<script defer src="<c:url value='/resources/js/ch04.js'/>" type="text/javascript"></script>
	
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
	<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
	<script src="<c:url value='/resources/js/sound.js'/>"></script>
	<script>
		function effSoundPlay( soundName ) {
			effect.src = "resources/bgm/ch07/effect/"+soundName+".mp3";
			effect.play();
		}
	</script>
</head>
<body onload="init();">
<audio id="bgm" preload="auto" src="<c:url value='/resources/bgm/6_7_courtroom.mp3'/>" loop="true" autobuffer></audio>
<audio id="voice" preload="auto" src="<c:url value='/resources/bgm/ch07/7_${scene}_${index}_${flag}.mp3'/>"></audio>
<audio id="effect" preload="auto" src=""></audio>
<div id="view">
<div id="wrap">
	<div id="background">
		<c:if test="${page ne null}">
			<jsp:include page="./interaction/chapter07/${page}"/>
		</c:if>
		<c:if test="${page eq null}">
			<c:if test="${scene eq 2}">
				<jsp:include page="./interaction/chapter07/ch07_0_info.jsp"/>
			</c:if>
			<c:if test="${scene eq 11}">
				<jsp:include page="./interaction/chapter07/ch07_3_info.jsp"/>
			</c:if>
		</c:if>
	</div>
	
	<div id="menu">
		<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>
</div>
</div>
<jsp:include page="interaction/setting.jsp"/>
<jsp:include page="interaction/info_window.jsp"/>
<form method="post" action="<c:url value='/chapter07'/>">
	<div id="order"></div>
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
	<div id="loading"></div>
	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
</form>
</body>
</html>

<c:if test="${page eq null}">
	<script>
		$("input[name=flag]").val("0");
		$("input[name=choice]").val("0");
	</script>	
</c:if>
<c:if test="${scene eq 7 and index eq 0}">
	<c:if test="${result eq 'chapter08'}">
	<script>
		$("input[name=flag]").val("0");
		$("input[name=choice]").val("0");
	</script>	
	</c:if>
</c:if>