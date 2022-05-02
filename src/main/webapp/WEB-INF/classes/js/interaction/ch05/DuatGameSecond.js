var count = 0;
$(function init() { 
	
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide").delay(500).animate({opacity: "100%"}, 500)
	.delay(2000).animate({opacity: "0%"}, 500);
	
	//개미 기어옴
	
	setTimeout(function() {
			console.log("셋탐 호출");
			$(".ant1").attr("src", 
			"/D/resources/object/ch05/벌레임시파일.png");
		}, 3000); 
	setTimeout(function() {
			console.log("셋탐 호출");
			$(".ant2").attr("src", 
			"/D/resources/object/ch05/벌레임시파일.png");
		}, 3000); 
	setTimeout(function() {
			console.log("셋탐 호출");
			$(".ant3").attr("src", 
			"/D/resources/object/ch05/벌레임시파일.png");
		}, 3000); 
	setTimeout(function() {
			console.log("셋탐 호출");
			$(".ant4").attr("src", 
			"/D/resources/object/ch05/벌레임시파일.png");
		}, 3000); 		
		
	$(".ant1").on("load", function() {
			$(".ant1").one("click", function() {
			console.log(count); 
			$(".ant1").attr("src", 
			"/D/resources/object/ch05/개미_죽음왼.webp");
			isclicked();
			$(".ant1").fadeOut(2000);
		
			if(count == 2) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});	
	$(".ant2").on("load", function() {
			$(".ant2").one("click", function() {
			console.log(count); 
			$(".ant2").attr("src", 
			"/D/resources/object/ch05/개미_죽음오.webp");
			//isclicked();
			$(".ant2").fadeOut(2000);
		
			if(count == 2) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});	
	$(".ant3").on("load", function() {
			$(".ant3").one("click", function() {
			console.log(count); 
			$(".ant3").attr("src", 
			"/D/resources/object/ch05/개미_죽음왼.webp");
			isclicked();
			$(".ant3").fadeOut(2000);
		
			if(count == 2) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});		
	$(".ant4").on("load", function() {
			$(".ant4").one("click", function() {
			console.log(count); 
			$(".ant4").attr("src", 
			"/D/resources/object/ch05/개미_죽음오.webp");
			isclicked();
			$(".ant4").fadeOut(2000);
		
			if(count == 2) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});		
	
		function isclicked() {
			count++;
		}

	
});