<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>ch09</title>
<link href="<c:url value='/resources/css/ch09.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/interaction/ch09/ch09_1.js'/>"></script>
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
	<div class="next">
<a href="<c:url value='/chapter09_2' />" data-transition="fade">
	<img id="next" src="<c:url value='/resources/UI/Menu/9_7_1.png'/>"/>
	</a>
	</div>
</div>
<div id="keeper">
	<div id="keeper">
	<img id="keepers" src="<c:url value='/resources/Character/ch09/1층 관문신1.webp'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
	<img id="c1" src="<c:url value='/resources/Character/ch09/사자.webp'/>"/>
	<img id="c2" src="<c:url value='/resources/Character/ch09/1층 공물 노예1.webp'/>"/>
	<img id="c3" src="<c:url value='/resources/Character/ch09/1층 공물1.webp'/>"/>

	</div>
</div>

<!-- 모달 -->
<div class="modal">
  <div class="modal_content" 
       title="클릭하면 창이 닫힙니다.">
    <img class="info33" id="info33" src='<c:url value="${info33.img}"/>'/> 
  </div>
  </div>
  
<!-- <form method="post" action="<c:url value='/chapter09'/>">
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
</form> -->
</body>
</html>
