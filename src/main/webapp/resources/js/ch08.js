function init() {
	scene = $("input[name='scene']").val();
	
	if(scene == 1) {
		$("#content").hide().fadeIn(2000);
		$("#user").animate({right: "54%"}, 2100).animate({right: "34%", bottom: "36%"}, 700).animate({right: "11%", bottom: "34.4%"}, 600).animate({rotate: '10deg'}, 500).animate({rotate: '0deg'}, 500);
		$("#boat").delay(3300).animate({rotate: '10deg'}, 600).animate({rotate: '0deg'}, 500);
		$("#la1").delay(3300).animate({rotate: '10deg'}, 600).animate({rotate: '0deg'}, 500).animate({opacity: "0"});
		$("#la2").delay(4400).animate({opacity: "100%"});
		
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 2) {
		$("#user").css("right", "11%").css("bottom", "34.4%");
		$("#la1").hide();
		$("#la2").css("opacity", "100%");
		$("#deco1").animate({left: "-100%"}, 4000);
		$("#grass1").animate({left: "-100%"}, 4000);
		$("#grass2").animate({left: "-60%"}, 4000);
		$("#grass3").animate({left: "-90%"}, 4000);
		$("#statue1").animate({left: "-90%"}, 4000);
		$("#altar").animate({left: "-100%"}, 4000);
		$("#pillars1").animate({left: "-100%"}, 4000);
		$("#stairs").animate({left: "-100%"}, 4000);
		$("#content").hide().delay(2000).fadeIn(1000);
		
		$("#user").animate({right: "40%"}, 3000);
		$("#la2").animate({right: "49%"}, 3000);
		$("#boat").animate({right: "30.4%"}, 3000);
		
		$(".background1").delay(3000).fadeOut(3000);
		$(".background2").delay(3000).animate({opacity: "100%"}, 3000);
		$("#star").delay(4000).animate({opacity: "100%"}, 2000);
		
		$("#water1").delay(3000).fadeOut(3000);
		$("#water2").delay(3000).animate({opacity: "100%"}, 3000);
		
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 3) {
		setting2();
		
		$("form").delay(2000).fadeOut(1000);
		
		$("#rock").animate({left: '0%'}, 4000).animate({left: '-148%'}, 120000);

		$("#user").delay(3000).animate({right: "65%"}, 1000);
		$("#la2").delay(3000).animate({right: "74%"}, 1000);
		$("#boat").delay(3000).animate({right: "55.4%"}, 1000);
		$("#paper").delay(2500).animate({opacity: "100%"}, 500).delay(2000).animate({opacity: "0%"}, 500);
		
		$("#snake").delay(4000).animate({opacity: "100%"}, 1000);
		
		/* 일단 창 던지기 인터랙션 대신 넣어둔거 */
		$("#snake").on("click", function() {
			$("#snake").hide();
			
			$("#rock").stop().animate({left: '-148%'}, 3000);
			
			$("#user").animate({right: "40%"}, 2000);
			$("#la2").animate({right: "49%"}, 2000);
			$("#boat").animate({right: "30.4%"}, 2000);
			
			$("form").fadeIn(1000);
			$("#con").text('훌륭하다. 아펩을 무찔렀구나.');
			setTimeout("$('form').submit()", 3000);
		});	
	}
	else if(scene == 4) {
		setting2();
		
		$(".background2").fadeOut(2000);
		$(".background3").animate({opacity: "100%"}, 1000);
		
		$("#water1").fadeIn(2000);
		$("#water2").fadeOut(2000);
		
		$("#dialogue").on("click", function() { 
			setTimeout("$('form').submit()", 4000);
			
			$("form").fadeOut(1000);
			$("#user").animate({right: "65%"}, 4000);
			$("#la2").animate({right: "74%"}, 4000);
			$("#boat").animate({right: "55.4%"}, 4000);
			
			$("#tree").animate({right: "44%"}, 4000);
			$("#grass4").animate({right: "0%"}, 4000);
			$("#ground").animate({right: "0"}, 4000);
			$("#pillars2").animate({right: "0"}, 4000);
			$("#statue2").animate({right: "14%"}, 4000);
			$("#deco2").animate({right: "43.2%"}, 4000);
			$("#grass5").animate({right: "13.2%"}, 4000);
			$("#flower").animate({right: "6.5%"}, 4000);
		});
	}
	else if(scene == 5) {
		setting();
		
		$(".background2").hide();
		$(".background3").css("opacity", "100%");
		
		$("#user").css("right", "65%").css("bottom", "34.4%");
		$("#la2").css("opacity", "100%").css("right", "74%");
		$("#boat").css("right", "55.4%");
	
		$("#tree").css("right", "44%");
		$("#grass4").css("right", "0%");
		$("#ground").css("right", "0%");
		$("#pillars2").css("right", "0%");
		$("#statue2").css("right", "14%");
		$("#deco2").css("right", "43.2%");
		$("#grass5").css("right", "13.2%");
		$("#flower").css("right", "6.5%");
		
		$("#user").delay(1000).animate({right: "47%"}, 1000);
	}
}

function setting() {		
	$("#la1").hide();
	$("#deco1").hide();
	$("#grass1").hide();
	$("#grass2").hide();
	$("#grass3").hide();
	$("#statue1").hide();
	$("#altar").hide();
	$("#pillars1").hide();
	$("#stairs").hide();
}

function setting2() {
	setting();
	
	$("#user").css("right", "40%").css("bottom", "34.4%");
	$("#la2").css("opacity", "100%").css("right", "49%");
	$("#boat").css("right", "30.4%");
	
	$(".background1").hide();
	$(".background2").css("opacity", "100%");
	$("#star").css("opacity", "100%");
		
	$("#water1").hide();
	$("#water2").css("opacity", "100%");
}