<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/DuatGameStart2.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/DuatGameStart2.js'/>"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>


<div id="characters">
	<div id="character">
		<img class="saja" src="<c:url value='/resources/character/ch05/5_2.png'/>">
		<img class="mainC" src="<c:url value='/resources/character/ch05/la_b.png'/>">
		<img class="spear" src="<c:url value='/resources/object/ch05/spear.png'/>">
	</div>
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
<div class="guide" align="center">마우스로 클릭하여 악어를 처치해주세요.</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/5_duat_set.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>