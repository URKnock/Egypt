var count = 0;

$(function init() { 	
		$("#background").children().hide();
		$("form").hide();
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
				$(".crocsi2").off("click");
				console.log(count);
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
		
	
});