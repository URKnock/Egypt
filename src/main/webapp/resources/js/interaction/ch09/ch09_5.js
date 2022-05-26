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
	
/*	$("video").height("100%");	
	$("video").width("100%");*/		
	//$("#background > img:nth-child(4)").addClass("select");
			$("#c2").addClass("select");
			$("#c2").addClass("pikachu");
			$("#next").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#c2").on("click", function() {
				objectSubmit("#c2");
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


	$("#c2").click(function() {
		var audio = new Audio('/resources/bgm/ch09/cowcow.mp3');
		audio.play();
		$("#c2").attr("src", 
		"/resources/character/ch09/3층 밭2.webp");	
		$("#cow1").attr("src", 
		"/resources/character/ch09/2층 소2.webp");
		$("#cow2").attr("src", 
		"/resources/character/ch09/2층 소2.webp");	
			
		setTimeout(function() {
					object("#c22", 38);
					//object("#c2", 34);
				}, 2700);	
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
		$("#c2").attr("src", 
		"/resources/character/ch09/3층 밭1.webp");	
		$("#cow1").attr("src", 
		"/resources/character/ch09/2층 소1.webp");
		$("#cow2").attr("src", 
		"/resources/character/ch09/2층 소1.webp");	
		 }	
		
	});
	
	
	$(".modal_content").click(function(){
		$("#c2").attr("src", 
		"/resources/Character/ch09/3층 밭2.webp");	
		$("#cow1").attr("src", 
		"/resources/Character/ch09/2층 소2.webp");
		$("#cow2").attr("src", 
		"/resources/Character/ch09/2층 소2.webp");
 	});	

	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
	function object(select, index) {
	show_info(index);
	}			
}