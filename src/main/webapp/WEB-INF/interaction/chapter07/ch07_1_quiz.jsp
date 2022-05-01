<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch07/question.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
</script>

${questN}번째 질문<br>
<%
	out.println(session.getAttribute("answer"));
%>