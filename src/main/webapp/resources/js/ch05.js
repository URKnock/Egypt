var clicked = [1, 2];
var which;

function init() {
	
	scene = $("input[name='scene']").val();

	 if(scene == 1) { /* 나는 태양의신 라 */
		$("form").hide().delay(2000).fadeIn(1000); 
		$("#user2").animate({left: "11%"}, 600);
		$("#user1").animate({left: "11%"}, 600)
		.animate({opacity: "0"}, 500);
		$("#user2").delay(20).animate({opacity: "100%"}, 500)
		.animate({opacity: "0"}, 500);
		$("#user1").delay(20).animate({opacity: "100%"}, 500);
		$("#dialogue").on("click", function() { $("form").submit(); });	
	}
	else if(scene == 2) { /* 승선하도록 하여라. */
		$("#user1").css({left: "11%"});
		$("#nol").delay(1000).css({opacity: "100%"}, 1000).
		animate({opacity: "0"}, 1000);
		$("form").hide().delay(6500).fadeIn(1000);
		$("form").hide();
		
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

		
		if(clicked.length != 0) {
			$("form").hide();
			console.log(clicked.length);
		}
		
		if(clicked.length == 0) {
			console.log(clicked.length);
			$("#la").addClass("pikachu");
			$("#la").addClass("select");
		}
}


		
	 else if(scene == 3) { /* 탑승했는가? */
	    
		$("#user1").css({left: "11%"});
	    $("#la").css({right: "20%"});
		
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
}
	
} 