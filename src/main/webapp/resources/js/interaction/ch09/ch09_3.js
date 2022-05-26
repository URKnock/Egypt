$(document).ready(function() {
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
	
	$("#setting").hide();
	$("#help").hide();

	$("#background > img:nth-child(4)").addClass("select");
			$("#next").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#c4").addClass("select");
			$("#c4").addClass("pikachu");
			$("#c4").on("click", function() {
				objectSubmit("#c4");
			});
			$("#c3").addClass("select");
			$("#c3").addClass("pikachu");
			$("#c3").on("click", function() {
				objectSubmit("#c3");
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
	$("body").fadeOut(1000, redirectPage);
		});
	/*스르륵*/
		
	function redirectPage() {
		window.location = linkLocation;
}
	$("#c4").click(function() {
		var audio = new Audio('/resources/bgm/ch09/grass.mp3');
		audio.play();
		$("#c2").attr("src", 
			"/resources/character/ch09/2층 카무트 노예2.webp");	
		$("#c4").attr("src", 
			"/resources/character/ch09/2층 카무트2.webp");
		setTimeout(function() {
					object("#c4", 34);
					//object("#c2", 34);
				}, 3800);	
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
		$("#c4").attr("src", 
			"/resources/character/ch09/2층 카무트1.webp");
		$("#c2").attr("src", 
		"/resources/character/ch09/2층 카무트 노예1.webp");
		 }					
 		});
	
	
		
			
	$("#c3").click(function() {
		var cow = new Audio('/resources/bgm/ch09/cow.mp3');
		cow.play();
		$("#c3").attr("src", 
		"/resources/character/ch09/2층 탈곡2.webp");
		$("#cow1").attr("src", 
		"/resources/character/ch09/2층 소2.webp");
		$("#cow2").attr("src", 
		"/resources/character/ch09/2층 소2.webp");
		setTimeout(function() {
					object("#c3", 35);
				}, 2000);
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
		$("#c3").attr("src", 
			"/resources/character/ch09/2층 탈곡1.webp");
		$("#cow1").attr("src", 
		"/resources/character/ch09/2층 소1.webp");
		$("#cow2").attr("src", 
		"/resources/character/ch09/2층 소1.webp");			 
	}
		
	});
	
	function object(select, index) {
	show_info(index);
	}	
	
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}