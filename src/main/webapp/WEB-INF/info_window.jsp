<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!--
	해당 jsp를 include해서 사용
	
	1. hover css (id가 active인 애들)
	<style>
		#active {
			filter: drop-shadow(0px 0px 0.5vw yellow);	
		}
		#active:hover {
			transform: scale(1.1);
		}
		#active:active {
			transform: scale(1.0);
		}
	</style>
	
	2. 정보창 띄우기
	show_info(index) 함수 사용 <- json의 인덱스
	
	3. 클릭 이벤트 예시
	function(this) {
		if(this.id == 'active') {
			this.id = 'inactive';
			
			show_info(index);
		}
	}
 -->

<script src="<c:url value='/resources/js/info_window.js'/>" type="text/javascript"></script>
<link rel="stylesheet" href="<c:url value='/resources/css/info_window.css'/>">
<div id="window">
	<div class="infoImg"></div>
	<div class="infoText">
		<h3 class="name">더미 텍스트</h3>
		<p class="content">
			더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트
		</p>
	</div>
	<div class="close" onclick="hide_info()">
		X
	</div>
</div>