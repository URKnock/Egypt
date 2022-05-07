<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<c:url value='/resources/js/jquery-ui-1.13.1/jquery-ui.min.js'/>"></script>
<script src="<c:url value='/resources/js/interaction/setting.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/js/jquery-ui-1.13.1/jquery-ui.min.css'/>">
<link rel="stylesheet" href="<c:url value='/resources/css/interaction/setting.css'/>">

<div id="setting">
<div id="setting_container">
	<div>
		<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>	<!-- 환경설정 아이콘 -->
		환경설정
	</div>
	<div>
		<div class="audioSetting">
			<div>
				◆ 배경음악
				<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>	<!-- 초기화 아이콘 -->
			</div>
			<img src="<c:url value='/resources/UI/Menu/9_7_1.png'/>"/>	<!-- 아누비스 입벌림 -->
			<div class="audioSlider"></div>
			<img src="<c:url value='/resources/UI/Menu/9_7_2.png'/>"/>	<!-- 아누비스 입닫음 -->
		</div>
		<div class="audioSetting">
			<div>
				◆ 효과음
				<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>	<!-- 초기화 아이콘 -->
			</div>
			<img src="<c:url value='/resources/UI/Menu/9_7_1.png'/>"/>	<!-- 아누비스 입벌림 -->
			<div class="audioSlider"></div>
			<img src="<c:url value='/resources/UI/Menu/9_7_2.png'/>"/>	<!-- 아누비스 입닫음 -->
		</div>
		<div class="audioSetting">
			<div>
				◆ 나레이션
				<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>	<!-- 초기화 아이콘 -->
			</div>
			<img src="<c:url value='/resources/UI/Menu/9_7_1.png'/>"/>	<!-- 아누비스 입벌림 -->
			<div class="audioSlider"></div>
			<img src="<c:url value='/resources/UI/Menu/9_7_2.png'/>"/>	<!-- 아누비스 입닫음 -->
		</div>
		<input type="button" value="저장하기"/>
	</div>
</div>
</div>