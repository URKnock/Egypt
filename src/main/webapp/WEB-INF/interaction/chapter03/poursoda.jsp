<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" type="text/css"/>
<link href="<c:url value='/resources/css/interaction/ch03/pourSodas.css'/>" rel="stylesheet" type="text/css"/>
<div id="dragSpot" class="circle droppable"></div>
<img src="../resources/object/ch03/paper.png" id="scroll"/>
<img src="../resources/object/ch03/pot.png" id="potToClick"/>
<img src="../resources/object/ch03/pot_rotate.webp" id="pot"/>
<img src="../resources/character/ch03/3_4_2.png" id="hum" class="human"/>
<img src="../resources/object/ch03/침대.png" id="bed"/>
<img src="../resources/object/ch03/soda_4.png" id="soda_over"/>
<img src="../resources/object/ch03/5_2_1_1.png" id="soda_head" class="soda"/>
<img src="../resources/object/ch03/5_2_1_2.png" id="soda_body" class="soda"/>
<img src="../resources/object/ch03/5_2_1_3.png" id="soda_bottom" class="soda"/>
<img src="../resources/object/ch03/5_2_1_4.png" id="soda_leg" class="soda"/>
<img src="../resources/object/ch03/paper.png" id="paper">
<hr class="blinking" id="dragLine"></hr>
<script src="<c:url value='/resources/js/interaction/ch03/pourSodas.js'/>"></script>