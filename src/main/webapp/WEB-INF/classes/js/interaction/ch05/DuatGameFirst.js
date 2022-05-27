var count = 0;
var effect = new Audio('resources/bgm/ch05/crush.mp3');
function interaction() {	
	
/*	$(".guide2")
		.animate({opacity: "100%"}, 500)
		.animate({opacity: "0%"}, 3000);*/
		$("#background").children().hide();
		$("form").hide();
		//$(".saja").css({left:"30%"});
	

	
		setTimeout(function() {
			$(".spear").css({opacity: 1});
		}, 1800);

		$(".spear").delay(2900).animate({left: "45%"}, 1000).fadeOut(1000);
		
		//$(".saja").delay(3200).animate({opacity: "0%"});
			setTimeout(function() {
			//$(".saja").delay(5000).css({left:"-8%"});
			$(".saja").clearQueue().stop();

			$(".saja").attr("src", 
			"/resources/character/ch05/반짝사자(12).webp");
		}, 3300);
			setTimeout(function() {

			$(".saja").attr("src", 
			"/resources/character/ch05/숨셔창사자(38).webp");
		}, 3800);
		//$(".saja").delay(3300).animate({opacity: "100%"});
		setTimeout(function() {
		$("#order").css("display", "flex");
		$("#order").text("마우스로 클릭하여 악어를 처치해주세요.");
		}, 4000); 

		
		//$(".guide2").delay(4000).animate({opacity: "100%"}, 500).delay(2000).animate({opacity: "0%"}, 500);
		
/*		setTimeout(function() {
			$(".saja").delay(5000).css({left:"-20%"});
		}, 4200); */
		
		
		//사자 대기중으로 바뀜
		setTimeout(function() {
		$(".saja").delay(5000).css({top:"2.5%"});	
		$(".saja").delay(5000).css({left:"16%"});
		
		$(".saja").attr("src", 
		"/resources/character/ch05/창든사자(위)_1처음우.webp");
		}, 5000); 
		$(".mandara1").delay(5000).animate({opacity: "100%"}, 1000);
		setTimeout(function() {
		$(".saja").attr("src", 
		"/resources/character/ch05/창든사자(위)_2대기우.webp");
		}, 6700); 		
		//악어 튀어나오고
		 setTimeout(function() {
			console.log("셋탐 호출");
			$(".crocsi4").attr("src", 
			"/resources/object/ch05/악어_시작오.webp");
		}, 6900); 
		
		setTimeout(function() {
			console.log("셋탐 호출2");
			$(".crocsi4").attr("src", 
			"/resources/object/ch05/악어_진행오.webp");
		}, 8400); 
		
		setTimeout(function() {
			$(".crocsi3").attr("src", 
			"/resources/object/ch05/악어_시작왼.webp");		
		}, 6400);
		
		setTimeout(function() {
			$(".crocsi3").attr("src", 
			"/resources/object/ch05/악어_진행왼.webp");		
		}, 7900);

		setTimeout(function() {
			$(".crocsi2").attr("src", 
			"/resources/object/ch05/악어_시작오.webp");					
		}, 5000); 	
		
		setTimeout(function() {
			$(".crocsi2").attr("src", 
			"/resources/object/ch05/악어_진행오.webp");
		}, 6500); 		
			
		setTimeout(function() {
			$(".crocsi1").attr("src", 
			"/resources/object/ch05/악어_시작왼.webp");
		}, 4900);
		
 		setTimeout(function() {
			$(".crocsi1").attr("src", 
			"/resources/object/ch05/악어_진행왼.webp");
		}, 6400); 
		

		$(".crocsi1").on("load", function() {
			$(".crocsi1").one("click", function() {
			effect.play();
			$(".spearno").attr("src", 
			"/resources/object/ch05/창날리기_좌상(24).webp");
			console.log(count); 
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_3쏴.webp").clearQueue().stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_2대기.webp").clearQue().stop(); }, 2000);
			$(".crocsi1").attr("src", 
			"/resources/object/ch05/악어_죽음왼.webp");
			mandara();
/*			$(".m1").attr("src", 
			"/resources/object/ch05/악어만다라1.webp");*/
			isclicked();
			$(".crocsi1").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 4000);
				}
			
			 });
		});		
		
		$(".crocsi2").on("load", function() {
		
			$(".crocsi2").one("click", function() {	
				effect.play();
			$(".spearno2").attr("src", 
			"/resources/object/ch05/창날리기_우상(24).webp");						
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_3쏴우.webp").clearQueue().stop();	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_2대기우.webp").clearQueue().stop(); }, 2000);			
			console.log(count); 
			$(".crocsi2").attr("src", 
			"/resources/object/ch05/악어_죽음오.webp");
/*			$(".m1").attr("src", 
			"/resources/object/ch05/악어만다라2.webp");*/
			mandara();
			isclicked();
			$(".crocsi2").fadeOut(2000);
		
			if(count == 8) {
				setTimeout("$('form').submit()", 4000);
				}
			
			 });
		});
		
		
		
		$(".crocsi3").on("load", function() {
			$(".crocsi3").one("click", function() { 
				effect.play();
				console.log(count);
			$(".spearno3").attr("src", 
			"/resources/object/ch05/창날리기_좌하1(23).webp");
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하1)_3쏴.webp").clearQueue().stop();	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하1)_2대기.webp").clearQueue().stop(); }, 2000);						
			$(".crocsi3").attr("src", 
			"/resources/object/ch05/악어_죽음왼.webp");
			mandara();
			isclicked();
			$(".crocsi3").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 4000);
				}
			 });
		});
		
		$(".crocsi4").on("load", function() {
			$(".crocsi4").one("click", function() { 
				effect.play();
			$(".spearno4").attr("src", 
			"/resources/object/ch05/창날리기_우하1(23).webp");	
				console.log(count);
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하1)_3쏴우.webp").clearQueue().stop();					
			//원상태로 돌아오는 setTime함수넣기.
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(하1)_2대기우.webp").clearQueue().stop(); }, 2000);
			$(".crocsi4").attr("src", 
			"/resources/object/ch05/악어_죽음오.webp");
			mandara();
			isclicked();
			$(".crocsi4").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 4000);
				}
			 });
		});


		function isclicked() {
			count++;
		}
		
		function mandara() {
			if(count == 1) {
			$(".m1").attr("src", 
			"/resources/object/ch05/악어만다라1.webp");				
			}
			else if(count == 3){
			$(".m1").attr("src", 
			"/resources/object/ch05/악어만다라2.webp");	
			}
			else if(count == 5){
			$(".m1").attr("src", 
			"/resources/object/ch05/악어만다라3.webp");	
			}
			else if(count == 7){
			$(".m1").attr("src", 
			"/resources/object/ch05/악어만다라4.webp");	
			}
			}
}
