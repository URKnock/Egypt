<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='../../resources/js/interaction/ch12/ch12_2.js'/>" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/interaction/ch12/ch12_2.css'/>"/>

<div id="interact" onload="init();">
	<img id="arrow" style="z-index: 10;" class="pikachu"
		onClick="location.href='../chapter12part3'" src="<c:url value='/resources/object/ch11/arrow.png'/>" />
	<img id="arrow_pre" style="z-index: 10;" class="pikachu" 
		onClick="location.href='../chapter12'" src="<c:url value='/resources/object/ch11/arrow_pre.png'/>"/>
	<img id="human" style="z-index: 7;" src="<c:url value='/resources/character/ch11/사자.webp'/>"/>
	
	<img id="pillar" style="z-index: 6;" src="<c:url value='/resources/background/ch12/page2기둥.png'/>"/>
	<img id="ground" style="z-index: 5;" src="<c:url value='/resources/background/ch12/땅.png'/>"/>
	<img id="river" style="z-index: 5;" src="<c:url value='/resources/background/ch12/강.png'/>"/>
	<img id="river2" style="z-index: 5;" src="<c:url value='/resources/background/ch12/강.png'/>"/>
	
	<img id="jail" style="z-index: 6;" class="select" src="<c:url value='/resources/background/ch12/제1철창.png'/>"/>
	<img id="anubis" style="z-index: 6;" src="<c:url value='/resources/background/ch12/아누비스동상.png'/>"/>
	
	<img id="sinner1" style="z-index: 4;" class="sinner" src="<c:url value='/resources/object/ch12/단지진사람(44).webp'/>"/>
	<img id="sinner2" style="z-index: 4;" class="sinner" src="<c:url value='/resources/object/ch12/단지진사람(44).webp'/>"/>
	<img id="sinner3" style="z-index: 4;" class="sinner" src="<c:url value='/resources/object/ch12/단지진사람(44).webp'/>"/>
	<img id="sinner4" style="z-index: 4;" class="sinner" src="<c:url value='/resources/object/ch12/단지진사람(44).webp'/>"/>
</div>

<script>
		
</script>