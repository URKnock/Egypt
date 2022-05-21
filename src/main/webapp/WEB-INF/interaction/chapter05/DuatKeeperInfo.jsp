<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatKeeperInfo.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatKeeperInfo.js'/>"></script>
<div id="keeper">
	<div id="keeper">
	<img id="dansang" src="<c:url value='/resources/character/ch05/단상.png'/>"/>
	<img id="keepers" src="<c:url value='/resources/character/ch05/신관들.png'/>"/>
	</div>
</div>
<div id="characters">
	<div id="character">
		<img class="mainC_s" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class="mainC_k" src="<c:url value='/resources/character/ch05/5_Lc_k.png'/>">		
	</div>
</div>
<div class="guide" align="center">마우스로 클릭하여 주위를 둘러보세요.</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/5_duat_gateway.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>