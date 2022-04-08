
$(function init() { 
	
	$(".mainC").css({opacity: "1"});
	$(".mainC").animate({left: "-28%"}, 2000);
	$("#background").children().hide();
	$("form").hide().delay(2200).fadeIn(1000)
	.fadeOut(2000); 
	
 	setTimeout("$('form').submit()", 6000);
	
});