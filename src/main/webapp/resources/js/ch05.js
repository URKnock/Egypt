var clicked = [1, 2];
var which;

function init() {
	
	scene = $("input[name='scene']").val();

	 if(scene == 1) { /* 여기가 어디여.. 씬0 */
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
		$("form").hide().delay(6500).fadeIn(1000)
		.fadeOut(2000);

		
		$("#la").delay(500).animate({right: "20%"}, 6000);
	
		setTimeout(function() {
			$("#la").addClass("pikachu");
		}, 6600);
		setTimeout(function() {
			$("#la").addClass("select");
		}, 6600);
		setTimeout(function() {
			$("#earth").addClass("pikachu");
		}, 6600);
		setTimeout(function() {
			$("#earth").addClass("select");
		}, 6600);

		$("#la").on("click", function() {
				objectSubmit("#la", 1);
				});
		$("#earth").on("click", function() {
				objectSubmit("#earth", 2);
				});
} 
	
	 else if(scene == 3) { /* 탑승했는가? 출발한다 씬2 */
		$("#user1").css({opacity: "0"});
		$("#la_b2").css({opacity: "1"});
		$("#la_b2").css({opacity: "1"});
		$("body").delay(2000).fadeIn(2000);		
	    $("form").delay(2000).fadeIn(1000)
		.fadeOut(2000); 
		/*$("#user1").css({top:300, left:900});*/
		 $("#earth").delay(2000).animate({left: "-50%"}, 5000);
	    $("#la_b2").css({right: "15%", top: "29%"})
		.delay(2000).animate({right: "-60%"}, 5000)

	
		/*.animate({top:"30%"}, 500).animate({top:"55%"}, 500) 
		.delay(30).animate({right: "-30%", top: "-70%"}, 4000);*/
		setTimeout(function() { $("form").submit(); }, 8000); 
		} 
		
		else if(scene == 3) {
			 $("form").delay(2000).fadeIn(1000)
		.fadeOut(2000); 
			}
			
		 else if(scene == 4) {
			
		}
	var h = $("#background").height() - $("#dialogue").height();
	if(h < 0) h = 0;
	$("#background").height(h);
		
	var w = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	w = w - $("#choice").width();
	if(w < 0) w = 0;
	$("#scene").width(w);
	
	$("#dialogue").on("click", function() { $("form").submit(); });	
	
	$("#choice > img").height( $("#dialogue > img").height() );
	
	$("#dialogue").click(function() {
		$("form").submit();
	});
	
$("#dialogue").delay(4000).on("click", function() { 
			setTimeout("$('form').submit()", 4000);
			});		
			
function objectSubmit(select, which) {
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
		
}

	
} 