var count = 0;

function interaction() {
			$("#menu img:nth-child(2)").on("click", function() {
		location.href="/chapter02";
	});
	setSound();
	$("#background").children().hide();
	scene = $("input[name='scene']").val();
	
	if(scene == 5) { 
		//first.play();
		$("form").hide().delay(2200).fadeIn(1000);
		
		$("form").hide().fadeIn(1800).fadeOut(2000);
		
		setTimeout(function() {
			$(".spear").css({opacity: 1});
		}, 1800);

		//창 다가감
		$(".spear").delay(2900).animate({left: "45%"}, 1000).fadeOut(1000);
		$(".saja").delay(3000).animate({opacity: "0%"});
			setTimeout(function() {
			$(".saja").attr("src", 
			"/resources/character/ch05/하얀사자.png");
		}, 3100);
		$(".guide").delay(4000).animate({opacity: "100%"}, 500).delay(2000).animate({opacity: "0%"}, 500);
		
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
			$(".crocsi1").on("click", function() {
				$(".crocsi1").off("click");
				console.log(count); 
				$(".crocsi1").attr("src", "/resources/object/ch05/악어_죽음왼.webp");
				isclicked();
				$(".crocsi1").fadeOut(2000);
				if(count == 8) {
					setTimeout(function() { $('form').submit() }, 3000);
				}
			 });
		});		
		
		$(".crocsi2").on("load", function() {
			$(".crocsi2").on("click", function() {
				$(".crocsi2").off("click");
				console.log(count);
				$(".crocsi2").attr("src", "/resources/object/ch05/악어_죽음오.webp");
				isclicked();
				$(".crocsi2").fadeOut(2000);
				if(count == 8) {
					setTimeout(function() { $('form').submit() }, 3000);
				}
			});
		});
			
		$(".crocsi3").on("load", function() {
			$(".crocsi3").on("click", function() {
				$(".crocsi3").off("click");
				console.log(count); 
				$(".crocsi3").attr("src", "/resources/object/ch05/악어_죽음왼.webp");
				isclicked();
				$(".crocsi3").fadeOut(2000);
				if(count == 8) {
					setTimeout(function() { $('form').submit() }, 3000);
				}
			 });
		});
		
		$(".crocsi4").on("load", function() {
			$(".crocsi4").on("click", function() {
				$(".crocsi4").off("click");
				console.log(count);
				$(".crocsi4").attr("src", "/resources/object/ch05/악어_죽음오.webp");
				isclicked();
				$(".crocsi4").fadeOut(2000);
				if(count == 8) {
					setTimeout(function() { $('form').submit() }, 3000);
				}
			});
		});
		
		/* 악어 추가되면 if count == 4로 바꾸기 
		$(".crocsi2").on("click", function() { 
			$(".crocsi2").attr("src", 
			"/resources/object/ch05/악어_죽음오.webp");
			isclicked();
			if(count == 3) {
				setTimeout("$('form').submit()", 3000);
				}
			 });
		$(".crocsi3").on("click", function() { 
			$(".crocsi3").attr("src", 
			"/resources/object/ch05/악어_죽음오.webp");
			isclicked();
			if(count == 3) {
				setTimeout("$('form').submit()", 3000);
				}
			 });
		$(".crocsi4").on("click", function() { 
			$(".crocsi4").attr("src", 
			"/resources/object/ch05/악어_죽음오.webp");
			//$(".crocsi4").fadeOut(1500);
			isclicked();
			if(count == 3) {
				setTimeout("$('form').submit()", 3000);
				}			
			 }); 
		*/

		function isclicked() {
			count++;
		}
	}	
}
