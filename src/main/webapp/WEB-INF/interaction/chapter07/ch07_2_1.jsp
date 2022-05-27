<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link href="<c:url value='/resources/css/interaction/ch07/ch07_2.css'/>" rel="stylesheet" type="text/css"/>

<div id="interact">
	<!-- background -->
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_2.png'/>">
	<img class="background" src="<c:url value='/resources/background/ch07/7_2_3.png'/>">
	
	<img class="balance" src="<c:url value='/resources/object/ch07/balance_before.png'/>">

	<!-- character -->
	<img class="character" src="<c:url value='/resources/webp/ch07/men.webp'/>">
	<img id="anubis" class="character" src="<c:url value='/resources/webp/ch07/anubis2_talk.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/thoth2.webp'/>">
	<img class="character" src="<c:url value='/resources/webp/ch07/ammut.webp'/>">
	<c:if test="${scene eq 6 and index eq 1}">
		<script defer>
				var body = document.querySelector('body');
				body.onload = function() {
					setSomething();
				}
			</script>
	</c:if>
	<c:if test="${scene eq 6 and index eq 2}">
		<c:if test="${balance eq '0'}">
			<script defer>
				var body = document.querySelector('body');
				body.onload = function() {
					setSomething();
					$("form").submit();
				}
			</script>
		</c:if>
		<c:if test="${choice eq '1'}">
			<script defer>
				var body = document.querySelector('body');
				body.onload = function() {
					init();
					setNextButton(76, 1205);
				}
			</script>
		</c:if>
	</c:if>
	<c:if test="${scene eq 6 and index eq 3}">
		<jsp:include page="toss.jsp"/>
	</c:if>
	<c:if test="${scene eq 7 and index eq 0}">
		<c:choose>
			<c:when test="${result eq 'load?chapter=8'}">
				<script defer>
				var balance = document.querySelector('#interact .balance');
				balance.src = "resources/webp/ch07/balance_put01.webp";
				
				var body = document.querySelector('body');
				body.onload = function() { 
					init();
					setNextButton(44, 490);
				}
				</script>
			</c:when>
			<c:otherwise>
				<c:set var="scene" value="0"/>
				<c:set var="index" value="0"/>
				<script defer>
				var balance = document.querySelector('.balance');
				balance.src = "resources/webp/ch07/balance_put02.webp";
				
				var body = document.querySelector('body');
				body.onload = function() {
					$("#dialogue").click(function() {
						location.href = 'chapter10';
					});
					setSomething();
					setNextButton(44, 490);
				}
				</script>
			</c:otherwise>
		</c:choose>
	</c:if>
</div>

<script>
	var anubis = document.querySelector('#anubis');
	
	$("#voice").bind("ended", function() {
		anubis.src =  "resources/webp/ch07/anubis2.webp";
	});
</script>