<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/cut.css'/>" rel="stylesheet" type="text/css"/>
<img src="<c:url value='/resources/character/ch03/3_2.png'/>" id="human" class="human"/>
<img src="<c:url value='/resources/object/ch03/knife.png'/>" id="knife"/>
<img src="<c:url value='/resources/object/ch03/knife.png'/>" id="knifeToClick"/>
<img src="<c:url value='/resources/character/ch03/servant_dish_knife.webp'/>" id="servant">
<img src="../resources/object/ch03/dish.png" id="scroll"/>
<img src="../resources/object/ch03/none.png" id="paper">
<img src="../resources/object/ch03/arrow_3.png" class="blinking" id="dragLine">
<div id="dragDest" class="dest droppable blinking"></div>
<script src="<c:url value='/resources/js/interaction/ch03/cut.js'/>"></script>