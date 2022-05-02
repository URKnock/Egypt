<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<!-- 단어장 아이콘 클릭 시 단어장 메인 jsp로 들어가게 코드 추가 요청하기 -->
<head>
<link
   href="css/ui.css"
   rel="stylesheet">
<meta charset="UTF-8">
<title>사자의 서</title>
</head>
<%
    String pagefile=request.getParameter("page");
    //처음 보여주는 페이지는 내가 쓴글리스트
    if(pagefile==null){
            pagefile="UI_all";
        }
%>
<body>
<script src="<c:url value="./js/jquery-3.6.0.min.js" />"></script> 
<script src="./js/owl.carousel.js"></script>
<script src="./js/owl.autoplay.js"></script>
<script src="./js/owl.navigation.js"></script>
<script type="text/javascript" src= "./js/ui.js?ver=1"></script>
<nav><div class="close" onclick="hide_dic()" align ="right"><img src = "image/3.png"></div></nav>

<div class = "background">
<div><img id = "logo" src = "image/2.png">
<span id = "title">&nbsp;단어장</span></div>
<div><%@include file="shabti_nav.jsp" %></div>
</div>
</body>
</html>