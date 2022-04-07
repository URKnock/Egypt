function init() {	
	$("#background > img:nth-child(4)").addClass("select");
			$("#next").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#c4").addClass("select");
			$("#c4").addClass("pikachu");
			$("#c4").on("click", function() {
				objectSubmit("#c4");
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
		 $(".modal").fadeIn();
		$(".modal_content").click(function(){
   			$(".modal").fadeOut();
			$("#c2").attr("src", 
			"/D/resources/Character/ch09/2층 카무트 노예2.webp");	
			$("#c4").attr("src", 
			"/D/resources/Character/ch09/2층 카무트2.webp");
			//돌아감
			setTimeout(function() { 
				$("#c2").attr("src", 
				"/D/resources/Character/ch09/2층 카무트 노예1.webp");	
				}, 2700);
 		});
			setTimeout(function() { 
				$("#c4").attr("src", 
				"/D/resources/Character/ch09/2층 카무트1.webp");	
				}, 500);
 		});
	
	
		
			
	$("#c3").click(function() {
		$(".modal2").fadeIn();
		$(".modal_content2").click(function(){
		$(".modal2").fadeOut();
		$("#c3").attr("src", 
		"/D/resources/Character/ch09/2층 탈곡2.webp");
		$("#cow1").attr("src", 
		"/D/resources/Character/ch09/2층 소2.webp");
		$("#cow2").attr("src", 
		"/D/resources/Character/ch09/2층 소2.webp");
		
		//돌아감 이거 엄청 부자연스러움;
		setTimeout(function() { 
			$("#c3").attr("src", 
			"/D/resources/Character/ch09/2층 탈곡1.webp");	
			}, 1734);	

		setTimeout(function() { 
			$("#cow1").attr("src", 
			"/D/resources/Character/ch09/2층 소1.webp");	
			}, 1734);	

		setTimeout(function() { 
			$("#cow2").attr("src", 
			"/D/resources/Character/ch09/2층 소1.webp");	
			}, 1734);	
 		});	
	});
	
	
	
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}