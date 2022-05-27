var clicked = [1, 2];
var which;
var count = 0;
var w, h, x, y;
var scene, index, flag;
var first = new Audio('resources/bgm/ch05/5_2_0_0.mp3');
var second = new Audio('resources/bgm/ch05/5_2_1_0.mp3');

$(document).ready(function() {
	$("#menu img:nth-child(1)").on("click", function() {
		$("#shabti").css("display", "flex");
	});
	$("#menu img:nth-child(2)").on("click", function() {
		location.href="/chapter02";
	});
	$("#menu img:nth-child(3)").on("click", function() {
		$("#setting").css("display", "flex");
	});
	$("#menu img:nth-child(4)").on("click", function() {
		$("#help").css("display", "flex");
	});
});

function setSomething() {
	setSound();
	setSetting();
	setHelp();
	setShabti();
	
	$("#setting").hide();
	$("#help").hide();
	$("#shabti").hide();
}

function home() {
	location.href = "/chapter02";
}

function init() {
	
	w = $("#background").width() / 1920;
	h = $("#background").height() / 1080;
	x = $("#background").width() / 2.0;
	
	$("#loading").hide();
	
	setDialogueSize();
	setSomething();
	
	scene = $("input[name='scene']").val();

	 if(scene == 1) { /* 여기가 어디여.. 씬0 */
		$("#gogoboat").animate({left: "150%"}, 15000);
		$("#boat").css({right: "-200%"});
		$("#la").css({right: "-200%"});
		$("form").hide().delay(3000).fadeIn(1000); 
		setTimeout(function() {
		$("#saja").attr("src", 
		"/resources/character/ch05/놀란사자(67).webp");
		}, 5000); 

		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 2) { /* 난태양의신라.  씬1 */
		$("#gogoboat").css({opacity:0});
		$("#boat").css({right: "-100%"});
		$("#la").css({right: "-80%"});
		$("#saja").attr("src", 
		"/resources/character/ch05/숨셔사자(65).webp");
		$("form").hide().delay(6500).fadeIn(1000);	
		$("#boat").animate({right: "5%"}, 6800);
		$("#la").animate({right: "30%"}, 6800);
		setTimeout(function() {
		first.play();
		$("#nextButton").css({"padding-top":"64px"});
		$("#nextButton").css({"padding-left":"12px"});
		}, 7400); 
} 
	
	 else if(scene == 3) { /* 두아트 정보창 */
		$("#nextButton").css({"padding-top":"64px"});
		$("#nextButton").css({"padding-left":"12px"});
		$("#order").css("display", "flex");
		$("#order").text("마우스로 클릭하여 주변을 둘러보세요.");
		$("#gogoboat").css({opacity:0});
		$("#saja").attr("src", 
		"/resources/character/ch05/숨셔사자(65).webp");
		$(".guide")
		.animate({opacity: "100%"}, 500)
		.animate({opacity: "0%"}, 3000);
		$("#la").css({right: "30%"});
		$("#boat").css({right: "5%"});
		$("#boat").addClass("pikachu");
		$("#boat").addClass("select");
		$("#earth").addClass("pikachu");
		$("#earth").addClass("select");

		$("#boat").on("click", function() {
			$("#boat").removeClass("select");
			$("#boat").removeClass("pikachu");
			show_info(18);
			count++;
			console.log(count);
			if(count >= 2) {
			//$("#la").css({'zIndex': 6});
/*			$("#la").addClass("pikachu");
			$("#la").addClass("select");*/
					
				}		 
			});
		$("#earth").on("click", function() {
			$("#earth").removeClass("select");
			show_info(17);
			count++;
			console.log(count);
					if(count >= 2) {
			$("#la").addClass("pikachu");
			$("#la").addClass("select2");
			$("#la").on("click", function() {
				$("#saja").css({left: "12.6%"});
				$("#saja").attr("src", 
				"/resources/character/ch05/두리번사자(112).webp");
				$("#loading").fadeIn(2300);
				setTimeout("$('form').submit()", 2000);
				});
	
			} 
				
				});
					
		} 
		
/*		else if(scene == 3) {
			 $("form").delay(2000).fadeIn(1000)
		.fadeOut(2000); 
			}*/
			
		else if(scene == 4) { //탑승했는가? 출발하겠다
		$("#gogoboat").css({opacity:0});
		second.play();
		$("#gogo").css({opacity: "1"});
		$("#gogo").css({'zIndex': 5});
		$("#saja").css({opacity: "0"});
		$("body").delay(2000).fadeIn(2000);		
		$("#con").delay(3000).fadeOut(2000);
	   // $("form").delay(3000).fadeIn(1000).fadeOut(2000); 
		/*$("#user1").css({top:300, left:900});*/
		$("#earth").delay(2000).animate({left: "-50%"}, 5000);
		$("#gogo").animate({left: "37.5%"}, 3500);
		//$("#gogo").css({left: "200%"});
	  
		
		setTimeout(function() { $("form").submit(); }, 9000); 
		}
			
	$("#dialogue").click(function() {
		$("form").submit();
	});
	
$("#dialogue").delay(4000).on("click", function() { 
			setTimeout("$('form').submit()", 4000);
			});		
			
/*function objectSubmit(select, which) {
		$(select).removeClass("select");
		if(which == 1) {
			clicked.splice(0,1);
			console.log(which);
			console.log(clicked);
		}
		else if(which == 2) {
			clicked.splice(1,1);
			console.log(which);
			console.log(clicked);
		}
		if(clicked.length == 0) {
			$("#la").addClass("pikachu");
			$("#la").addClass("select");
			$("#la").click(function() {
				$(select).removeClass("select");
				$("#user1").animate({top:300, left:900}, 2000);
				$("body").fadeOut(2000);
				setTimeout("$('form').submit()", 2000);
			});
		}
		
}*/

}
function interaction() {};
