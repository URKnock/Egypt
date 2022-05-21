<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameSecond.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameSecond.js'/>"></script>
<script src="/resources/js/jquery-animate-css-rotate-scale.js" type="text/javascript"></script>
<img class="mandara1" src="<c:url value='/resources/object/ch05/pattern_0.png'/>">
<img class="mandara2" src="<c:url value='/resources/object/ch05/pattern1_악어.png'/>">
<div id="characters">
	<div id="character">
		<img class="mainC" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class="saja" src="<c:url value='/resources/character/ch05/숨셔창사자(38).webp'/>">
	</div>
</div>
<div id="mandara">
	<img class="m1" src="<c:url value='/resources/background/ch05/만다라2투명배경.png'/>">	
</div>
<div id="ants">
	<img class="ant1" src="<c:url value='/resources/object/ch05/im.png'/>">
	<img class="ant2" src="<c:url value='/resources/object/ch05/im.png'/>">
	<img class="ant3" src="<c:url value='/resources/object/ch05/im.png'/>">
	<img class="ant4" src="<c:url value='/resources/object/ch05/im.png'/>">
</div>
<div class="guide2" align="center">마우스로 클릭하여 벌레를 처치해주세요.</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/5_duat_set.mp3'/>"></audio>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/duat_wind.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>