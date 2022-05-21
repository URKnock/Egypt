var snake1 = 0;
var snake2 = 0;
var cnt = 0;
var effect = new Audio('resources/bgm/ch05/crush.mp3');
function interaction() {	
	
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide2").delay(500).animate({opacity: "100%"}, 500)
	.delay(1200).animate({opacity: "0%"}, 500);
	
	setTimeout(function() {
	$(".saja").css({left:"-20%"});	
	$(".saja").attr("src",
			"/resources/character/ch05/창든사자(위)_1처음우.webp");
	}, 3000); 
	setTimeout(function() {
	//$(".saja").css({left:"-20%"});
	$(".saja").attr("src",
			"/resources/character/ch05/창든사자(위)_2대기우.webp");
	}, 4100); 
		
	setTimeout(function() {
	$(".snake1").attr("src",
			"/resources/object/ch05/뱀싸움.webp");
	}, 3500); 
	setTimeout(function() {
	$(".snake1_1").attr("src",
			"/resources/object/ch05/뱀잔상.webp");
	}, 3500); 	
	setTimeout(function() {
	$(".snake2").attr("src",
			"/resources/object/ch05/뱀싸움.webp");
	}, 4200); 	
	setTimeout(function() {
	$(".snake2_2").attr("src",
			"/resources/object/ch05/뱀잔상.webp");
	}, 4200); 	
	
				
	$(".snake1").on("click", function() {
			effect.play();
			snake1++;
			console.log(snake1);
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_3쏴.webp").stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_2대기.webp").clearQueue().stop(); }, 2000);
			if(snake1 == 2) {
			cnt++;
			$(".snake1").attr("src", 
			"/resources/object/ch05/뱀_죽음왼.webp").fadeOut(2000);
			$(".snake1_1").fadeOut(1000);
			$(".s2").attr("src", 
			"/resources/object/ch05/뱀만다라1.webp");	
			$(".s4").attr("src", 
			"/resources/object/ch05/뱀만다라2.webp");			
			}

			if(cnt == 2) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	$(".snake2").on("click", function() {
			effect.play();
			snake2++;
			console.log(snake2);
			$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_3쏴우.webp").stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/resources/character/ch05/창든사자(위)_2대기우.webp").clearQueue().stop(); }, 2000);
			if(snake2 == 2) {
			cnt++;
			$(".snake2").attr("src", 
			"/resources/object/ch05/뱀_죽음왼.webp").fadeOut(2000);
			$(".snake2_1").fadeOut(1000);
			$(".s3").attr("src", 
			"/resources/object/ch05/뱀만다라3.webp");	
			$(".s1").attr("src", 
			"/resources/object/ch05/뱀만다라4.webp");			
			}

			if(cnt == 2) {
				setTimeout("$('form').submit()", 3000);
			}
		});
	//setTimeout("$('form').submit()", 3000);
	
	function mandara() {
			if(count == 2) {
			$(".s2").attr("src", 
			"/resources/object/ch05/뱀만다라1.webp");	
			$(".s4").attr("src", 
			"/resources/object/ch05/뱀만다라4.webp");			
			}
			else if(count == 4){
			$(".m2").attr("src", 
			"/resources/object/ch05/풍뎅이만다라2.webp");	
			}

			}
}
