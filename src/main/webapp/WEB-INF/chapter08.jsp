<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>사자의 서</title>
	<link href="<c:url value='/resources/css/ch08.css'/>" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script src="/resources/js/jquery-animate-css-rotate-scale.js" type="text/javascript"></script>
	<script src="<c:url value='/resources/js/ch08.js'/>"></script>	
	<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
	
	<script> $(function(){ init(); }); </script>
</head>
	<div id="wrapper">
		<!-- 8-1 -->
		<img class="background1" src="<c:url value='/resources/background/ch08/8_1_10.png'/>">
		
		<img id="water1" src="<c:url value='/resources/background/ch08/8_1_1.png'/>">
		
		<div id="structure">
			<img id="stairs" src="<c:url value='/resources/background/ch08/8_1_2.png'/>">
			<img id="pillars1" src="<c:url value='/resources/background/ch08/8_1_3.png'/>">
			<img id="altar" src="<c:url value='/resources/background/ch08/8_1_4.png'/>">
			<img id="statue1" src="<c:url value='/resources/background/ch08/8_1_5.png'/>">
			<img id="grass1" src="<c:url value='/resources/background/ch08/8_1_6.png'/>">
			<img id="grass2" src="<c:url value='/resources/background/ch08/8_1_7.png'/>">
			<img id="grass3" src="<c:url value='/resources/background/ch08/8_1_8.png'/>">
			<img id="deco1" src="<c:url value='/resources/background/ch08/8_1_9.png'/>">
		</div>
		
		<img id="boat" src="<c:url value='/resources/object/ch08/8_2_1.png'/>">
		
		<img id="la1" src="<c:url value='/resources/character/ch08/9_2.png'/>">
		<img id="la2" src="<c:url value='/resources/character/ch08/9_2.png'/>">
		<img id="user" src="<c:url value='/resources/character/ch08/5_4.png'/>">
		
		<!-- 8-2 -->
		<img class="background2" src="<c:url value='/resources/background/ch08/8_2_6.png'/>">
		<img id="star" src="<c:url value='/resources/background/ch08/8_2_5.png'/>">
		
		<img id="water2" src="<c:url value='/resources/background/ch08/8_2_3.png'/>">
		
		<!-- 8-3 -->
		<img id="rock" src="<c:url value='/resources/background/ch08/8_2_4.png'/>">
				
		<!-- throw -->
		<div id='spearTarget'></div>
		<div id='target1'></div>
		<div id='target2'></div>
		<input type='hidden' name='flag' value='false'>
		<div id='paper'><p>마우스를 클릭해 머리에 창을 던져 아펩을 처치하세요.</p></div>
		<img id="snakeAppear" src="<c:url value='/resources/object/ch08/01_뱀등장.webp'/>">
		<img id="snake1" src="<c:url value='/resources/object/ch08/02+1_뱀움직임.webp'/>">
		<img id="snake2" src="<c:url value='/resources/object/ch08/03+2.webp'/>">
		<img id="snake3" src="<c:url value='/resources/object/ch08/04.webp'/>">
		<img id="snakeDead" src="<c:url value='/resources/object/ch08/05_마지막맞고죽음.webp'/>">
		
		<img id="userArm1" src="<c:url value='/resources/character/ch08/1창던질준비.webp'/>">
		<img id="userArm2" src="<c:url value='/resources/character/ch08/2팔움직임.webp'/>">
		<img id="userArm3" src="<c:url value='/resources/character/ch08/3팔움직임.webp'/>">
		
		<img id="userArm4" src="<c:url value='/resources/character/ch08/5팔내리기.webp'/>">

    	<div id="panel">
			<img id="spear" src="<c:url value='/resources/object/ch08/spear.png'/>">
		</div>
		<img id="back" src="<c:url value='/resources/object/ch08/back.png'/>">
		
		<!-- 8-4 -->
		<img class="background3" src="<c:url value='/resources/background/ch08/8_3_10.png'/>">
		
		<img id="tree" src="<c:url value='/resources/background/ch08/8_3_9.webp'/>">
		<img id="grass4" src="<c:url value='/resources/background/ch08/8_3_8.webp'/>">
		<img id="ground" src="<c:url value='/resources/background/ch08/8_3_3.png'/>">
		<img id="pillars2" src="<c:url value='/resources/background/ch08/8_3_5.png'/>">
		<img id="statue2" src="<c:url value='/resources/background/ch08/8_3_6.png'/>">
		<img id="deco2" src="<c:url value='/resources/background/ch08/8_3_7.png'/>">
		<img id="grass5" src="<c:url value='/resources/background/ch08/8_3_4.webp'/>">
		<img id="flower" src="<c:url value='/resources/background/ch08/8_3_1.png'/>">
	</div>
	
	<div id="view">	
		<div id="menu">
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	
		<form method="post" action="<c:url value='/chapter08'/>">
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
			<audio id="bgm" preload="auto" src="/resources/bgm/ch08/bgm.mp3" loop="true" autobuffer></audio>
			<audio id="voice" preload="auto" src="/resources/bgm/ch08/8_${scene}_${index}_${flag}.wav"></audio>
			<input name="scene" type="hidden" value="${scene}"/>
			<input name="index" type="hidden" value="${index}"/>
			<input name="flag" 	type="hidden" value="${flag}"/>
			<input name="choice" type="hidden" value="${choice}"/>
			<input name="position" type="hidden" value="0"/>
		</form>
	</div>
</body>
</html>
