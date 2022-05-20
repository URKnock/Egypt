<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>


<link href="<c:url value='/resources/css/interaction/ch07/ch07_1.css'/>" rel="stylesheet" type="text/css"/>  
<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_1_2.jpg'/>">
	
	<div class="bg">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_2_1.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_2_3.png'/>">
		<img class="bgObj" src="<c:url value='/resources/background/ch07/7_1_4.png'/>">
	</div>
	
	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<c:choose>
		<c:when test="${scene eq 3}">
			<img class="god" src="<c:url value='/resources/webp/ch07/42_1_talk.webp'/>">
			<script defer>
				var god = document.querySelector('.god');
				$("#voice").bind("ended", function() {
					god.src =  "resources/webp/ch07/42_1.webp";
				});
				var body = document.querySelector('body');
				body.onload = function() {
					var next = document.querySelector('#nextButton');
					next.style.position = "absolute";
					next.style.top = "48%";
					next.style.left = "655px";
					init();
				}
			</script>
		</c:when>
		<c:otherwise>
			<img class="god" src="<c:url value='/resources/webp/ch07/42_10_talk.webp'/>">
			<script defer>
				var god = document.querySelector('.god');
				$("#voice").bind("ended", function() {
					god.src =  "resources/webp/ch07/42_10.webp";
				});
				var body = document.querySelector('body');
				body.onload = function() {
					init();
					var next = document.querySelector('#nextButton');
					next.style.position = "absolute";
					next.style.top = "48%";
					next.style.left = "980px";
					init();
				}
			</script>
		</c:otherwise>
	</c:choose>	
</div>

<c:if test="${scene eq '5'}">
	<%
		ArrayList<String> ans = (ArrayList) session.getAttribute("answer");
		if(ans != null) {
			int score = 0;
			for(String ansN: ans) {
				if(ansN.equals("0")) score++;
			}
			System.out.println(score);
			System.out.println(ans);
			if(score >= 9) session.setAttribute("result", "chapter08");
			else if(score >= 5) session.setAttribute("result", "chapter12");
			else session.setAttribute("result", "chapter11");
		}
		
	%>
	<c:choose>
		<c:when test="${result eq 'chapter08'}">
			<script defer>
				var body = document.querySelector('body');
				body.onload = function() {
					$("input[name=scene]").val("6");
					$("input[name=index]").val("0");
					init();
					
					var next = document.querySelector('#nextButton');
					next.style.position = "absolute";
					next.style.top = "48%";
					next.style.left = "980px";
				}
			</script>
		</c:when>
		<c:otherwise>
			<script defer>
			var body = document.querySelector('body');
			body.onload = function() {
				setSomething();
				$("form").submit();
			}
			</script>
		</c:otherwise>
	</c:choose>
</c:if>
