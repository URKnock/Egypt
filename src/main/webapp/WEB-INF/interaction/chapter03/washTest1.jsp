<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/washTest1.css'/>" rel="stylesheet" type="text/css"/>
<div id="dragSpot" class="circle droppable"></div>
<img src="../resources/object/ch03/paper.png" id="scroll"/>
<img src="../resources/object/ch03/주전자.png" id="kettleToClick"/>
<img src="../resources/object/ch03/주전자.png" id="kettle"/>
<img src="../resources/object/ch03/3_2_4.png" id="linen"/>
<img src="../resources/object/ch03/3_2.webp" id="water"/>
<img src="../resources/character/ch03/3_1.png" id="human" class="human"/>
<div id="dirty">
	<img src="../resources/object/ch03/침대.png" id="bed"/>
	<img src="../resources/object/ch03/3_2_1_1.png" id="dirt_head" class="dirt"/>
	<img src="../resources/object/ch03/3_2_1_2.png" id="dirt_body" class="dirt"/>
	<img src="../resources/object/ch03/3_2_1_3.png" id="dirt_bottom" class="dirt"/>
	<img src="../resources/object/ch03/3_2_1_4.png" id="dirt_leg" class="dirt"/>
</div>
<img src="../resources/character/ch03/paper_1.webp" id="servant">
<img src="../resources/object/ch03/none.png" id="paper">
<img src="../resources/object/ch03/shine.webp" id="shine">
<hr class="blinking" id="dragLine"></hr>
<script src="<c:url value='/resources/js/interaction/ch03/washTest1.js'/>"></script>