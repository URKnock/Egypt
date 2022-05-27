var count = 0;
var effect = new Audio('resources/bgm/ch05/crush.mp3');
function interaction() {
	$("#background").children().hide();
	$("form").hide();
	$(".saja").css({left:"-8%"});
	//마우스로 클릭하여 안내문
	$("#order").css("display", "flex");
	$("#order").text("마우스로 클릭하여 벌레를 처치해주세요.");
	//$(".guide2").delay(500).animate({opacity: "100%"}, 500)
	//.delay(2000).animate({opacity: "0%"}, 500);
	$(".saja").css({left:"23%"});
	//사자 대기중
		setTimeout(function() {
		$(".saja").delay(5000).css({top:"2.5%"});	
		$(".saja").delay(5000).css({left:"16%"});
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하2)_1처음우.webp");
		}, 2900); 
		setTimeout(function() {
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하2)_2대기우.webp");
		}, 5000); 
				$("#menu img:nth-child(2)").on("click", function() {
		location.href="/chapter02";
	});
		
		
	//1개미
	setTimeout(function() {
			$(".ant1").attr("src", 
			"/resources/object/ch05/1개미도입.webp");
		}, 2850); 
	setTimeout(function() {
			$(".ant1").css({left:"-16%"});
			$(".ant1").css({top:"42%"});
			$(".ant1").attr("src", 
			"/resources/object/ch05/1_ant_wait(47).webp");
		}, 7950); 	
	////////////////////////////////////	
		
	//2개미	
	setTimeout(function() {
		
			$(".ant2").attr("src", 
			"/resources/object/ch05/2개미도입.webp");
		}, 2850); 
	setTimeout(function() {
			//$(".ant2").css({left:"31.4%"});
			$(".ant2").css({top:"44%"});
			$(".ant2").attr("src", 
			"/resources/object/ch05/2_ant_wait(44).webp");
		}, 8000); 
	////////////////////////////////////	
		
		
	//3개미
	setTimeout(function() {
			$(".ant3").attr("src", 
			"/resources/object/ch05/3개미도입.webp");
		}, 4300); 
	setTimeout(function() {
			$(".ant3").css({top:"53%"});
			$(".ant3").css({left:"49%"});
			$(".ant3").attr("src", 
			"/resources/object/ch05/3_ant_wait(43).webp");
		}, 7800); 
		
	////////////////////////////////////
		
	//4개미
	setTimeout(function() {
			$(".ant4").attr("src", 
			"/resources/object/ch05/1개미도입복사.webp");
		}, 3000); 
	setTimeout(function() {
		    $(".ant4").css({top:"36%"});
			$(".ant4").css({left:"56.7%"});
			$(".ant4").attr("src", 
			"/resources/object/ch05/1_ant_wait(47)복.webp");
		}, 8250); 		
		
	////////////////////////////////////
		
	$(".ant1").on("load", function() {		
			$(".ant1").one("click", function() {
			count++;	
			$(".s1").css({'zIndex': 5});
			$(".s1").attr("src", 
			"/resources/object/ch05/창날리기_좌하1(23).webp").clearQueue().stop();
			effect.play();
			console.log(count); 
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하2)_3쏴.webp").clearQueue().stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(중)_2대기.webp").clearQueue().stop(); }, 2550);
			$(".ant1").css({left:"3%"});
			$(".ant1").attr("src", 
			"/resources/object/ch05/개미_죽음왼.webp").fadeOut(2000);
			
			
			mandara();
			$(".ant1").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 3600);
				}
			
			 });
		});	
	$(".ant2").on("load", function() {	
			$(".ant2").one("click", function() {
			count++;	
			$(".s2").css({'zIndex': 5});
			$(".s2").attr("src", 
			"/resources/object/ch05/창날리기_우하2(17).webp").clearQueue().stop();
			effect.play();
			console.log(count); 
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하2)_3쏴.webp").clearQueue().stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(중)_2대기.webp").clearQueue().stop(); }, 2550);
			$(".ant2").css({top:"46%"});
			$(".ant2").css({left:"20%"});
			$(".ant2").attr("src", 
			"/resources/object/ch05/개미_죽음왼.webp");
			mandara();
			$(".ant2").fadeOut(2000);
		
			if(count == 8) {
				setTimeout("$('form').submit()", 3600);
				}
			
			 });
		});	
	$(".ant3").on("load", function() {
			$(".ant3").one("click", function() {
			count++;
			$(".s3").css({'zIndex': 5});
			$(".s3").attr("src", 
			"/resources/object/ch05/창날리기_우하2(17)2.webp").clearQueue().stop();
			effect.play();
			console.log(count); 
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하2)_3쏴우.webp").clearQueue().stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하1)_2대기우.webp").clearQueue().stop(); }, 1700);
			$(".ant3").css({left:"35%"});
			$(".ant3").attr("src", 
			"/resources/object/ch05/개미_죽음왼.webp");
			mandara();
			$(".ant3").fadeOut(2000);
		
			if(count == 8) {
				setTimeout("$('form').submit()", 3600);
				}
			
			 });
		});		
	$(".ant4").on("load", function() {
			$(".ant4").one("click", function() {
			count++;	
			$(".s4").css({'zIndex': 5});
			$(".s4").attr("src", 
			"/resources/object/ch05/창날리기_우하1(23).webp").clearQueue().stop();	
			effect.play();
			console.log(count); 
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하1)_3쏴우.webp").clearQueue().stop();	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_2대기우.webp").clearQueue().stop(); }, 2400);			
			$(".ant4").css({left:"46%"});
			$(".ant4").attr("src", 
			"/resources/object/ch05/개미_죽음오.webp");
			mandara();
			$(".ant4").fadeOut(2000);		
			if(count == 8) {
				setTimeout("$('form').submit()", 3600);
				}
			
			 });
		});	
		function mandara() {
			if(count == 1) {
			$(".m1").attr("src", 
			"/resources/object/ch05/벌레만다라1.webp");				
			}
			else if(count == 3){
			$(".m1").attr("src", 
			"/resources/object/ch05/벌레만다라2.webp");	
			}
			else if(count == 5){
			$(".m1").attr("src", 
			"/resources/object/ch05/벌레만다라3.webp");	
			}
			else if(count == 7){
			$(".m1").attr("src", 
			"/resources/object/ch05/벌레만다라4.webp");	
			}
			}	
}
