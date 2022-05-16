<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link href="<c:url value='/resources/css/interaction/ch07/ch07_1.css'/>" rel="stylesheet" type="text/css"/>  

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch07/question.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
</script>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_2.png'/>">
	
	<div class="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_0_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_1_4.png'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<img class="god" src="<c:url value='/resources/webp/ch07/42_${questN}.webp'/>">
</div>

${questN}번째 질문<br>
<%
	ArrayList<String> ans = (ArrayList) session.getAttribute("answer");
	int score = 0;
	for(String ansN: ans) {
		switch(ansN) {
			case "0": // 네
				score++;
				break;
			case "1": // 아니오
				score--;
				break;
		}
	}
	if(score >= 7) session.setAttribute("innocent", "true");
	else session.setAttribute("innocent", "false");
	
	request.setAttribute("score", score);
%>

<c:if test="${questN eq 10}">
	<c:choose>
		<c:when test="${innocent eq 'true'}">
			<script defer>
			body.onload = function() {
				$("input[name=scene]").val("4");
				$("input[name=index]").val("0");
			}
			</script>
		</c:when>
		<c:otherwise>
			<script defer>
			body.onload = function() {
				$("input[name=scene]").val("5");
				$("input[name=index]").val("0");
			}
			</script>
		</c:otherwise>
	</c:choose>
</c:if>