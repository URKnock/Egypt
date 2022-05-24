function init() {
	setSound();
	
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	
	if(scene == 1) {	
		setTimeout(function () {
		  $("#voice").trigger("play");
		}, 9000);
		
		$("form").hide().delay(8000).fadeIn(1000);
		
		$("#boat").css("right", "100%" );
		$("#boat").animate({right: "35%"}, 4000);
		
		$("#la").css("right", "110%" );
		$("#la").animate({right: "45%"}, 4000);
		
		$("#user").css("right", "124%").css("top", "25%");
		$("#user").animate({right: "59%"}, 4000).animate({opacity: "0"}, 100);
		$("#user3").delay(3900).animate({opacity: "100%"}).animate({right: "14%", top: "15%"}, 3700).animate({opacity: "0"}, 300);
		
		$("#user2").delay(8000).animate({opacity: "100%"});
		
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 2) {	
		setTimeout(function () {
		  $("#voice").trigger("play");
		}, 9000);
		
		$("#boat").css("right", "35%" );
		$("#boat").animate({left: "100%"}, 4000);
		
		$("#la").css("right", "45%");
		$("#la").animate({left: "130%"}, 4000);
		
		$("#user").css("right", "14%").css("top", "16.5%").css("opacity", "100%");
		$("#user").delay(4000).animate({right: "50%"}, 4000);
		
		$("#user2").css("opacity", "0");
		
		$("#anubis").delay(4000).animate({right: "30%"}, 4000).animate({opacity: "0"});
		$("#anubis2").delay(8000).animate({opacity: "100%"});
		
		$("#tree").delay(4000).animate({left:"35%"}, 4000);
		
		$("#grass").delay(4000).animate({left:"35%"}, 4000);		
		
		$("#pillar").delay(4000).animate({left:"48%"}, 4000);

		$("#ground").delay(4000).animate({left:"0%"}, 4000);
		
		$("form").hide().delay(8000).fadeIn(1000);
		
		$("#dialogue").delay(4000).on("click", function() { 
			setTimeout("$('form').submit()", 4000);
			$("#anubis3").css("opacity", "100%");
			$("#anubis2").css("opacity", "0%");
			$("#anubis3").animate({left: "116%"}, 4000);
			$("#user").css("opacity", "0");
			$("#user3").css("right", "50%").css("top", "14.5%").css("opacity", "100%");
			$("#user3").animate({left: "100%"}, 4000);
			});	
	}
}