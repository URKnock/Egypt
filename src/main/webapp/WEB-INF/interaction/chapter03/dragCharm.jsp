<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch03/dragCharm.css'/>" rel="stylesheet" type="text/css"/>
<c:forEach var="i" begin="1" end="3">
	<div id="charmDiv${i}" class="charmDiv">
		<img src="<c:url value='/resources/object/ch03/charm_${i}.png'/>" id="charm${i}" class="charm"/>
	</div>
</c:forEach>
<div class="dest droppable" id="body"></div>
<div class="dest droppable" id="chest"></div>
<img src="<c:url value='/resources/object/ch03/paper.png'/>" id="scroll"/>
<img src="<c:url value='/resources/character/ch03/3_4.png'/>" id="human"/>
<script src="<c:url value='/resources/js/interaction/ch03/dragCharm.js'/>"></script>