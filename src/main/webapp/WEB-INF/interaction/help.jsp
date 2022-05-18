<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<c:url value='/resources/js/interaction/help.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/css/interaction/help.css'/>">

<div id="help">
<div id="help_container">
	<div>
		<div id="help_nav">
			<div id="help_title">
				<img src="<c:url value='/resources/UI/Help/1.png'/>"/>
				도움말
			</div>
			<input type="button" name="1" value="콘텐츠 설명"/>
			<input type="button" name="2" value="작품 소개"/>
			<input type="button" name="3" value="맵 구조도"/>
			<input type="button" name="4" value="만든 이"/>
			<input type="hidden" value="1"/>
		</div>
		<div id="help_left" class="help_arrow">
			<img src="<c:url value='/resources/UI/Help/10_1.png'/>"/>
		</div>
		<div id="help_content">
			<img src=""/>
		</div>
		<div id="help_right" class="help_arrow">
			<img src="<c:url value='/resources/UI/Help/10_2.png'/>"/>
		</div>
	</div>
	<img id="help_close" src="<c:url value='/resources/UI/Help/2.png'/>"/>
</div>
</div>