<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/organDrag.css'/>" rel="stylesheet" type="text/css"/>
<div>
	<img src="../resources/object/ch03/장기_위.png" id="organ" class="organ"/>
	<img src="../resources/object/ch03/카누푸스_바디_전체.png" id="pot" class="droppable"/>
	<img src="../resources/object/ch03/카노푸스_두아무테프머리.png" id="head" class="head"/>
</div>
<script src="<c:url value='/resources/js/interaction/organDrag.js'/>"></script>