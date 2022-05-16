var count = 0;
function interaction() { 	
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide3").delay(500).animate({opacity: "100%"}, 500)
	.delay(1200).animate({opacity: "0%"}, 500);
	
	setTimeout(function() {
			$(".bug1").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작.webp");
		}, 3000); 
		//webp오면 대체.
	setTimeout(function() {
			$(".bug1").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작.webp");
		}, 3000); 		
	setTimeout(function() {
			$(".bug2").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작2.webp");
		}, 3000); 
	setTimeout(function() {
			$(".bug3").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작3.webp");
		}, 3000); 
	setTimeout(function() {
			$(".bug4").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작4.webp");
		}, 3000); 
		
	$(".bug1").one("click", function() {
			count++;
			console.log(count);
			$(".bug1").attr("src", 
			"/D/resources/object/ch05/풍뎅이_죽음위.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	$(".bug2").one("click", function() {
			count++;
			console.log(count);
			$(".bug2").attr("src", 
			"/D/resources/object/ch05/풍뎅이_죽음위.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	$(".bug3").one("click", function() {
			count++;
			console.log(count);
			$(".bug3").attr("src", 
			"/D/resources/object/ch05/풍뎅이_죽음위.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	$(".bug4").one("click", function() {
			count++;
			console.log(count);
			$(".bug4").attr("src", 
			"/D/resources/object/ch05/풍뎅이_죽음위.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	//setTimeout("$('form').submit()", 3000);	
}