<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>사자의 서</title>
	<link href="<c:url value='/resources/css/ch04.css'/>" rel="stylesheet" type="text/css"/>
	<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
	<script defer src="<c:url value='/resources/js/ch04.js'/>" type="text/javascript"></script>
	<script defer src="<c:url value='/resources/js/ch10.js'/>" type="text/javascript"></script>
	<link href="<c:url value='/resources/css/interaction/ch07/ch07_2.css'/>" rel="stylesheet" type="text/css"/>
	<link href="<c:url value='/resources/css/ch10.css'/>" rel="stylesheet" type="text/css"/>
	
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/> 
	<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
	<script src="<c:url value='/resources/js/sound.js'/>"></script>
</head>
<body>
<audio id="bgm" preload="auto" src="<c:url value='/resources/bgm/6_7_courtroom.mp3'/>" loop="true" autobuffer></audio>
<audio id="voice" preload="auto" src="<c:url value='/resources/bgm/ch10/10_${scene}_${index}_${flag}.mp3'/>"></audio>
<audio id="effect" preload="auto" src=""></audio>
<div id="view">
<div id="wrap">
	<div id="background">
		<div id="interact">
			<!-- background -->
			<img class="background" src="<c:url value='/resources/background/ch07/7_2_2.png'/>">
			<img class="background" src="<c:url value='/resources/background/ch07/7_2_3.png'/>">
			
			<img class="bgObj" src="<c:url value='/resources/background/ch07/7_2_4.png'/>"> <!-- 저울 원본 -->
		
			<!-- character -->
			<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
			<img class="character" src="<c:url value='/resources/webp/ch07/anubis2.webp'/>">
			<img class="character" src="<c:url value='/resources/webp/ch07/thoth.webp'/>">
			<img class="character" src="<c:url value='/resources/webp/ch07/ammut.webp'/>">
			
			<!-- new obj -->
			<img class="bgObj" id="heart" style="opacity: 0;" src="<c:url value='/resources/object/ch10/10_4.png'/>">
			<img class="bgObj" id="newScale" style="opacity: 0;" src="<c:url value='/resources/object/ch10/저울2.png'/>">
			
			<!-- new background -->
			<img class="background" id="newBg" style="opacity: 0;" src="<c:url value='/resources/background/ch10/10_2.png'/>">
			<img class="background" id="redInk" src="<c:url value='/resources/background/ch10/10_9_2.png'/>">
			<img class="background" id="blueInk" src="<c:url value='/resources/background/ch10/10_10_2.png'/>">
			<img class="background" id="pillar" style="opacity: 0;" src="<c:url value='/resources/background/ch10/10_1.png'/>">
			
		</div>
	</div>
	<div id="menu">
		<img onclick="" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img onclick="home()" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img onclick="setting()" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img onclick="help()" src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>
</div>
</div>
<jsp:include page="interaction/help.jsp"/>
<jsp:include page="interaction/setting.jsp"/>

<jsp:include page="interaction/info_window.jsp"/>
<form method="post" action="<c:url value='/chapter10'/>">
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

<script defer>
	var scene = $("input[name='scene']").val();
	var index = $("input[name='index']").val();
	var flag = $("input[name='flag']").val();
	console.log(scene, index, flag);

	var body = document.querySelector('body');
	var nextChapter = '<%=(String)session.getAttribute("result")%>';
	console.log(nextChapter);
	
	body.onload = function() {	
		if(scene == 0 && index == 1) {
			$("#dialogue").click(function() {
				$("form").submit();  
			});
		}
		if(scene == 1 && index == 0) {
			$("#loading").hide();
			imageReload();
		}
		//모든 대화를 마치고 심장까지 먹힌 후에 실행되는 스크립트 
		
// 		console.log(nextChapter);
// 		$("#dialogue").click(function() {
// 			var link = ""
// 			if(nextChapter != "null") {
// 				//location.href = '/' + nextChapter;
// 				link = '/' + nextChapter;
// 			}
// 			else {
// 				//location.href = '/chapter11';
// 				link = '/chapter11'
// 			}
// 			console.log(link);
// 		});
		
	}
</script>