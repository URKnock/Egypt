function interaction() { 
	$("#background").children().hide();
	scene = $("input[name='scene']").val();
	
	//$("#background").children().hide();
	//$("form").hide();
	
	if(scene == 14) {
		$(".mandara").animate({right: "90%"}, 4000);
		$(".keepers").animate({left: "90%"}, 4000);
		
	}
}