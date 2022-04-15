var clicked = [1, 2, 3, 4];
var count = 0;
$(function init() { 
	if(scene == 5) { /*이런 말하기도 무섭게*/
		$("#background").children().hide();
		$("form").hide().fadeIn(1000)
		.fadeOut(2000);
		
		setTimeout(function() {
			$(".spear").css({opacity: "100%"}, 500);
		}, 1800);

		$(".spear").delay(2900).animate({left: "45%"}, 1000)
		.fadeOut(1000);
		
		setTimeout(function() {
			$(".mainC").animate({opacity: "0%"}, 500);
		}, 3900);
		
		setTimeout(function() {
			$(".mainC_k").animate({opacity: "100"}, 500)
			.fadeOut(1000);
			$(".mainC_s").animate({opacity: "100"}, 500);
		}, 4000);
		
		/*setTimeout("$('form').submit()", 7000); */
		
		setTimeout(function() {
			$(".crocsi4").attr("src", 
			"/D/resources/object/ch05/cro_start.webp");
		}, 4900);
		setTimeout(function() {
			$(".crocsi3").attr("src", 
			"/D/resources/object/ch05/cro_start.webp");
		}, 4900);
		setTimeout(function() {
			$(".crocsi2").attr("src", 
			"/D/resources/object/ch05/cro_start.webp");
		}, 4900);
		
/*	지후가 하단 좌우주면 다시 하기.
	setTimeout(function() {
			$(".crocsi4").attr("src", 
			"/D/resources/object/ch05/cro_start.webp");
		}, 4900); */
		
		/* 악어 추가되면 if count == 4로 바꾸기 */
		$(".crocsi2").on("click", function() { 
			$(this).fadeOut(2000);
			isclicked();
			if(count == 3) {
				setTimeout("$('form').submit()", 2000);
				}
			 });
		$(".crocsi3").on("click", function() { 
			$(this).fadeOut(2000);
			isclicked();
			if(count == 3) {
				setTimeout("$('form').submit()", 2000);
				}
			 });
		$(".crocsi4").on("click", function() { 
			$(this).fadeOut(2000);
			isclicked();
			if(count == 3) {
				setTimeout("$('form').submit()", 2000);
				}			
			 });

		function isclicked() {
			count++;
		}

	}
		
		
	
});