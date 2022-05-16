<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch02.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch02.js'/>"></script>
<script src="<c:url value='/resources/js/sound_bgmonly.js'/>"></script>

</head>
<body onload="init(); interaction();">
	<div id="background">
		<img id="chap1" class="chapters island-move island-unlocked" src="<c:url value='/resources/object/ch02/1_2.webp'/>"/>
		<img id="chap2" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/2_1.png'/>"/>
		<img id="chap3" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/3_1.png'/>"/>
		<img id="chap4" class="chapters island-move island-locked" src="<c:url value='/resources/object/ch02/4_1.png'/>"/>
		
		<img id="chap1view" class="chapViews" src="<c:url value='/resources/object/ch02/1_3.png'/>"/>
		<img id="chap2view" class="chapViews" src="<c:url value='/resources/object/ch02/2_3.png'/>"/>
		<img id="chap3view" class="chapViews" src="<c:url value='/resources/object/ch02/3_3.png'/>"/>
		<img id="chap4view" class="chapViews" src="<c:url value='/resources/object/ch02/4_3.png'/>"/>
		
		<img id="arrow" class="pikachu" style="position: absolute;" src="<c:url value='/resources/UI/Menu/화살표next.png'/>"/>
		<img id="stone1" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_2.png'/>"/>
		<img id="stone2" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_3.png'/>"/>
		<img id="stone3" class="chapters island-move" src="<c:url value='/resources/object/ch02/0_4.png'/>"/>
		<img id="banner" src="<c:url value='/resources/object/ch02/0_5.png'/>"/>
	</div>
	<audio id="bgm" preload="auto" src="/resources/bgm/ch02/2_home.mp3" loop="true" autobuffer></audio>
	
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	
	<jsp:include page="interaction/setting.jsp"/>
	<c:choose>
		<c:when test="${chapter eq '1'}">
			<script>
				console.log("1챕터에 입장 가능합니다.");
			</script>
		</c:when>
		<c:when test="${chapter ne '1'}"> <!-- chapter 번호가 1 이상이라면 -->
			<script>
				var i;	
				for(i = 2; i <= ${chapter}; i++ ) { //지금까지 해금한 챕터 모두를 처리
					var imgSrc = "<c:url value='/resources/object/ch02/" + i + "_2.webp'/>"
					$('#chap' + i).attr('src', imgSrc);
					$('#chap' + i).removeClass('island-locked');
					$('#chap' + i).addClass('island-unlocked');	
				}
			</script>
		</c:when>
		<c:otherwise>
			<script>console.log("챕터 정보가 없습니다.");</script>
		</c:otherwise>
	</c:choose>
	
	<script>
		$(function() { // 런타임 동작
			$('.island-move').hover(
				function() {
					var d = new Date(); //마우스 오버시 webp 다시 재생
			        imgSrc = $(this).attr('src')+'?'+d.getTime();
			        $(this).attr('src', imgSrc);
			        $(this).css('display', 'block');
	
					var chapName = $(this).attr("id") + 'view';
					$('#' + chapName).show();
					$('#' + chapName).removeClass("fade-out");
					$('#' + chapName).addClass("fade-in");
				},
				
				function() {
					var chapName = $(this).attr("id") + 'view'; 
					$('#' + chapName).removeClass("fade-in");
					$('#' + chapName).addClass("fade-out");
			});
			
			$('.island-unlocked').click(function() { //이미 해금된 섬이라면
				var sound = new Audio("/resources/bgm/ch02/click.mp3");
				sound.play();
				var chapName = $(this).attr("id");
				var chapNum = Number(chapName[4]) + 2;
				setTimeout(function() { $(location).attr("href", "/load?chapter=" + chapNum); }, 700);
			});
			
			$('.island-locked').click(function() { //아직 해금되지 않은 섬이라면
				var chapName = $(this).attr("id");
				$('#' + chapName).removeClass("island-move"); //애니메이션 paused 상태와 island-shake가 겹치지 않도록 함
				$('#' + chapName).addClass("island-shake");
				setTimeout(function() { $('#' + chapName).addClass("island-move"); }, 500); //shake가 끝나자마자 움직이지 않으면 shake 높이가 default가 됨.
				setTimeout(function() { $('#' + chapName).removeClass("island-shake"); }, 500);
			});
		});
	</script>
</body>
</html>