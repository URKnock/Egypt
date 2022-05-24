function interaction() {
	var first = new Audio('resources/bgm/ch05/5_3_1_0.mp3');

	setDialogueSize();
	setSound();
	$("#background").children().hide();
	scene = $("input[name='scene']").val();
	setTimeout(function() {
	$(".boatmove2").attr("src", 
	"/resources/character/ch05/12001080(33).webp");
	}, 560);
	
		
/*	$(".mainC").css({opacity: "1"});
	$(".mainC").animate({left: "-28%"}, 2000);
	$(".saja").animate({left: "30%"}, 2000);*/
	
	$("form").hide().delay(2200).fadeIn(1000);

	if(scene == 5) { //길조심하거라
		setTimeout(function() {
		first.play(); }, 3100);

	}	
}