<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameThird.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameThird.js'/>"></script>
<img class="mandara1" src="<c:url value='/resources/object/ch05/pattern_0.png'/>">
<img class="mandara2" src="<c:url value='/resources/object/ch05/pattern1_악어.png'/>">
<img class="m1" src="<c:url value='/resources/object/ch05/pattern2_벌레.png'/>">
<img class="m2" src="<c:url value='/resources/background/ch05/만다라3투명배경.png'/>">		
<div id="characters">
	<div id="character">
		<img class="mainC" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class="saja" src="<c:url value='/resources/character/ch05/숨셔창사자(38).webp'/>">
	</div>
</div>
<div id="bugs">
	<img class="bug1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="bug2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="bug3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="bug4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<div class="guide3" align="center">마우스로 클릭하여 풍뎅이를 처치해주세요.</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/5_duat_set.mp3'/>"></audio>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/duat_wind.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>