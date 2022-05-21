<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link
   href="css/shabti/shabti.css"
   rel="stylesheet">
</head>
<body>
 <nav class="navbar navbar-expand-sm navbar-light bg-light">

  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav justify-content-start bg-light">
       <li class="nav-item">
          <a class="nav-link" href="<c:url value='/shabti/shabti_all'/>">전체</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/shabti/shabti_prepare'/>">영생의 준비</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/shabti/shabti_conscious'/>">입을 여는 의식</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/shabti/shabti_duat'/>">두아트</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/shabti/shabti_law' />">오시리스 법정</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/shabti/shabti_heaven' />">천국</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/shabti/shabti_hell' />">지옥</a><p>
        </ul>W
    </div>
  </div>
</nav>
</body>
</html>