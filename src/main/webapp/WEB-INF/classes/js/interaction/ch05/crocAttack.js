var first = new Audio('resources/bgm/ch05/crocodile_cry.mp3');
function interaction() { 
	setSound();
	$("#background").children().hide();
	$("form").hide();
	scene = $("input[name='scene']").val();
		first.play();
		$(".crocs4").attr("src", 
		"/resources/object/ch05/악어인트로_시작오.webp");
		$(".crocs3").attr("src", 
		"/resources/object/ch05/악어인트로_시작왼.webp");	
		$(".crocs2").attr("src", 
		"/resources/object/ch05/악어인트로_시작오.webp");	
		$(".crocs1").attr("src", 
		"/resources/object/ch05/악어인트로_시작왼.webp");		
		setTimeout("$('form').submit()", 2600);	
}
