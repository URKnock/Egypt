function interaction() {
	var first = new Audio('resources/bgm/ch05/5_3_1_0.mp3');

	
	setDialogueSize();
	setSound();
	
	$(".boat").animate({left: "-25.5%"}, 1800);
	$(".saja").animate({left: "23%"}, 1800);
	$(".la").animate({left: "41.5%"}, 1800);
	$("#background").children().hide();
	scene = $("input[name='scene']").val();
	

	
	
/*	setTimeout(function() {
	$(".boatmove2").attr("src", 
	"/resources/character/ch05/12001080(33).webp");
	}, 400);*/
	
		
/*	$(".mainC").css({opacity: "1"});
	$(".mainC").animate({left: "-28%"}, 2000);
	$(".saja").animate({left: "30%"}, 2000);*/
	
	$("#con").hide().delay(1900).fadeIn();

	if(scene == 5) { //길조심하거라
		setTimeout(function() {
		first.play(); }, 2100);

	}	
}