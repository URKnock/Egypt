function init() {	
	setSound(); 
	$("#background > img:nth-child(4)").addClass("select");
			$("#b1").addClass("select");
			$("#b1").addClass("pikachu");
			$("#next").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#b1").on("click", function() {
				objectSubmit("#b1");
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
	
	
	$("#b1").click(function() {
		var audio = new Audio('/resources/bgm/ch09/chirping.mp3');
		audio.play();
		$("#c1").attr("src", 
		"/resources/character/ch09/천국 사자 놀람.webp");
		$("#b1").attr("src", 
		"/resources/character/ch09/1층 매2.webp");
		$("#c2").attr("src", 
		"/resources/character/ch09/1층 매사자2.webp");
		setTimeout(function() {
					object("#b1", 33);
					object("#c2", 33);
				}, 5200);
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
		$("#b1").attr("src", 
		"/resources/character/ch09/1층 매1.webp");
		$("#c1").attr("src", 
		"/resources/character/ch09/천국 사자 기본.webp");		
		$("#c2").attr("src", 
		"/resources/character/ch09/1층 매사자1.webp");
		 }	
		
		/*$(".modal").fadeIn();
		$(".modal_content").click(function(){
    		$(".modal").fadeOut();
			$("#b1").attr("src", 
			"/resources/character/ch09/1층 매2.webp");
			$("#c2").attr("src", 
			"/resources/character/ch09/1층 매사자2.webp");
			//원상태로 돌아감
			setTimeout(function() { 
			$("#b1").attr("src", 
			"/resources/character/ch09/1층 매1.webp");	
			}, 5300);
			setTimeout(function() { 
			$("#c2").attr("src", 
			"/resources/character/ch09/1층 매사자1.webp");
			}, 2700);*/



	});	
		
	function redirectPage() {
		window.location = linkLocation;
}

	function object(select, index) {
	show_info(index);
	}

	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}