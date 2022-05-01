
$(function init() { 
	scene = $("input[name='scene']").val();
	
	$("#background").children().hide();
	//$("form").hide();
	
	if(scene == 8) {
		$(".mandara").animate({left: "-50%"}, 4000);
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	
	if(scene == 9) {
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	



	
});