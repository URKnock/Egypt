var clicked = [1, 2];
var which;
var count = 0;
var w, h, x, y;
var scene, index, flag;
var first = new Audio('resources/bgm/ch05/5_2_0_0.mp3');
var second = new Audio('resources/bgm/ch05/5_2_1_0.mp3');

function init() {
	
	$("#loading").hide() ;
	setSound(); 
	setDialogueSize();
	
	scene = $("input[name='scene']").val();

	 if(scene == 1) { /* 여기가 어디여.. 씬0 */
		$("#boat").css({right: "-200%"}, 6000);
		$("#la").css({right: "-200%"}, 6000);
		$("form").hide().delay(3000).fadeIn(1000); 
		setTimeout(function() {
		$("#saja").attr("src", 
		"/D/resources/character/ch05/놀란사자(67).webp");
		}, 5000); 

		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 2) { /* 난태양의신라.  씬1 */
		first.play();
		$("#saja").attr("src", 
		"/D/resources/character/ch05/숨셔사자(65).webp");
		$("form").hide().delay(6000).fadeIn(1000);	
		$("#boat").delay(500).animate({right: "5%"}, 6000);
		$("#la").delay(500).animate({right: "36%"}, 6000);
	
} 
	
	 else if(scene == 3) { /* 두아트 정보창 */
		$("#saja").attr("src", 
		"/D/resources/character/ch05/숨셔사자(65).webp");
		$(".guide")
		.animate({opacity: "100%"}, 500)
		.animate({opacity: "0%"}, 3000);
		$("#la").css({right: "36%"});
		$("#boat").css({right: "5%"});
		$("#boat").addClass("pikachu");
		$("#boat").addClass("select");
		$("#earth").addClass("pikachu");
		$("#earth").addClass("select");

		$("#boat").on("click", function() {
			$("#boat").removeClass("select");
			$("#boat").removeClass("pikachu");
			show_info(19);
			count++;
			console.log(count);
			if(count >= 2) {
			$("#la").css({'zIndex': 6});
			$("#la").addClass("pikachu");
			$("#la").addClass("select");
					
				}		 
			});
		$("#earth").on("click", function() {
			$("#earth").removeClass("select");
			show_info(18);
			count++;
			console.log(count);
					if(count >= 2) {
			$("#la").addClass("pikachu");
			$("#la").addClass("select2");
			$("#la").on("click", function() {
				$("#saja").css({left: "12.6%"});
				$("#saja").attr("src", 
				"/D/resources/character/ch05/두리번사자(112).webp");
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
		second.play();
		$("#saja").css({opacity: "0"});
		$("body").delay(2000).fadeIn(2000);		
	    $("form").delay(2000).fadeIn(1000).fadeOut(3000); 
		/*$("#user1").css({top:300, left:900});*/
		$("#earth").delay(2000).animate({left: "-50%"}, 5000);
	    $("#la_b2").css({right: "15%", top: "14%"}).delay(2000).animate({right: "-60%"}, 5000)

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