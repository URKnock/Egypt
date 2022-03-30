<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>사자의 서</title>
	<link href="<c:url value='/resources/css/ch04.css'/>" rel="stylesheet" type="text/css"/>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script defer src="<c:url value='/resources/js/ch04.js'/>" type="text/javascript"></script>
</head>
<body onload="init();">
<div id="view">
<div id="wrap">
	<div id="warning">
		<div>최적화 되어있는 화면 비율을 벗어났습니다.<br>화면 비율을 조정해주세요</div>
	</div>
	
	<div id="background">
		<c:if test="${page ne null}">
			<jsp:include page="./interaction/chapter04/${page}"/>
		</c:if>
		<c:if test="${page eq null}">
			<jsp:include page="./interaction/chapter04/ch04_0_1.jsp"/>
		</c:if>
	</div>
	
	<div id="menu" class="${page}">
		<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>

	<form method="post" action="<c:url value='/chapter04'/>">
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
	<input name="scene" type="hidden" value="${scene}"/>
	<input name="index" type="hidden" value="${index}"/>
	<input name="flag" 	type="hidden" value="${flag}"/>
	<input name="choice" type="hidden" value="${choice}"/>
	</form>
</div>
</div>

</body>
</html>
