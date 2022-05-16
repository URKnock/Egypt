<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/loading.css'/>"/>
<script src="<c:url value='/resources/js/jquery/jquery-3.6.0.min.js'/>"></script>
<script src="<c:url value='/resources/js/loading.js'/>"></script>
<script>
<c:forEach items="${image}" var="img">
	lists.push("${img}"); 
</c:forEach>
</script>
<c:if test="${chapter eq 3}">
	<link rel="prerender" href="<c:url value='/chapter03'/>"/>
	<audio preload="auto" src="<c:url value='/resources/bgm/3_forever.mp3'/>"></audio>
</c:if>
<c:forEach items="${js}" var="j">
	<link rel="prefetch" href="${j}"/>
</c:forEach>
<c:forEach items="${css}" var="c">
	<link rel="prefetch" as="style" href="${c}"/>
</c:forEach>
<c:forEach items="${webp}" var="w">
	<link rel="prefetch" as="image" type="image/webp" href="${w}" crossorigin/>
</c:forEach>
<c:forEach items="${mp3}" var="m">
	<audio preload="auto" src="${m}"></audio>
</c:forEach>
</head>
<body onload="init();">
<div>
	<img id="title" src="<c:url value='/resources/background/load/title${chapter}.png'/>">
	<img id="character" src="<c:url value='/resources/background/load/${chapter}.webp'/>">
</div>
<img src=""/>
<input type="hidden" value="${chapter}"/>
</body>
</html>