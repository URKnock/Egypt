<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatLast.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatLast.js'/>"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<img class="mandaras" src="<c:url value='/resources/object/ch05/수정완료전체패턴.png'/>">
<img class="mandara1" src="<c:url value='/resources/object/ch05/pattern_0.png'/>">
<img class="mandara2" src="<c:url value='/resources/object/ch05/pattern1_악어.png'/>">
<img class="m1" src="<c:url value='/resources/object/ch05/pattern2_벌레.png'/>">
<img class="m2" src="<c:url value='/resources/object/ch05/pattern3_풍뎅이.png'/>">	
<div id="snakemandara">
<img class="s1" src="<c:url value='/resources/object/ch05/pattern4_뱀.png'/>">
</div>

<div id="keeper">
	<div id="keeper">
		<img class="keepers" src="<c:url value='/resources/character/ch05/단상.png'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
		<img class="boat" src="<c:url value='/resources/object/ch05/배.png'/>">	
		<img class=	"la" src="<c:url value='/resources/character/ch05/숨셔라(33).webp'/>">	
		<img class="saja" src="<c:url value='/resources/character/ch05/숨셔창사자(38).webp'/>">		
	</div>
</div>

<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/5_duat_gateway.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>