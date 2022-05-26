<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameStart2.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameFirst.js'/>"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<img class="mandara1" src="<c:url value='/resources/object/ch05/pattern_0.png'/>">
<div id="menu">
		<img id="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img id="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img id="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img id="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>	
</div>
<div id ="spears">
	<img class="spearno" src="<c:url value='/resources/background/ch05/창투명배경1.png'/>">
	<img class="spearno2" src="<c:url value='/resources/background/ch05/창투명배경1.png'/>">
	<img class="spearno3" src="<c:url value='/resources/background/ch05/창투명배경1.png'/>">
	<img class="spearno4" src="<c:url value='/resources/background/ch05/창투명배경1.png'/>">
</div>

<div id="characters">
	<div id="character">
		<img class="boat" src="<c:url value='/resources/object/ch05/배.png'/>">	
		<img class=	"saja" src="<c:url value='/resources/character/ch05/숨숴사자_좌(71).webp'/>">
		<img class=	"la" src="<c:url value='/resources/character/ch05/숨셔라(33).webp'/>">	
		<img class="spear" src="<c:url value='/resources/object/ch05/하얀창.png'/>">
	</div>
</div>
<div id="mandara">
	<img class="m1" src="<c:url value='/resources/background/ch05/만다라1투명배경.png'/>">
	
</div>
<div id="crocs">
	<img class="crocs1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<div id="crocs_imsi">
	<img class="crocsi1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocsi2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocsi3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocsi4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<div id="order"></div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/5_duat_set.mp3'/>"></audio>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/duat_wind.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>
<div class="guide2" align="center">마우스로 클릭하여 악어를 처치해주세요.</div>