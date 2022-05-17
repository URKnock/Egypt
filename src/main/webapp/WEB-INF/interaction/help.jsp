<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<c:url value='/resources/js/interaction/setting.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/css/interaction/setting.css'/>">

<div id="setting">
<div id="setting_container">
	<div>
		<img src="<c:url value='/resources/UI/Help/1.png'/>"/>
		도움말
	</div>
	<div>
		<div id="nav">
			<input type="button" value="콘텐츠 설명"/>
			<input type="button" value="작품 소개"/>
			<input type="button" value="맵 구조도"/>
			<input type="button" value="만든 이"/>
		</div>
		<div>
			<img src="<c:url value='/resources/UI/Help/10_1.png'/>"/>
		</div>
		<div>
		
		</div>
		<div>
			<img src="<c:url value='/resources/UI/Help/10_2.png'/>"/>
		</div>
	</div>
	<img id="setting_close" src="<c:url value='/resources/UI/Help/2.png'/>"/>
</div>
</div>