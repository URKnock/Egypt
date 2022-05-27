$(document).ready(function() {
	$("#menu img:nth-child(1)").on("click", function() {
		$("#shabti").css("display", "flex");
	});
	$("#menu img:nth-child(2)").on("click", function() {
		location.href="/chapter02";
	});
	$("#menu img:nth-child(3)").on("click", function() {
		$("#setting").css("display", "flex");
	});
	$("#menu img:nth-child(4)").on("click", function() {
		$("#help").css("display", "flex");
	});
});

function init() {
	scene = $("input[name='scene']").val();
	w = $(".background1").width() / 1920;
	h = $(".background1").height() / 1080;
	x = $(".background1").width() / 2.0;
	
	setDialogueSize();
	setSetting();
	setHelp();
	setSound(); 
	setShabti();
	
	$("#setting").hide();
	$("#help").hide();
	$("#shabti").hide();
	
	if(scene == 0) {
		$("#loading").fadeOut(2000);
	} else {
		$("#loading").hide();
	}
	
	if(scene == 1) {
		$("#voice").trigger("play");
		setTimeout(function () {
		  $("#effect1").trigger("play");
		}, 3000);
		
		$("#user").css("opacity", "0%");
		$("#la1").css("transform", "rotateY(180deg)");
		$("#userWalk").css("opacity", "100%");
		$("#content").hide().fadeIn(2000);
		$("#userWalk").animate({right: "46%"}, 3000).animate({right: "28%", bottom: "34%"}, 1000).animate({right: "4%", bottom: "32%"}, 1000).animate({opacity: '0%'}, 100)
		$("#user").delay(5000).animate({opacity: '100%'}, 100).animate({rotate: '10deg'}, 500).animate({rotate: '0deg'}, 500);
		$("#boat").delay(5000).animate({rotate: '10deg'}, 600).animate({rotate: '0deg'}, 500);
		$("#la1").delay(5000).animate({rotate: '10deg'}, 600).animate({rotate: '0deg'}, 500).animate({opacity: "0"});
		$("#la2").delay(6100).animate({opacity: "100%"});
		
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 2) {
		$("#voice").trigger("play");
		$("#user").css("right", "5.5%").css("bottom", "32%");
		$("#deco1").animate({left: "-100%"}, 4000);
		$("#grass1").animate({left: "-100%"}, 4000);
		$("#grass2").animate({left: "-60%"}, 4000);
		$("#grass3").animate({left: "-90%"}, 4000);
		$("#statue1").animate({left: "-90%"}, 4000);
		$("#altar").animate({left: "-100%"}, 4000);
		$("#pillars1").animate({left: "-100%"}, 4000);
		$("#stairs").animate({left: "-100%"}, 4000);
		$("#content").hide().delay(2000).fadeIn(1000);
		
		$("#user").animate({right: "34.5%"}, 3000);
		$("#la1").animate({right: "46%"}, 3000);
		$("#boat").animate({right: "30.4%"}, 3000);
		
		$(".background1").delay(3000).fadeOut(3000);
		$(".background2").delay(3000).animate({opacity: "100%"}, 3000);
		$("#star").delay(4000).animate({opacity: "100%"}, 2000);
		
		$("#water1").delay(3000).fadeOut(3000);
		$("#water2").delay(3000).animate({opacity: "100%"}, 3000);
		
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 3) {
		$("#deco1").hide();
		$("#grass1").hide();
		$("#grass2").hide();
		$("#grass3").hide();
		$("#statue1").hide();
		$("#altar").hide();
		$("#pillars1").hide();
		$("#stairs").hide();
				
		$("#user").css("right", "34.5%").css("bottom", "32%");
		$("#la2").css("opacity", "100%").css("right", "46%");
		$("#boat").css("right", "30.4%");
		
		$(".background1").hide();
		$(".background2").css("opacity", "100%");
		$("#star").css("opacity", "100%");
			
		$("#water1").hide();
		$("#water2").css("opacity", "100%");
		
			
		$("#la1").hide();
		
		$("#voice").trigger("play");
		$("#bgm").animate({volume: 0}, 4000);
		setTimeout(function () {
			$("#bgm").trigger("pause");
		}, 4000);
		setTimeout(function () {
			$("#bgm1").trigger("play");
		}, 3000);
		
		$("form").delay(2000).fadeOut(1000);
		
		$("#rock").animate({left: '0%'}, 7000).animate({left: '-148%'}, 95000);

		$("#user").delay(3000).animate({right: "59.5%"}, 1000); 
		$("#la2").delay(3000).animate({right: "71%"}, 1000);
		$("#boat").delay(3000).animate({right: "55.4%"}, 1000);
		$("#paper").delay(2500).animate({opacity: "100%"}, 500);
		$("#paperImg").delay(2500).animate({opacity: "100%"}, 500);
		
		var count = 0;
		
		$("#snakeAppear").delay(4000).animate({opacity: "100%"}).delay(4660).fadeOut();
		$("#snake1").delay(9000).animate({opacity: "100%"});
		$('#user').delay(1000).animate({opacity: "0%"});
		$("#userArm1").delay(5000).animate({opacity: "100%"}).delay(600).animate({opacity: "0%"});
		$("#userArm2").delay(6200).animate({opacity: "100%"}).delay(2200).animate({opacity: "0%"});
		$("#userArm3").delay(8800).animate({opacity: "100%"});
		$("#back").delay(9000).animate({opacity: "100%"}, 500);
		$("#target1").delay(9000).animate({opacity: "100%"}, 500);
		setTimeout(function(){$("input[name=flag]").val('true')},9500); 
		
		$('#spearTarget').delay(8800).fadeIn();
	
        $("#wrapper").click(function (e) {
			if ($("input[name=flag]").val() == 'true') {
				var spear_target = $('#spearTarget').offset().top;
				$("#effect5").trigger("play");
				$("#spear").css({top: spear_target});
				$("#spear").clearQueue().stop().animate({opacity: "100%"}, 500).animate({opacity: "0%"}, 1000);
				
				if (count == 0 && spear_target > $("#target1").offset().top - 30 && spear_target < $("#target1").offset().top + 30) {
					//1
					$("#snake1").fadeOut();
					$("#target1").fadeOut();
					$("#back").fadeOut();
					
					$("#blood1").css({top: spear_target});
					$("#blood1").fadeIn();
					$("#blood1").delay(300).fadeOut();
					
					//2
					setTimeout(function () {
						$("#effect2").trigger("play");
					}, 100);
					$("#snakeAttack").delay(100).animate({opacity: "100%"});
					$("#boatShake").delay(450).fadeIn();
					$("#userArm3").delay(450).animate({opacity: "0%"});
					$("#la2").delay(450).animate({opacity: "0%"});
					$("#boat").delay(450).animate({opacity: "0%"});
					
					//3
					$("#snakeAttack").delay(600).animate({opacity: "0%"});
					$("#boatShake").delay(550).fadeOut();
					$("#userArm3").delay(750).animate({opacity: "100%"});
					$("#la2").delay(750).animate({opacity: "100%"});
					$("#boat").delay(750).animate({opacity: "100%"});
					$("#back").delay(750).fadeIn();
					$("#snake3").delay(1200).animate({opacity: "100%"});
					$("#target2").delay(1200).fadeIn();
					count = 1;
				}
				else if(count == 1 && spear_target > $("#target2").offset().top - 50 && spear_target < $("#target2").offset().top + 50) {
					$("#boatShake").hide();
					$("#blood2").css({top: spear_target});
					$("#blood2").fadeIn();
					$("#blood2").delay(300).fadeOut();
					
					count = 2;
					
					setTimeout(function () {
						$("#effect3").trigger("play");
					}, 100);
					
					$('#spearTarget').hide();
					$("#snake3").hide();
					$("#userArm3").hide();
					$("#userArm4").css("opacity", "100%");
					$("#userArm4").delay(3100).animate({opacity: "0%"});
					$("#user").delay(3100).animate({opacity: "100%"}).animate({right: "34.5%"}, 2000);
					$("#back").hide();
					$("#paper").hide();
					$("#paperImg").hide();
					$("#snakeDead").delay(100).animate({opacity: "100%"}).delay(3500).animate({opacity: "0%"}, 100);
					
					$("#rock").delay(3500).stop().animate({left: '-148%'}, 8000);
					
					$("#la2").delay(3500).animate({right: "46%"}, 2000);
					$("#boat").delay(3500).animate({right: "30.4%"}, 2000);
					
					setTimeout("$('form').submit()", 11500);
				}
			}
        })
	}
	else if(scene == 4) {
		$("#bgm1").animate({volume: 0}, 4000);
		setTimeout(function () {
			$("#bgm1").trigger("pause");
		}, 4000);
		setTimeout(function () {
			$("#bgm").trigger("play");
		}, 3000);
		$("#voice").trigger("play");
		$("#dialogue").on("click", function() { $("form").submit(); });	
		setting2();
		
		$(".background2").fadeOut(2000);
		$(".background3").animate({opacity: "100%"}, 1000);
		
		$("#water1").fadeIn(2000);
		$("#water2").fadeOut(2000);
	}
	else if(scene == 5) {
		$("#voice").trigger("play");
		$("#effect3").trigger("pause");
		$("#effect4").trigger("play");
		setting();
		
		$(".background2").hide();
		$(".background3").css("opacity", "100%");
		
		$("#user").css("right", "34.5%").css("bottom", "32%");
		$("#la1").css("opacity", "100%").css("right", "46%");
		$("#boat").css("right", "30.4%");
		
		$("#dialogue").on("click", function() { 
			setTimeout("$('form').submit()", 4000);		
			$("#la1").hide();		
			$("#la2").css('opacity', '100%').css("right", "46%");
			
			$("form").fadeOut(1000);
			$("#user").animate({right: "59.5%"}, 4000);
			$("#la2").animate({right: "71%"}, 4000);
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
	else if(scene == 6) {
		$("#voice").trigger("play");
		setting();
		
		$(".background2").hide();
		$(".background3").css("opacity", "100%");
		
		$("#user").css("right", "59.5%").css("bottom", "32%");
		$("#la1").css("opacity", "100%").css("right", "71%");
		$("#boat").css("right", "55.4%");
	
		$("#tree").css("right", "44%");
		$("#grass4").css("right", "0%");
		$("#ground").css("right", "0%");
		$("#pillars2").css("right", "0%");
		$("#statue2").css("right", "14%");
		$("#deco2").css("right", "43.2%");
		$("#grass5").css("right", "13.2%");
		$("#flower").css("right", "6.5%");
	}
}

function setting() {		
	$("#la2").css('opacity', '0');
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
	
	$("#user").css("right", "34.5%").css("bottom", "32%");
	$("#la1").css("opacity", "100%").css("right", "46%");
	$("#boat").css("right", "30.4%");
	
	$(".background1").hide();
	$(".background2").css("opacity", "100%");
	$("#star").css("opacity", "100%");
		
	$("#water1").hide();
	$("#water2").css("opacity", "100%");
}