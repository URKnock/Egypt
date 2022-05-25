<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  

<meta charset="UTF-8">
<title>Insert title here</title>
<link
   href="css/ui.css"
   rel="stylesheet">
<link
   href="css/ui_info.css"
   rel="stylesheet">
<script src="<c:url value="./js/jquery-3.6.0.min.js" />"></script> <!-- 경로 수정 -->
<script type="text/javascript" src= "./js/ui.js?ver=1"></script>
<!-- nav바 수직으로 하는 거 css에서 수정하기 -->
 <nav class="navbar navbar-expand-sm navbar-light bg-light">

  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav justify-content-start bg-light">
      <li class=".title">
          <div><img id = "logo" src = "image/2.png"><!-- <img id = "logo" src = "UI/Shabti/2.png"> -->
			<span id = "title">&nbsp;단어장</span></div>
       </li>
       <li class="nav-item">
          <a class="nav-link" href="<c:url value='/UI_all.jsp'/>">전체</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/UI_prepare.jsp'/>">영생의 준비</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/UI_conscious.jsp'/>">입을 여는 의식</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/UI_duat.jsp'/>">두아트</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/UI_law.jsp' />">오시리스 법정</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/UI_heaven.jsp' />">천국</a><p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<c:url value='/UI_hell.jsp' />">지옥</a><p>
        </li>
      </ul>
    </div>
  </div>
</nav>
