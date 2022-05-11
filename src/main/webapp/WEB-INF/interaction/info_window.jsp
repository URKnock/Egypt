<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<c:url value='/resources/js/interaction/info_window.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/css/interaction/info_window.css'/>">

<div class="info_back"></div>
<div id="window">
	<div class="infoImg"></div>
	<div class="infoText">
		<h3 class="name">더미 텍스트</h3>
		<p class="content">
			더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트
		</p>
	</div>
	<div class="close" onclick="hide_info()">ｘ</div>
</div>
