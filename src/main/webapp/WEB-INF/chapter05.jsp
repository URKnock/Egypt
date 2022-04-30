<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/info_window.css'/>">
<link href="<c:url value='/resources/css/ch05.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch05.js'/>"></script>
<script src="<c:url value='/resources/js/interaction/info_window.js'/>"></script>
<script> $(function(){ init(); }); </script>
</head>
<body>
<div id="background">
	<div id="menu">
		<img id="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img id="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img id="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img id="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>	
	</div>
	<div id="earth">
	<img id="earth" src="<c:url value='/resources/background/ch05/5_1.png'/>">
	</div>
	<div id="water">
		<img id="water1" src="<c:url value='/resources/background/ch05/5_4.png'/>">
		<img id="water2" src="<c:url value='/resources/background/ch05/5_3.png'/>">
		<img id="water3" src="<c:url value='/resources/background/ch05/5_2.png'/>">
	</div>
	<div id="chs">
	<img id="user1" src="<c:url value='/resources/character/ch05/5_2.png'/>">
	<img id="user2" src="<c:url value='/resources/character/ch05/5_1.png'/>">
	<img id="la" src="<c:url value='/resources/character/ch05/la_b21.png'/>">
	<img id="la_b2" src="<c:url value='/resources/character/ch05/la_b2.png'/>">
	<img id="nol" src="<c:url value='/resources/object/ch05/nol.png'/>">
	</div>
</div>
<div id="page">
	<c:if test="${page ne null}">
		<jsp:include page="./interaction/chapter05/${page}"/>
	</c:if>
</div>
<form method="post" action="<c:url value='/chapter05'/>">
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
			<p>${dialogue.content}</p>
			<img />
		</div>
	</div>
	<c:if test="${dialogue.choice ne null}">
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
<input name="scene" type="hidden" value="${scene}"/>
<input name="index" type="hidden" value="${index}"/>
</form>
</body>
</html>
