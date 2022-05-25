<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch05/crocAttack.css'/>" rel="stylesheet" type="text/css"/>
<script src="<c:url value='/resources/js/interaction/ch05/crocAttack.js'/>"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/dialogue.css'/>"/>
<script src="<c:url value='/resources/js/dialogue.js'/>"></script>
<div id="keeper">
	<div id="keeper">
	<img id="keepers" src="<c:url value='/resources/character/ch09/9_12.png'/>"/>
	</div>
</div>
	<%-- <div id="menu">
		<img id="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img id="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img id="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img id="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>	
</div> --%>
<div id="characters">
	<div id="character">
		<img class="chs" src="<c:url value='/resources/character/ch05/쫄아배통.webp'/>">
	</div>
</div>
<div id="crocs">
	<img class="crocs1" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs2" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs3" src="<c:url value='/resources/object/ch05/none.png'/>">
	<img class="crocs4" src="<c:url value='/resources/object/ch05/none.png'/>">
</div>
<script src="<c:url value='/resources/js/sound.js'/>"></script>
<audio id="bgm" preload="auto" loop="true" autobuffer src="<c:url value='/resources/bgm/ch05/duat_wind.mp3'/>"></audio>
<audio id="voice" preload="auto" src="/resources/bgm/ch05/5_${scene}_${index}_${flag}.mp3"></audio>