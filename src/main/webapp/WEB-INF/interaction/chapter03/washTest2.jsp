<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/washTest2.css'/>" rel="stylesheet" type="text/css"/>
<img src="../resources/object/ch03/두루마기.png" id="scroll">
<img src="../resources/object/ch03/두루마기봉.png" class="stick" style="left:300">
<img src="../resources/object/ch03/두루마기봉.png" class="stick" style="left:1200">
<img src="../resources/object/ch03/3_2_4.png" id="linen">
<div>
	<img src="../resources/object/ch03/3_2_1_1.png" id="dirt_head" class="droppable dirt" 
	style="width: 252; height: 166; left: 900">
	<img src="../resources/object/ch03/3_2_1_2.png" id="dirt_body" class="droppable dirt" 
	style="width: 299; height: 168; left: 725">
	<img src="../resources/object/ch03/3_2_1_3.png" id="dirt_bottom" class="droppable dirt" 
	style="width: 281; height: 169; left: 570">
	<img src="../resources/object/ch03/3_2_1_4.png" id="dirt_leg" class="droppable dirt" 
	style="width: 442; height: 157; top: 420; left: 320">
	<img src="../resources/object/ch03/3_2_2.png" id="human" class="human">
</div>
<script src="<c:url value='/resources/js/interaction/ch03/washTest2.js'/>"></script>