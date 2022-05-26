<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<c:url value='/resources/js/interaction/shabti_new.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/css/interaction/shabti.css'/>">

<div id="shabti">
<div id="shabti_container">
	<div>
		<div id="shabti_nav">
			<div id="shabti_title">
				<img src="<c:url value='/resources/UI/Shabti/2.png'/>"/>
				단어장
			</div>
			<div>
				<input type="button" name="1" value="영생의 준비1"/>
			</div>
			<div>
				<input type="button" name="2" value="영생의 준비2"/> 
				<img class="locked" src="<c:url value='/resources/UI/Shabti/자물쇠.png'/>"/>	
			</div>
			<div>
				<input type="button" name="3" value="입을 여는 의식"/> 
				<img class="locked" src="<c:url value='/resources/UI/Shabti/자물쇠.png'/>"/>
			</div>
			<div>
				<input type="button" name="4" value="두아트"/>
				<img class="locked" src="<c:url value='/resources/UI/Shabti/자물쇠.png'/>"/>	
			</div>
			<div>
				<input type="button" name="5" value="오시리스 법정"/>
				<img class="locked" src="<c:url value='/resources/UI/Shabti/자물쇠.png'/>"/>	
			</div>
			<div>
				<input type="button" name="6" value="천국"/>
				<img class="locked" src="<c:url value='/resources/UI/Shabti/자물쇠.png'/>"/>	
			</div>
			<div>
				<input type="button" name="7" value="지옥"/>
				<img class="locked" src="<c:url value='/resources/UI/Shabti/자물쇠.png'/>"/>	
			</div>
			<input type="hidden" value="1"/>
		</div>
		<div id="shabti_left" class="shabti_arrow">
			<img src="<c:url value='/resources/UI/Help/10_1.png'/>"/>
		</div>
		<div id="shabti_content">
			<img src=""/>
			<div id="content_locked">
				준비중입니다
			</div>
		</div>
		<div id="shabti_right" class="shabti_arrow">
			<img src="<c:url value='/resources/UI/Help/10_2.png'/>"/>
		</div>
	</div>
	<img id="shabti_close" src="<c:url value='/resources/UI/Help/2.png'/>"/>
</div>
</div>