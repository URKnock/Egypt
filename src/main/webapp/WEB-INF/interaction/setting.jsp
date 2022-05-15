<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<c:url value='/resources/js/jquery/jquery-ui.min.js'/>"></script>
<script src="<c:url value='/resources/js/interaction/setting.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/js/jquery/jquery-ui.min.css'/>">
<link rel="stylesheet" href="<c:url value='/resources/css/interaction/setting.css'/>">

<div id="setting">
<div id="setting_container">
	<div>
		<img src="<c:url value='/resources/UI/Menu/setting_1.png'/>"/>
		환경설정
	</div>
	<div>
		<div class="audioSetting">
			<div>
				◆ 배경음악
				<img src="<c:url value='/resources/UI/Menu/setting_2.png'/>"/>
			</div>
			<img src="<c:url value='/resources/UI/Menu/setting_3.png'/>"/>
			<div class="audioSlider"></div>
			<img src="<c:url value='/resources/UI/Menu/setting_4.png'/>"/>
		</div>
		<div class="audioSetting">
			<div>
				◆ 효과음
				<img src="<c:url value='/resources/UI/Menu/setting_2.png'/>"/>
			</div>
			<img src="<c:url value='/resources/UI/Menu/setting_3.png'/>"/>
			<div class="audioSlider"></div>
			<img src="<c:url value='/resources/UI/Menu/setting_4.png'/>"/>
		</div>
		<div class="audioSetting">
			<div>
				◆ 나레이션
				<img src="<c:url value='/resources/UI/Menu/setting_2.png'/>"/>
			</div>
			<img src="<c:url value='/resources/UI/Menu/setting_3.png'/>"/>
			<div class="audioSlider"></div>
			<img src="<c:url value='/resources/UI/Menu/setting_4.png'/>"/>
		</div>
		<input type="button" value="저장하기"/>
	</div>
	<img id="setting_close" src="<c:url value='/resources/UI/Shabti/3.png'/>"/>
</div>
</div>