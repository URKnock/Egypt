<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/ch00.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/ch01.js'/>"></script>
<script> $(function(){ init(); }); </script>
</head>
<body>
<div>
<video width="100%" preload="auto" style="pointer-events: none;">
	<source type="video/mp4" src="<c:url value='/resources/background/ch01/intro.mp4'/>">
</video>
</div>
</body>
</html>
