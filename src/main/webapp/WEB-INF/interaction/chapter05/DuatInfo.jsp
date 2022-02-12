<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>사자의 서</title>
<link href="<c:url value='/resources/css/ch05.css'/>" rel="stylesheet" type="text/css"/>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="<c:url value='/resources/js/DuatInfo.js'/>"></script>

<script> $(function(){ init(); }); </script>
</head>
<body>

<div id="background">
	<div id="menu">
		<img class="menu1" src="<c:url value='/resources/UI/Menu/1.png'/>"/>
		<img class="menu2" src="<c:url value='/resources/UI/Menu/2.png'/>"/>
		<img class="menu3" src="<c:url value='/resources/UI/Menu/3.png'/>"/>
		<img class="menu4" src="<c:url value='/resources/UI/Menu/4.png'/>"/>
	</div>

</div>

<div class ="water">
	<div id ="water">
	<img class="water1" src="<c:url value='/resources/background/ch05/5_2.png'/>"/>
	<img class="water2" src="<c:url value='/resources/background/ch05/5_3.png'/>"/>
	<img class="water3" src="<c:url value='/resources/background/ch05/5_4.png'/>"/>
	<img class="water1_1" src="<c:url value='/resources/background/ch05/5_2.png'/>"/>
	</div>
</div>

<div class="characters">
	<img id="mainC" src="<c:url value='/resources/Character/ch05/5_4.png'/>"/>
	<img class="lab" src="<c:url value='/resources/Character/ch05/la_b.png'/>"/>
</div>
<div class="backs">
	<img id="earth" src="<c:url value='/resources/background/ch05/5_1.png'/>"/>

</div>

<div class="modal">
  <div class="modal_content" 
       title="클릭하면 창이 닫힙니다.">
    <img class="info1" id="info1" src='<c:url value="${info.img}"/>'/> 
  </div>
  </div>
  
  <div class="modal2">
  <div class="modal_content2" 
       title="클릭하면 창이 닫힙니다.">
    <img class="info2" id="info2" src='<c:url value="${info2.img}"/>'/> 
  </div>
  </div>
  
  <div class="inf_modal">
  <div class="inf_content"
       title="클릭하면 창이 닫힙니다.">
       content 예시 화면<br>
       여기에 정보<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<table class="info_table">
<thead>
  <tr>
    <th></th>
    <th colspan="4"></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>전체</td>
    <td rowspan="7">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 여기에 사진</td>
    <td colspan="3"></td>
  </tr>
  <tr>
    <td><font size="5">영생의 준비<br></font></td>
    <td colspan="3" rowspan="3"></td>
  </tr>
  <tr>
    <td><font size="5">개구식<br></font></td>
  </tr>
  <tr>
    <td><font size="5">두아트<br></font></td>
  </tr>
  <tr>
    <td><font size="5">오시리스 법정<br></font></td>
    <td colspan="3" rowspan="3"></td>
  </tr>
  <tr>
    <td><font size="5">천국<br></font></td>
  </tr>
  <tr>
    <td><font size="5">지옥<br></font></td>
  </tr>
  <tr>
    <td colspan="5" rowspan="2"></td>
  </tr>
  <tr>
  </tr>
</tbody>
</table>
  </div>
  </div>
  

</body>
</html>
