function interaction() {
	x = $("#background").width() / 2.0;
	resize("#human");
	center("#human");
	if(scene == 3) {
		$('#kaPng').animate({opacity : 1}, 500);
		resize("#kaPng");
		$("#kaPng").width($("#kaPng").width() / 3);
		$("#kaPng").height($("#kaPng").height() / 3);
		center("#kaPng");
		$('#kaPng').on("click", function() {
			$("#kaPng").hide();
			$('#ka').css({opacity:1});
			setTimeout(function(){
				resize("#ka");
				center("#ka");
				$("#ka").width($("#ka").width() / 3);
				$("#ka").height($("#ka").height() / 3);
				$('#ka').animate({
					top: $("#human").position().top + $("#human").height() / 2 - $("#ka").height() * 3 / 2,
					left: $("#human").position().left + $("#human").width() / 2 - $("#ka").width() * 3 / 2,
					width : $("#ka").width() * 3,
					height: $("#ka").height() * 3
				}, 100);
				$('#ka').addClass("select");
				$('#ka').addClass("pikachu");
 			}, 200);
			$('#ka').on("click", function(){ object("#ka", 7); });	
		});
	}
	if(scene == 4) {		
		$('#baPng').animate({opacity : 1}, 500);
		resize("#baPng");
		$("#baPng").width($("#baPng").width() / 3);
		$("#baPng").height($("#baPng").height() / 3);
		center("#baPng");
		$('#baPng').on("click", function() {
			$("#baPng").hide();	
			$('#ba').css({opacity:1});
			setTimeout(function(){
				resize("#ba");
				center("#ba");
				$("#ba").width($("#ba").width() / 3);
				$("#ba").height($("#ba").height() / 3);
				$('#ba').animate({
					top: $("#human").position().top + $("#human").height() / 2 - $("#ba").height() * 3 / 2,
					left: $("#human").position().left + $("#human").width() / 2 - $("#ba").width() * 3 / 2,
					width : $("#ba").width() * 3,
					height: $("#ba").height() * 3
				}, 50);
				$('#ba').animate({top : 120}, 500);
				$('#ba').addClass("select");
				$('#ba').addClass("pikachu");
 			}, 100);
			$('#ba').on("click", function(){ object("#ba", 8); });	
		});
	}
}