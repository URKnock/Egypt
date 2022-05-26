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

function init() {
	w = $("#mp4").width() / 1920;
	h = $("#mp4").height() / 1080;
	x = $("#mp4").width() / 2.0;
	
	setSetting();
	setHelp();
 	setSound();
 	setShabti();
 	
	$("#setting").hide();
	$("#help").hide();
	$("#shabti").hide();

/*	$("video").height("100%");	
	$("video").width("100%");	*/
	$("#background > img:nth-child(4)").addClass("select");
			$("#c3").addClass("select");
			$("#c3").addClass("pikachu");
			$("#next").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#c3").on("click", function() {
				objectSubmit("#c3");
			});
			$("#c4").addClass("select");
			$("#c4").addClass("pikachu");
			$("#c4").on("click", function() {
				objectSubmit("#c4");
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
	/*스르륵*/		
	$("body").css("display", "none");
	$("body").fadeIn(500);
	$("a.transition").click(function(event){
	event.preventDefault();
	linkLocation = this.href;
	$("body").fadeOut(3000, redirectPage);
		});
	/*스르륵*/	
	function redirectPage() {
		window.location = linkLocation;
}
			
	$("#c3").click(function() {
		var audio = new Audio('/resources/bgm/ch09/splash.mp3');
		//audio.play();
				setTimeout(function() {
					audio.play();
				}, 940);
		$("#c1").attr("src", 
			"/resources/character/ch09/천국 사자 박수.webp");
		$("#c3").attr("src", 
			"/resources/character/ch09/2층 왜가리2.webp");
		setTimeout(function() {
					object("#c3", 36);
				}, 3800);
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
		$("#c1").attr("src", 
			"/resources/character/ch09/천국 사자 기본.webp");
		$("#c3").attr("src", 
			"/resources/character/ch09/2층 왜가리1.webp");
		 }	
 		});					

	
	
			
	$("#c4").click(function() {
		object("#c4", 37);
	});
	
		
	function object(select, index) {
	show_info(index);
	}	
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}