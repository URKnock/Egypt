<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/peseshkafTest.css'/>" rel="stylesheet" type="text/css"/>
<div>
	<div id="eyeSpot" class="circle" style="top: 265; left: 625;"></div>
	<div id="faceSpot" class="circle" style="top: 320; left: 670;"></div>
	<div id="mouthSpot" class="circle" style="top: 350; left: 580;"></div>
	<div>
		<img src="../resources/object/ch04/4_11.png" id="human"/>
	</div>
	<div class="peseshkaf">
		<img src="../resources/object/ch04/4_3_2.png" id="peseshkaf"/>
	</div>
</div>
<script src="<c:url value='/resources/js/interaction/peseshkafTest.js'/>"></script>