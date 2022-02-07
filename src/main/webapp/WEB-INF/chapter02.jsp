<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/ch02.css'/>"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

</head>
<body>
	<a style="position: absolute;" href="<c:url value='/chapter03'/>">진주님이 만드실 홈 파트</a>
	<div id="menu">
		<div>
			<img src="<c:url value='/resources/UI/Menu/1.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/2.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/3.png'/>"/>
			<img src="<c:url value='/resources/UI/Menu/4.png'/>"/>
		</div>
	</div>
	<div>
		<img class="chapters" style="top: 340; left: 300; z-index: 1;" src="<c:url value='/resources/object/ch02/2_5.png'/>"/>
		<img id="chap1" class="chapters island-move" src="<c:url value='/resources/object/ch02/2_1.png'/>"/>
		<img id="chap2" class="chapters island-move" src="<c:url value='/resources/object/ch02/2_2.png'/>"/>
		<img id="chap3" class="chapters island-move" src="<c:url value='/resources/object/ch02/2_3.png'/>"/>
		<img id="chap4" class="chapters island-move" src="<c:url value='/resources/object/ch02/2_4.png'/>"/>
		
		<img id="chap1view" class="chapViews" src="<c:url value='/resources/object/ch02/2_6.png'/>"/>
		<img id="chap2view" class="chapViews" src="<c:url value='/resources/object/ch02/2_7.png'/>"/>
		
		<img id="arrow" style="position: absolute; top: 340; left: 1480;" src="<c:url value='/resources/object/ch02/2_9.png'/>"/>
	</div>
	<div id="background"></div>
	
	<script>
		$(document).ready(function(){
			$('.chapViews').hide();
		});
		
		$(function() { // 런타임 동작
			$('.island-move').mouseenter(function() {
				console.log("마우스 오버!");
				var chapName = $(this).attr("id") + 'view'; 
				$('#' + chapName).show();
				$('#' + chapName).removeClass("fade-out");
				$('#' + chapName).addClass("fade-in");
			});
			
			$('.island-move').mouseleave(function() {
				console.log("마우스 포인터가 떠남");
				var chapName = $(this).attr("id") + 'view'; 
				$('#' + chapName).removeClass("fade-in");
				$('#' + chapName).addClass("fade-out");
			});
		});
	</script>
</body>
</html>
