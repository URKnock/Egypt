<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link
   href="css/ui_info.css"
   rel="stylesheet">
<link
   href="css/ui.css"
   rel="stylesheet">
<meta charset="UTF-8">
<script src="<c:url value="./js/jquery-3.6.0.min.js" />"></script> 
<script src="./js/owl.carousel.js"></script>
<script src="./js/owl.autoplay.js"></script>
<script src="./js/owl.navigation.js"></script>
<script type="text/javascript" src= "./js/ui.js?ver=1"></script>
<script type="text/javascript" src= "./js/ui_info.js?ver=1"></script>
<div id = "info_window">
<h3 class="name"><img type="button" role="presentation" class="prev" onClick="click_prev()" >
	<span aria-label="Previous"><img id = "prev" src = "image/4_1_2.png" ></span>
더미 텍스트
<img type="button" role="presentation" class="next" onClick="click_next()" >
	<span aria-label="Next"><img id = "next" src = "image/4_2_2.png" ></span>
</h3>
		<div class="infoImg"><img src="image/7_1.png">
		<div class="infoText">
			<div class = "kind">
				</div>
			<p class="detail">

			</p>
		</div>	
		</div>
	<footer class = carousel-list>
	 <ul>
	 <li><img type="button" role="presentation" class="slide_prev" onClick="slide_prev()" >
	 <span aria-label="Previous"><img id = "prev" src = "image/4_1_2.png" ></span>
	 </li>
	 <li></li>
	 <li><img type="button" role="presentation" class="slide_next" onClick="slide_next()" >
	 <span aria-label="Next"><img id = "next" src = "image/4_2_2.png" ></span>
	 </li>
	 </ul>
	</footer>		
</div>
