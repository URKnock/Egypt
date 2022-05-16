<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<link
   href="css/shabti/shabti.css"
   rel="stylesheet">
<meta charset="UTF-8">
<title>사자의 서</title>
</head>
<%
    String pagefile=request.getParameter("page");
    //처음 보여주는 페이지는 내가 쓴글리스트
    if(pagefile==null){
            pagefile="shabti_all";
        }
%>
<body>
<script src="<c:url value="./js/jquery-3.6.0.min.js" />"></script> 
<script src="./js/owl.carousel.js"></script>
<script src="./js/owl.autoplay.js"></script>
<script src="./js/owl.navigation.js"></script>
<script type="text/javascript" src= "./js/ui.js?ver=1"></script>
<div class="info_back"></div>
<nav><div class="close" onclick="hide_dic()" align ="right"><img src = "UI/Shabti/3.png"></div></nav>

<div class = "background">
<div><img id = "logo" src = "UI/Shabti/2.png">
<span id = "title">&nbsp;단어장</span></div>
<div> <%@include file="/shabti/shabti_nav.jsp" %> </div>
</div>
