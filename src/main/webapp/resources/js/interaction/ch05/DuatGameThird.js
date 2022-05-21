var count = 0;
var effect = new Audio('resources/bgm/ch05/crush.mp3');
function interaction() { 	
	$("#background").children().hide();
	$("form").hide();
	
	//마우스로 클릭하여 안내문
	$(".guide3").delay(500).animate({opacity: "100%"}, 500)
	.delay(1200).animate({opacity: "0%"}, 500);
	$(".saja").css({left:"-8%"});
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
			"/D/resources/object/ch05/풍뎅이싸움.webp");
		}, 7900); 
	setTimeout(function() {
			$(".bug2").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작2.webp");
		}, 3000); 
	setTimeout(function() {
			$(".bug2").attr("src", 
			"/D/resources/object/ch05/풍뎅이싸움.webp");
		}, 7900); 
	setTimeout(function() {
			$(".bug3").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작3.webp");
		}, 3000); 
	setTimeout(function() {
			$(".bug3").attr("src", 
			"/D/resources/object/ch05/풍뎅이싸움.webp");
		}, 7900); 		
	setTimeout(function() {
			$(".bug4").attr("src", 
			"/D/resources/object/ch05/풍뎅이_시작4.webp");
		}, 3000); 
	setTimeout(function() {
			$(".bug4").attr("src", 
			"/D/resources/object/ch05/풍뎅이싸움.webp");
		}, 7900); 
				
	$(".bug1").one("click", function() {
			effect.play();
			count++;
			console.log(count);
			mandara();
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_3쏴.webp").stop();
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_2대기.webp").stop(); }, 2000);
			$(".bug1").attr("src", 
			"/D/resources/object/ch05/풍뎅이죽음아래.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3500);
			}
		});
	$(".bug2").one("click", function() {
			effect.play();
			count++;
			mandara();
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_3쏴우.webp").stop();	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(위)_2대기우.webp").stop(); }, 2000);
			console.log(count);
			$(".bug2").attr("src", 
			"/D/resources/object/ch05/풍뎅이죽음아래.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3500);
			}
		});
	$(".bug3").one("click", function() {
			effect.play();
			count++;
			mandara();
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_3쏴.webp").stop();	
			//다시 원상태
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_2대기.webp").stop(); }, 2000);
			console.log(count);
			$(".bug3").attr("src", 
			"/D/resources/object/ch05/풍뎅이죽음아래.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3500);
			}
		});
	$(".bug4").one("click", function() {
			effect.play();
			count++;
			mandara();
			$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_3쏴우.webp").stop();					
			//원상태로 돌아오는 setTime함수넣기.
			setTimeout(function() {$(".saja").attr("src", 
			"/D/resources/character/ch05/창든사자(하1)_2대기우.webp").stop(); }, 2000);
			console.log(count);
			$(".bug4").attr("src", 
			"/D/resources/object/ch05/풍뎅이죽음아래.webp").fadeOut(2000);
			if(count == 4) {
				setTimeout("$('form').submit()", 3500);
			}
		});
	//setTimeout("$('form').submit()", 3000);
	function mandara() {
			if(count == 1) {
			$(".m2").attr("src", 
			"/D/resources/object/ch05/풍뎅이만다라1.webp");			
			}
			else if(count == 2){
			$(".m2").attr("src", 
			"/D/resources/object/ch05/풍뎅이만다라2.webp");	
			}
			else if(count == 3){
			$(".m2").attr("src", 
			"/D/resources/object/ch05/풍뎅이만다라3.webp");
			}
			else if(count == 4){
			$(".m2").attr("src", 
			"/D/resources/object/ch05/풍뎅이만다라4.webp");
			}
			}		
}