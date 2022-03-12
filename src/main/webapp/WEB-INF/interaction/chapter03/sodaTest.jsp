<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/sodaTest.css'/>" rel="stylesheet" type="text/css"/>
<img src="../resources/object/ch03/paper.png" id="scroll"/>
<div class="clickable"><img src="../resources/object/ch03/pot.png" id="potToClick"/></div>
<div class="clickable"><img src="../resources/object/ch03/bandage.png" id="bandageToClick"/></div>
<div class="clickable"><img src="../resources/object/ch03/niddle.png" id="niddleToClick"/></div>
<img src="../resources/object/ch03/pot.png" id="pot"/>
<img src="../resources/object/ch03/bandage.png" id="bandage"/>
<img src="../resources/object/ch03/niddle.png" id="niddle"/>
<img src="../resources/object/ch03/soda_1.png" id="soda_pot"/>
<img src="../resources/object/ch03/침대.png" id="bed"/>
<img src="/resources/object/ch03/organ_1.png" id="organ1"/>
<img src="../resources/character/ch03/3_3.png" id="human_soda"/>
<img src="../resources/character/ch03/3_3.png" id="human" class="human"/>
<img src="../resources/character/ch03/3_3_1.png" id="human_cover" class="droppable"/>
<img src="../resources/character/ch03/paper_1.webp" id="servant">
<img src="../resources/object/ch03/paper.png" id="paper">
<canvas></canvas>
<script src="<c:url value='/resources/js/interaction/ch03/sodaTest.js'/>"></script>