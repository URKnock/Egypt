function interaction() { 	
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide").delay(500).animate({opacity: "100%"}, 500)
	.delay(1200).animate({opacity: "0%"}, 500);
	
	setTimeout("$('form').submit()", 3000);	
}