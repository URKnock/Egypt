<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/loading.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/loading.js'/>"></script>
<script>
<c:forEach items="${names}" var="name">
	lists.push("${name}"); 
</c:forEach>
</script>
<c:if test="${chapter eq 3}">
	<audio preload="auto" src="<c:url value='/resources/bgm/ch03/bgm.mp3'/>"></audio>
</c:if>
<c:forEach items="${webps}" var="webp">
	<link rel="preload" as="image" type="image/webp" href="${webp}" crossorigin>
</c:forEach>
<c:forEach items="${wavs}" var="wav">
	<audio preload="auto" src="${wav}"></audio>
</c:forEach>
</head>
<body onload="init();">
<div>
	<img id="title" src="<c:url value='/resources/background/load/title${chapter}.png'/>">
	<img id="character" src="<c:url value='/resources/background/load/ch${chapter}.png'/>">
</div>
<img src=""/>
<input type="hidden" value="${chapter}"/>
</body>
</html>