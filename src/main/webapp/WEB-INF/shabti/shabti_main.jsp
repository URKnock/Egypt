<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<!-- 단어장 아이콘 클릭 시 단어장 메인 jsp로 들어가게 코드 추가 요청하기 -->
<%
    String pagefile=request.getParameter("page");
    //처음 보여주는 페이지는 내가 쓴글리스트
    if(pagefile==null){
            pagefile="UI_all";
        }
%>
<head>
<link
   href="css/ui.css"
   rel="stylesheet">
  <link
   href="css/ui_info.css"
   rel="stylesheet">
<meta charset="UTF-8">
<title>사자의 서</title>
</head>

<body>
<script src="<c:url value="./js/jquery-3.6.0.min.js" />"></script> <!-- 경로 수정 -->
<script src="./js/owl.carousel.js"></script>
<script src="./js/owl.autoplay.js"></script>
<script src="./js/owl.navigation.js"></script>
<script type="text/javascript" src= "./js/ui.js?ver=1"></script>
<div class="info_back"></div>
<div class = "background">
<nav><div class="close" onclick="hide_dic()" align ="right"><img src = "image/3.png"><!-- <img src = "UI/Shabti/3.png"> --></div></nav>
<div> 
<%-- <div><%@include file="/UI_nav.jsp" %>
<div><jsp:include page='<%=pagefile+".jsp" %>'></jsp:include></div>
</div> <!-- "/shabti/shabti_nav.jsp" --> --%>

</div>
</div>
</body>
</html>