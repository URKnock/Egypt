<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>사자의 서</title>
	<link href="<c:url value='/resources/css/ch08.css'/>" rel="stylesheet" type="text/css"/>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script src="/resources/js/jquery-animate-css-rotate-scale.js" type="text/javascript"></script>
	<script src="<c:url value='/resources/js/ch08.js'/>"></script>
	
	<script> $(function(){ init(); }); </script>
</head>
<body>
	<div id="wrapper">
		<%-- 8-1 --%>
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
		
		<img id="la1" src="<c:url value='/resources/Character/ch08/9_2.png'/>">
		<img id="la2" src="<c:url value='/resources/Character/ch08/9_2.png'/>">
		<img id="user" src="<c:url value='/resources/Character/ch08/5_4.png'/>">
		
		<%-- 8-2 --%>
		<img class="background2" src="<c:url value='/resources/background/ch08/8_2_6.png'/>">
		<img id="star" src="<c:url value='/resources/background/ch08/8_2_5.png'/>">
		
		<img id="water2" src="<c:url value='/resources/background/ch08/8_2_3.png'/>">
		
		<%-- 8-3 --%>
		<img id="rock" src="<c:url value='/resources/background/ch08/8_2_4.png'/>">
		
		<%-- 파일 달라고 해야함 --%>
		<img id="paper" src="<c:url value='/resources/object/ch08/paper.png'/>">
		<img id="snake" src="<c:url value='/resources/object/ch08/8_2_2.png'/>">
		
		<%-- 8-4 --%>
		<img class="background3" src="<c:url value='/resources/background/ch08/8_3_10.png'/>">
		
		<img id="tree" src="<c:url value='/resources/background/ch08/8_3_9.png'/>">
		<img id="grass4" src="<c:url value='/resources/background/ch08/8_3_8.png'/>">
		<img id="ground" src="<c:url value='/resources/background/ch08/8_3_3.png'/>">
		<img id="pillars2" src="<c:url value='/resources/background/ch08/8_3_5.png'/>">
		<img id="statue2" src="<c:url value='/resources/background/ch08/8_3_6.png'/>">
		<img id="deco2" src="<c:url value='/resources/background/ch08/8_3_7.png'/>">
		<img id="grass5" src="<c:url value='/resources/background/ch08/8_3_4.png'/>">
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
			<div id="dialogue">
				<img src='<c:url value="${dialogue.image}"/>'/>
				<div id="scene">
					<div id="title">
						<div>${dialogue.name}</div>
						<c:if test="${dialogue.nickname ne '없음'}">
							<div>${dialogue.nickname}</div>
						</c:if>
					</div>
					<div id="content">
						<p id="con">${dialogue.content}</p>
						<img />
					</div>
				</div>
				<input name="scene" type="hidden" value="${scene}"/>
				<input name="index" type="hidden" value="${index}"/>
				<input name="position" type="hidden" value="0"/>
			</div>
		</form>
	</div>
</body>
</html>
