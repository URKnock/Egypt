var count = 0;
function interaction() {
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide2").delay(500).animate({opacity: "100%"}, 500)
	.delay(2000).animate({opacity: "0%"}, 500);
	
	//개미 기어옴
	
	setTimeout(function() {
			$(".ant1").attr("src", 
			"/D/resources/object/ch05/1_ant_1도입.webp");
		}, 3000); 
	setTimeout(function() {
			$(".ant1").attr("src", 
			"/D/resources/object/ch05/1_ant_2싸워.webp");
		}, 6100); 		
	setTimeout(function() {
			$(".ant1").attr("src", 
			"/D/resources/object/ch05/1_ant_3기다려.webp");
		}, 7000); 
	setTimeout(function() {
			$(".ant2").attr("src", 
			"/D/resources/object/ch05/2_ant_1도입.webp");
		}, 3000); 
	setTimeout(function() {
			$(".ant2").attr("src", 
			"/D/resources/object/ch05/2_ant_3기다려.webp");
		}, 7000); 
	setTimeout(function() {
			$(".ant3").attr("src", 
			"/D/resources/object/ch05/3_ant_1도입.webp");
		}, 3000); 
	setTimeout(function() {
			$(".ant3").attr("src", 
			"/D/resources/object/ch05/3_ant_3기다려.webp");
		}, 7000); 
	setTimeout(function() {
			$(".ant4").attr("src", 
			"/D/resources/object/ch05/1_ant_1도입복사.webp");
		}, 3000); 
	setTimeout(function() {
			$(".ant4").attr("src", 
			"/D/resources/object/ch05/1_ant_3기다려복사.webp");
		}, 7000); 		
		
	$(".ant1").on("load", function() {
			$(".ant1").one("click", function() {
			console.log(count); 
			$(".ant1").attr("src", 
			"/D/resources/object/ch05/개미_죽음왼.webp").fadeOut(2000);
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
}