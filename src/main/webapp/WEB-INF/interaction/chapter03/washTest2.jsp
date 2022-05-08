<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/washTest2.css'/>" rel="stylesheet" type="text/css"/>
<div id="dragSpot" class="circle droppable"></div>
<img src="../resources/object/ch03/paper.png" id="scroll"/>
<img src="../resources/object/ch03/주전자.png" id="kettleToClick"/>
<img src="../resources/object/ch03/주전자.png" id="kettle"/>
<img src="../resources/object/ch03/3_2_4.png" id="linen"/>
<img src="../resources/object/ch03/3_2.webp" id="water"/>
<img src="../resources/character/ch03/3_4_2.png" id="hum" class="human"/>
<img src="../resources/object/ch03/침대.png" id="bed"/>
<img src="../resources/object/ch03/5_2_1_1.png" id="soda_head" class="soda"/>
<img src="../resources/object/ch03/5_2_1_2.png" id="soda_body" class="soda"/>
<img src="../resources/object/ch03/5_2_1_3.png" id="soda_bottom" class="soda"/>
<img src="../resources/object/ch03/5_2_1_4.png" id="soda_leg" class="soda"/>
<img src="../resources/character/ch03/paper_1.webp" id="servant">
<img src="../resources/object/ch03/shine.webp" id="shine">
<hr class="blinking" id="dragLine"></hr>
<script src="<c:url value='/resources/js/interaction/ch03/washTest2.js'/>"></script>