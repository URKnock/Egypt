<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/x_axisDrag.css'/>" rel="stylesheet" type="text/css"/>
<div>
	<div id="dragSpot" class="circle droppable" style="top: 700; left: 1830;"></div>
	<img src="../resources/object/ch03/주전자.png" id="kettle"/>	
	<img src="../resources/object/ch03/소다석얼룩.png" id="soda" class="soda"/>
	<img src="../resources/object/ch03/3_2_2.png" id="human" class="human"/>
	<hr class="blinking" id="dragLine"/>
</div>
<script src="<c:url value='/resources/js/interaction/x_axisDrag.js'/>"></script>