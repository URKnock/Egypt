<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='../../resources/js/ch13.js'/>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch13/ch13_1.css'/>"/>
<audio id="effect2" preload="auto" src=""></audio>
<audio id="pillarLoop" preload="auto" src="/resources/bgm/ch13/donkey_pillar.mp3" loop="true" autobuffer></audio>

<div id="interact" onload="init();">
	<img id="arrow" style="z-index: 10;" class="pikachu"
		onClick="location.href='../chapter13part2'" src="<c:url value='/resources/object/ch11/arrow.png'/>" />
	<img id="human" style="z-index: 6;" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
	
	<img id="wall" style="z-index: 5;" src="<c:url value='/resources/background/ch13/당나귀1_배경1.png'/>"/>
	<img id="ground" style="z-index: 5;" src="<c:url value='/resources/background/ch13/당나귀1_땅.png'/>"/>
	<img id="ceiling" style="z-index: 6;" src="<c:url value='/resources/background/ch13/당나귀1_배경3.png'/>"/>
	
	<!-- 기둥 -->
	<img id="pillar1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/기둥1.webp'/>"/>
	<img id="pillar2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/기둥2.webp'/>"/>
	<img id="pillar3" style="z-index: 5;" src="<c:url value='/resources/object/ch13/기둥1.webp'/>"/>
	
	<img id="blood" style="z-index: 5;" src="<c:url value='/resources/object/ch13/피1.png'/>"/>
	<!-- 거미줄 -->
	<img id="web1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/상단-거미줄1.webp'/>"/>
	<img id="web2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/상단-거미줄2.webp'/>"/>
	<img id="web3" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/상단-거미줄3.webp'/>"/>
	<img id="web4" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/상단-거미줄4.webp'/>"/>
	
	<img id="web5" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/하단-거미줄5.webp'/>"/>
	<img id="web6" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/하단-거미줄6.webp'/>"/>
	<img id="web7" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/하단-거미줄7.webp'/>"/>
	<img id="web8" style="z-index: 5;" src="<c:url value='/resources/object/ch13/web/하단-거미줄8.webp'/>"/>
	
	<!-- 잘린 목 -->
	<img id="head1" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목1.webp'/>"/>
	<img id="head2" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목2.webp'/>"/>
	<img id="head3" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목3.webp'/>"/>
	<img id="head4" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목4.webp'/>"/>
	<img id="head5" style="z-index: 5;" src="<c:url value='/resources/object/ch13/목5.webp'/>"/>
	
	<!-- 캐릭터 -->
	<img id="devil" style="z-index: 6;" class="select pikachu" src="<c:url value='/resources/character/ch13/당나귀_악마_기본.webp'/>"/>
	<img id="donkey" style="z-index: 6;" src="<c:url value='/resources/character/ch13/당나귀_기본.webp'/>"/>
	
</div>

<script>
		
</script>