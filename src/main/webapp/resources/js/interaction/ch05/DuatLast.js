var fir = new Audio('resources/bgm/ch05/5_5_1_0.mp3');
var sec = new Audio('resources/bgm/ch05/5_5_2_0.mp3');
var thr = new Audio('resources/bgm/ch05/5_5_3_0.mp3');

function interaction() { 
	$("#background").children().hide();
	scene = $("input[name='scene']").val();
	$(".saja").css({left:"23%"});
	//$("#background").children().hide();
	//$("form").hide();
	if(scene == 12) {
		$("#loading").hide();
		$(".saja").css({left:"23%"});
		fir.play();
		$(".m1").fadeOut(3500);
		$(".m2").fadeOut(3500);
		$(".mandara1").fadeOut(3500);
		$(".mandara2").fadeOut(3500);
		$(".s1").fadeOut(3500);
		setTimeout(function() {
		$(".mandaras").animate({opacity: "100%"}, 1500);
	}, 3700); 
		
	}
	if(scene == 13) {
		$(".saja").css({left:"23%"});
		sec.play();
	$(".m1").css({opacity: 0});
		$(".m2").css({opacity: 0});
		$(".mandara1").css({opacity: 0});
		$(".mandara2").css({opacity: 0});
		
		$(".s1").css({opacity: 0});
		$(".mandaras").css({opacity: "100%"});
		$(".mandaras").css({top: "-11.6%"});
		$(".mandaras").css({left: "17.6%"});
		
	}
	if(scene == 14) {
		$(".saja").css({left:"23%"});
		thr.play();
		$(".m1").css({opacity: 0});
		$(".m2").css({opacity: 0});
		$(".mandara1").css({opacity: 0});
		$(".mandara2").css({opacity: 0});
		
		$(".s1").css({opacity: 0});
		$(".mandaras").css({opacity: "100%"});
		$(".mandaras").css({top: "-11.6%"});
		$(".mandaras").css({left: "17.6%"});
		$(".mandaras").animate({left: "-160%"}, 7500);
/*		$(".m2").animate({right: "120%"}, 5000);
		$(".mandara1").animate({right: "120%"}, 6000);
		$(".mandara2").animate({right: "120%"}, 6000);
		$(".s1").animate({left: "-120%"}, 6000);*/
		$(".keepers").animate({left: "90%"}, 6000);
		
		$("#dialogue").on("click", function() { $("#loading").fadeIn(2300); });	
		
		
	}
}