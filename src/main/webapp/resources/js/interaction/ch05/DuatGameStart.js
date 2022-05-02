
$(function init() { 
	
	scene = $("input[name='scene']").val();
	$(".mainC").css({opacity: "1"});
	$(".mainC").animate({left: "-28%"}, 2000);
	$(".saja").animate({left: "-28%"}, 2000);
	$("#background").children().hide();
	
	
	$("form").hide().delay(2200).fadeIn(1000);
	
	if(scene == 6) {
		setTimeout(function() {
		$(".crocs4").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작오.webp");
		}, 4400);
	setTimeout(function() {
		$(".crocs3").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작왼.webp");
		}, 4400);	
	setTimeout(function() {
		$(".crocs2").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작오.webp");
		}, 4400);		
	setTimeout(function() {
		$(".crocs1").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작왼.webp");
		}, 4400);	
		
	setTimeout("$('form').submit()", 6400);	
	}
	
			

	
});