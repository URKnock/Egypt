function init() {	
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
		$(".modal").fadeIn();
		$(".modal_content").click(function(){
    		$(".modal").fadeOut();
			$("#b1").attr("src", 
			"/D/resources/Character/ch09/1층 매2.webp");
			$("#c2").attr("src", 
			"/D/resources/Character/ch09/1층 매사자2.webp");
			//원상태로 돌아감
			setTimeout(function() { 
			$("#b1").attr("src", 
			"/D/resources/Character/ch09/1층 매1.webp");	
			}, 5300);
			setTimeout(function() { 
			$("#c2").attr("src", 
			"/D/resources/Character/ch09/1층 매사자1.webp");
			}, 2700);

 		});	

	});	
		
	function redirectPage() {
		window.location = linkLocation;
}

	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}