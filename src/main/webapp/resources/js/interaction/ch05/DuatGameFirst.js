var count = 0;

function interaction() {	
	$(".guide2")
		.animate({opacity: "100%"}, 500)
		.animate({opacity: "0%"}, 3000);
		$("#background").children().hide();
		$("form").hide();
		$(".saja").css({left:"-20%"});
	
		//사자 대기중으로 바뀜
		setTimeout(function() {
		$(".saja").attr("src", 
		"/D/resources/character/ch05/창든사자(위)_2대기.webp");
		}, 2800); 
		//악어 튀어나오고
		 setTimeout(function() {
			console.log("셋탐 호출");
			$(".crocsi4").attr("src", 
			"/D/resources/object/ch05/악어_시작오.webp");
		}, 6900); 
		
		setTimeout(function() {
			console.log("셋탐 호출2");
			$(".crocsi4").attr("src", 
			"/D/resources/object/ch05/악어_진행오.webp");
		}, 8400); 
		
		setTimeout(function() {
			$(".crocsi3").attr("src", 
			"/D/resources/object/ch05/악어_시작왼.webp");		
		}, 6400);
		
		setTimeout(function() {
			$(".crocsi3").attr("src", 
			"/D/resources/object/ch05/악어_진행왼.webp");		
		}, 7900);

		setTimeout(function() {
			$(".crocsi2").attr("src", 
			"/D/resources/object/ch05/악어_시작오.webp");					
		}, 5000); 	
		
		setTimeout(function() {
			$(".crocsi2").attr("src", 
			"/D/resources/object/ch05/악어_진행오.webp");
		}, 6500); 		
			
		setTimeout(function() {
			$(".crocsi1").attr("src", 
			"/D/resources/object/ch05/악어_시작왼.webp");
		}, 4900);
		
 		setTimeout(function() {
			$(".crocsi1").attr("src", 
			"/D/resources/object/ch05/악어_진행왼.webp");
		}, 6400); 
		

		$(".crocsi1").on("load", function() {
			$(".crocsi1").one("click", function() {
			console.log(count); 
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_3쏴.webp");
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_2대기.webp"); }, 2000);
			$(".crocsi1").attr("src", 
			"/D/resources/object/ch05/악어_죽음왼.webp");
			isclicked();
			$(".crocsi1").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});		
		
		$(".crocsi2").on("load", function() {
			$(".crocsi2").one("click", function() {
			$(".saja").css({'transform': "scaleX(-1)"});
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_3쏴.webp");	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_2대기.webp"); }, 2000);			
			console.log(count); 
			$(".crocsi2").attr("src", 
			"/D/resources/object/ch05/악어_죽음오.webp");
			isclicked();
			$(".crocsi2").fadeOut(2000);
		
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			
			 });
		});
		
		
		
		$(".crocsi3").on("load", function() {
			$(".crocsi3").one("click", function() { 
				console.log(count);
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_3쏴.webp");	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_2대기.webp"); }, 2000);						
			$(".crocsi3").attr("src", 
			"/D/resources/object/ch05/악어_죽음왼.webp");
			isclicked();
			$(".crocsi3").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			 });
		});
		
		$(".crocsi4").on("load", function() {
			$(".crocsi4").one("click", function() { 
				$(".crocsi2").off("click");
				console.log(count);
			$(".crocsi4").attr("src", 
			"/D/resources/object/ch05/악어_죽음오.webp");
			isclicked();
			$(".crocsi4").fadeOut(2000);
			if(count == 8) {
				setTimeout("$('form').submit()", 3000);
				}
			 });
		});


		function isclicked() {
			count++;
		}	
}