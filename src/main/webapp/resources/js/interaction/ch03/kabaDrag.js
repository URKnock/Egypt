function interaction() {
	resize("#human");
	center("#human");
	if(scene == 3) {
		$('#kaPng').animate({opacity : 1}, 500);
		resize("#kaPng");
		$("#kaPng").width($("#kaPng").width() / 2);
		$("#kaPng").height($("#kaPng").height() / 2);
		center("#kaPng");
		$('#kaPng').on("click", function() {
			$("#kaPng").hide();
			$('#ka').css({opacity:1});
			setTimeout(function(){
				resize("#ka");
				center("#ka");
				$("#ka").width($("#ka").width() / 2);
				$("#ka").height($("#ka").height() / 2);
				$('#ka').animate({
					top: $("#human").position().top + $("#human").height() / 2 - $("#ka").height(),
					left: $("#human").position().left + $("#human").width() / 2 - $("#ka").width(),
					width : $("#ka").width() * 2,
					height: $("#ka").height() * 2
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
		$('#baPng').css({"top":425*h, "left": 980*w});
		$('#baPng').on("click", function() {
			$("#baPng").hide();	
			$('#ba').css({opacity:1});
			setTimeout(function(){
				resize("#ba");
				$('#ba').css({"top":425*h, "left": 980*w});
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
			$('#ba').on("click", function(){
				$('#ba').animate({top : -300}, 500);
				object("#ba", 8);
			});	
		});
	}
}