<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='../../resources/js/interaction/ch13/ch13_3.js'/>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch13/ch13_3.css'/>"/>
<audio id="effect2" preload="auto" src=""></audio>
<audio id="pillarLoop" preload="auto" src="/resources/bgm/ch13/donkey_pillar.mp3" loop="true" autobuffer></audio>

<div id="interact" onload="init();">
	<img id="arrow_pre" style="z-index: 10;" class="pikachu" 
		onClick="location.href='../chapter13part2'" src="<c:url value='/resources/object/ch11/arrow_pre.png'/>"/>
	<img id="human" style="z-index: 6;" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
	
	<img id="tree" style="z-index: 5;" src="<c:url value='/resources/background/ch13/장면3_나무.webp'/>"/>
	<img id="wall" style="z-index: 5;" src="<c:url value='/resources/background/ch13/당나귀3_배경1.png'/>"/>
	<img id="spear1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/당나귀창_1.webp'/>"/>
	<img id="spear2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/당나귀창_2.webp'/>"/>
	
	<img id="ground" style="z-index: 5;" src="<c:url value='/resources/background/ch13/당나귀1_땅.png'/>"/>
	<img id="ceiling" style="z-index: 6;" src="<c:url value='/resources/background/ch13/당나귀3_배경3.png'/>"/>
	<img id="horus" style="z-index: 6;" src="<c:url value='/resources/background/ch13/장면3_호루스.webp'/>"/>
	
	<!-- 사물 -->
	<img id="pillar1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/기둥2.webp'/>"/>
	<img id="pillar2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/기둥1.webp'/>"/>
	
	<img id="blood1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/피2.png'/>"/>
	<img id="blood2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/피3.png'/>"/>
	
	<img id="web1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/거미줄9.webp'/>"/>
	<img id="web2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/거미줄10.webp'/>"/>
	
	<!-- 캐릭터 -->
	<img id="donkey1" style="z-index: 6;" src="<c:url value='/resources/character/ch13/당나귀화사자_1.webp'/>"/>
	<img id="donkey2" style="z-index: 6;" src="<c:url value='/resources/character/ch13/당나귀화사자_2.webp'/>"/>
	<img id="donkey3" style="z-index: 6;" src="<c:url value='/resources/character/ch13/당나귀화사자_3.webp'/>"/>
	<img id="devil" style="z-index: 6;" class="select pikachu" src="<c:url value='/resources/character/ch13/악마3_기본.webp'/>"/>
	
</div>

<script>
		
</script>