
$(function init() { 
	$("#background").children().hide();
	$("form").hide();
	scene = $("input[name='scene']").val();
	
		$(".crocs4").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작오.webp");
		$(".crocs3").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작왼.webp");	
		$(".crocs2").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작오.webp");	
		$(".crocs1").attr("src", 
		"/D/resources/object/ch05/악어인트로_시작왼.webp");		
		setTimeout("$('form').submit()", 2600);	
	

});