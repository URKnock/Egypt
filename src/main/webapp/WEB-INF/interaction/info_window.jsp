<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<c:url value='/resources/js/interaction/info_window.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/css/interaction/info_window.css'/>">

<div class="info_back"></div>
<div id="window">
	<img src="<c:url value='/resources/UI/Info/info_back.png'/>"/>
	<div class="infoImg">
		<img src="<c:url value='/resources/UI/Info/4_3.png'/>">
	</div>
	<div class="infoText">
		<div class="top">
			<div class="name">페세슈카프</div>
			<div class="tag">
				<img src="<c:url value='/resources/UI/Dialogue/name_tag_3.png'/>">
				<div>도구</div>
			</div>
		</div>
		<p class="content">
			토드 신을 상징하며 위대한 마법의 주문, 마법의 말이라는 뜻을 가지고 있다.
			입을 여는 의식을 진행할 때 사용하는 가장 중요한 도구이다.
		</p>
	</div>
	<div class="close" onclick="hide_info()"></div>
</div>
