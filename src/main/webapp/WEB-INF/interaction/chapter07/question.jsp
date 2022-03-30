<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script defer src="<c:url value='/resources/js/interaction/ch07/question.js'/>" type="text/javascript"></script>
<script>
	var body = document.querySelector('body');
</script>

${questN}번째 질문<br>
예: ${ans0}<br>
아니오: ${ans1}<br>
잘모르겠습니다: ${ans2}<br>