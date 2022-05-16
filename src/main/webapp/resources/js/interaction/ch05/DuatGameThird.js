var count = 0;
function interaction() { 	
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide3").delay(500).animate({opacity: "100%"}, 500)
	.delay(1200).animate({opacity: "0%"}, 500);
	
			setTimeout(function() {
		$(".saja").delay(5000).css({left:"-20%"});	
		$(".saja").attr("src", 
		"/D/resources/character/ch05/창든사자(위)_1처음우.webp");
		}, 3000); 
		setTimeout(function() {
		$(".saja").attr("src", 
		"/D/resources/character/ch05/창든사자(위)_2대기우.webp");
		}, 4700); 	
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
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_3쏴.webp").stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_2대기.webp").stop(); }, 2000);
			$(".bug1").attr("src", 
			"/D/resources/object/ch05/풍뎅이_죽음위.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	$(".bug2").one("click", function() {
			count++;
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_3쏴우.webp").stop();	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_2대기우.webp").stop(); }, 2000);
			console.log(count);
			$(".bug2").attr("src", 
			"/D/resources/object/ch05/풍뎅이_죽음위.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	$(".bug3").one("click", function() {
			count++;
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_3쏴.webp").stop();	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_2대기.webp").stop(); }, 2000);
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