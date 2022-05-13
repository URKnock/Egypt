var count = 0;
function interaction() {
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide2").delay(500).animate({opacity: "100%"}, 500)
	.delay(2000).animate({opacity: "0%"}, 500);
	
	//사자 대기중
		setTimeout(function() {
			$(".saja").delay(5000).css({left:"-20%"});	
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_1처음.webp");
		}, 2900); 
		setTimeout(function() {
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_2대기.webp");
		}, 5000); 
		
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
			count++;
			$(".ant1").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});	
	$(".ant2").on("load", function() {
			$(".ant2").one("click", function() {
			console.log(count); 
			$(".ant2").attr("src", 
			"/D/resources/object/ch05/개미_죽음오.webp");
			count++;
			$(".ant2").fadeOut(2000);
		
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});	
	$(".ant3").on("load", function() {
			$(".ant3").one("click", function() {
			console.log(count); 
			$(".ant3").attr("src", 
			"/D/resources/object/ch05/개미_죽음왼.webp");
			count++;
			$(".ant3").fadeOut(2000);
		
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});		
	$(".ant4").on("load", function() {
			$(".ant4").one("click", function() {
			console.log(count); 
			$(".ant4").attr("src", 
			"/D/resources/object/ch05/개미_죽음오.webp");
			count++;
			$(".ant4").fadeOut(2000);		
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});		
	
}