<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='../../resources/js/interaction/ch13/ch13_2.js'/>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch13/ch13_2.css'/>"/>
<audio id="fireLoop" preload="auto" src="/resources/bgm/ch13/donkey2_fire.MP3"></audio>

<div id="interact" onload="init();">
	<img id="arrow" style="z-index: 10;" class="pikachu"
		onClick="location.href='../chapter13part3'" src="<c:url value='/resources/object/ch11/arrow.png'/>" />
	<img id="arrow_pre" style="z-index: 10;" class="pikachu" 
		onClick="location.href='../chapter13'" src="<c:url value='/resources/object/ch11/arrow_pre.png'/>"/>
	<img id="human" style="z-index: 6;" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
	
	<img id="wall" style="z-index: 5;" src="<c:url value='/resources/background/ch13/당나귀2_배경1.png'/>"/>
	<img id="ground" style="z-index: 5;" src="<c:url value='/resources/background/ch13/당나귀2_배경2.png'/>"/>
	<img id="ceiling" style="z-index: 6;" src="<c:url value='/resources/background/ch13/당나귀2_배경3.png'/>"/>
	
	<!-- 바닥 -->
	<img id="spike" style="z-index: 6;" src="<c:url value='/resources/background/ch13/당나귀2_창.png'/>"/>
	<img id="fire" style="z-index: 6;" src="<c:url value='/resources/object/ch13/불.webp'/>"/>
	<img id="web1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/거미줄9.webp'/>"/>
	<img id="web2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/거미줄10.webp'/>"/>
	
	<!-- 캐릭터 -->
	<img id="devil" style="z-index: 5;" class="select pikachu" src="<c:url value='/resources/character/ch13/장면2_악마_기본.webp'/>"/>
	<img id="rope" style="z-index: 5;" class="select pikachu" src="<c:url value='/resources/character/ch13/밧줄_기본.webp'/>"/>
	<img id="donkey" style="z-index: 5;" class="select pikachu" src="<c:url value='/resources/character/ch13/당나귀밧줄_기본.webp'/>"/>
	
	<img id="head2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목2.webp'/>"/>
	<img id="head3" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목3.webp'/>"/>
	<img id="head1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목1.webp'/>"/>
</div>

<script>
		
</script>