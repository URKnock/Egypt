<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/sodaTest.css'/>" rel="stylesheet" type="text/css"/>
<img src="../resources/object/ch03/dish.png" id="scroll"/>
<div id="click1" class="clickable"><img src="../resources/object/ch03/pot_rotate.webp" id="pot"/></div>
<div id="click2" class="clickable"><img src="../resources/object/ch03/bandage.png" id="bandage"/></div>
<div id="click3" class="clickable"><img src="../resources/object/ch03/niddle.png" id="niddle"/></div>
<img src="../resources/object/ch03/pot.png" id="potToClick"/>
<img src="../resources/object/ch03/bandage.png" id="bandageToClick"/>
<img src="../resources/object/ch03/niddle.png" id="niddleToClick"/>
<img src="../resources/object/ch03/침대.png" id="bed"/>
<img src="/resources/object/ch03/organ_1.png" id="organ1"/>
<img src="../resources/character/ch03/3_3.png" id="human_soda"/>
<img src="../resources/character/ch03/3_3.png" id="human_band"/>
<img src="../resources/character/ch03/3_3.png" id="human" class="human"/>
<img src="../resources/character/ch03/3_3_1.png" id="human_cover" class="droppable"/>
<img src="../resources/character/ch03/servant_dish_soda.webp" id="servant">
<img src="../resources/object/ch03/none.png" id="paper">
<c:forEach var="i" begin="1" end="7">
	<div id="hole${i}" class="hole holes"></div>
</c:forEach>
<canvas id="canvas1"></canvas>
<canvas id="canvas2"></canvas>
<script src="<c:url value='/resources/js/interaction/ch03/sodaTest.js'/>"></script>