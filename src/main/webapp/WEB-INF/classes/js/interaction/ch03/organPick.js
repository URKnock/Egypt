function interaction() {
	var hLC = $("#human").offset().left + ($("#human").width() / 3);
	var hTC = $("#human").offset().top + ($("#human").height() / 2);
	var hRC = hLC + ($("#human").width() / 3);
	
	$("#effect").attr("src", "/resources/bgm/ch03/viscera.mp3");
	if(flag == 1) {
		$("#effect").attr("src", "/resources/bgm/ch03/heart.mp3");
		effect();
		setTimeout(function() {
			$("#effect").attr("src", "/resources/bgm/ch03/viscera.mp3");
		}, 2000);
	}
	
	resize("#human_cover");
	center("#human_cover");
	$("#human_cover").fadeOut(3000);
	
	for(var i = 1; i < 5; i++) {
		var bg = "/resources/object/ch03/organ_" + (i + 1) + ".png";
		resize('#organDest' + i);
		$('#organDest' + i).css("left", $("#human").offset().left + $("#human").width() / 4 * (i - 1));
		$('#organDest' + i).css("top", 100);
	}
	
	var oRC = $('#background').width() - $('#organDest4').offset().left
	var oRB = oRC;
	for(var i = 1; i < 6; i++) {
		var organName = '#organ' + i;
		var destName = '#organDest' + i;
		resize(organName);
		$(organName).width($(organName).width() / 2);
		$(organName).height($(organName).height() / 2);
		$(organName).css("z-index", 6 - i);
		$(organName).css("top", hTC - $('#organ' + i).width() / 2);
		$(organName).css("right", oRB);
		if(i == 4) {
			oRB = oRB + $('#organ4').height() / 4;
		}
		if(i != 1 && i != 3) {
			oRB = oRB + $(organName).height() / 2;
		}
		$(destName).hide();
		$(organName).on("click", function() {
			var organId = $(this).attr("id");
			var id = parseInt(organId.slice(-1));
			$("#organDest" + (id-1)).fadeIn(1000);
			$(this).fadeOut(1000);
			entered.push(organId);
			checkElement();
			effect();
		});
	}
	$('#organ1').off("click").on("click", function() {			
		$('input[name=choice]').val(1);
		$('form').submit();
	});
	$('#organ1').css("right", oRC + $("#organ2").height() / 2);
	$('#organ3').css("top", $('#organ2').offset().top);

	var entered = [];
	function checkElement() {
		if(entered.length >= 4) {
			setTimeout(function() { 
				$('input[name=choice]').val(-1);
				$("form").submit(); 
			}, 2000);
		}
	}
}