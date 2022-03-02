function interaction() {
	var hLC = $("#human").offset().left + ($("#human").width() / 3);
	var hTC = $("#human").offset().top + ($("#human").height() / 2);
	var hRC = hLC + ($("#human").width() / 3);
	
	resize('#knife');
	$('#knife').css("left", hLC - ($('#knife').width() / 1.414) / 2);
	$('#knife').css("top", hTC - $('#knife').height());
	$('#knife').hide();
	
	$('#dragLine').width($("#human").width() / 3);
	$('#dragLine').css("left", hLC);
	$('#dragLine').css("top", hTC);
	$('#dragLine').hide();
	
	$('#dragDest').css("left", hRC);
	$('#dragDest').css("top", hTC);
	$('#dragDest').hide();
	
	for(var i = 1; i < 6; i++) {
		$('#organDest' + i).css("left", $("#human").offset().left + $("#human").width() / 5 * (i - 1));
		$('#organDest' + i).css("top", 100);
		$('#organDest' + i).hide();
	}
	
	resize('#servant');
	$('#servant').css("bottom", $("#dialogue").height());
	$('#servant').css("left", 0);

	resize('#knifeToClick');
	$('#knifeToClick').css("bottom", $("#dialogue").height() + 427*w - ($('#knifeToClick').height()/4));
	$('#knifeToClick').css("left", -$('#knifeToClick').width());
	$('#knifeToClick').animate({
		left: 162*w
	}, 3600, function() {
		$('#knifeToClick').addClass("select");
		$('#servant').attr("src", "/resources/character/ch03/servant_2.webp");
	});
	$('#knifeToClick').on("click", function() {
		$('#knifeToClick').removeClass("select");
		$('#knifeToClick').fadeOut("1000");
		$('#knife').fadeIn("1000");
		$('#dragLine').fadeIn("1000");
		$('#dragDest').fadeIn("1000");
	});
}