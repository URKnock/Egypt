<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script defer src="<c:url value='/resources/js/interaction/ch07/toss.js'/>" type="text/javascript"></script>
<script defer>
	var body = document.querySelector('body');
	body.onload = function() { init_toss(); setSomething(); };
</script>

<img class="item" id="active"  src="<c:url value='/resources/object/ch07/heart.png'/>">
<div class="spot"></div>
<div class="circle"></div>