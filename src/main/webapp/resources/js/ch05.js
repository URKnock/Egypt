var clicked = [1, 2];
var which;
var count = 0;

function init() {
	setDialogueSize();
	scene = $("input[name='scene']").val();

	 if(scene == 1) { /* 여기가 어디여.. 씬0 */
		$("#boat").css({right: "-200%"}, 6000);
		$("#la").css({right: "-200%"}, 6000);
		$("form").hide().delay(2000).fadeIn(1000); 
		$("#user2").animate({left: "11%"}, 600);
		$("#user1").animate({left: "11%"}, 600)
		.animate({opacity: "0"}, 500);
		$("#user2").delay(20).animate({opacity: "100%"}, 500)
		.animate({opacity: "0"}, 500);
		$("#user1").delay(20).animate({opacity: "100%"}, 500);
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 2) { /* 난태양의신라.  씬1 */
		$("#user1").css({left: "11%"});
		$("#nol").delay(1000).css({opacity: "100%"}, 1000).
		animate({opacity: "0"}, 1000);
		$("form").hide().delay(6500).fadeIn(1000);

		
		$("#boat").delay(500).animate({right: "5%"}, 6000);
		$("#la").delay(500).animate({right: "36%"}, 6000);
	
} 
	
	 else if(scene == 3) { /* 두아트 정보창 */
		$("#user1").css({left: "11%"});
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
			$("#la").addClass("pikachu");
			$("#la").addClass("select");
			$("#la").on("click", function() {
				$("#user1").animate({top:300, left:900}, 2000);
				$("body").fadeOut(2000);
				setTimeout("$('form').submit()", 2000);
					});	
				}		 
			});
		$("#earth").on("click", function() {
			$("#earth").removeClass("select");
			show_info(18);
			count++;
			console.log(count);
					if(count >= 2) {
			$("#la").addClass("pikachu");
			$("#la").addClass("select");
			$("#la").on("click", function() {
				$("#user1").animate({top:300, left:900}, 2000);
				$("body").fadeOut(2000);
				setTimeout("$('form').submit()", 2000);
				});
	
			} 
				//objectSubmit("#earth", 2);
				});
					
		} 
		
/*		else if(scene == 3) {
			 $("form").delay(2000).fadeIn(1000)
		.fadeOut(2000); 
			}*/
			
		 else if(scene == 4) { //탑승했는가? 출발하겠다
		$("#user1").css({opacity: "0"});
		$("#la_b2").css({opacity: "1"});
		$("#la_b2").css({opacity: "1"});
		$("body").delay(2000).fadeIn(2000);		
	    $("form").delay(2000).fadeIn(1000)
		.fadeOut(2000); 
		/*$("#user1").css({top:300, left:900});*/
		 $("#earth").delay(2000).animate({left: "-50%"}, 5000);
	    $("#la_b2").css({right: "15%", top: "14%"})
		.delay(2000).animate({right: "-60%"}, 5000)

	
		/*.animate({top:"30%"}, 500).animate({top:"55%"}, 500) 
		.delay(30).animate({right: "-30%", top: "-70%"}, 4000);*/
		setTimeout(function() { $("form").submit(); }, 8000); 
		}
		
 w = $("#background").width() / 1920;
   h = $("#background").height() / 1080;
   x = $("#background").width() / 2.0;

   $("#dialogue").height($("#dialogue").height() * h);
   $("#dialogue_bg").height($("#dialogue").height());

   var sw = $("#dialogue").width() - $("#dialogue > img:first-of-type").width();
   sw = sw - $("#choice").width();
   if (sw < 0) sw = 0;
   $("#scene").width(sw);
   
   resize("#dialogue_img");
   resize("#choice > img");

   var temp = "auto " + (90*w) + "px auto " + (50*w) + "px";
   $("#dialogue_img").css("margin", temp);
   
   temp = 55*h + "px " + 20*w + "px " + 10*h + "px 0";
   $("#title > div:nth-child(1)").css("margin", temp);
   
   temp = 54*h + "px";
   $("#title > div:nth-child(2)").css("margin-top", temp);
   
   temp = 100*h + "px " + 110*w + "px " + 80*h + "px " + 50*w + "px";
   $("#choice > img").css("margin", temp);

   $("#blur").height(260 * h);
   $("#blur").css("left", "0");
   $("#blur").css("bottom", "0");

	
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

function submit() {
	setTimeout("$('form').submit()", 2000);
}

	
} 