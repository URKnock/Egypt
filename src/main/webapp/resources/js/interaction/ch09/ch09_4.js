function init() {	
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
		$(".modal").fadeIn();
		$(".modal_content").click(function(){
    		$(".modal").fadeOut();
			$("#c3").attr("src", 
			"/D/resources/Character/ch09/2층 왜가리2.webp");
			//돌아감
			setTimeout(function() { 
			$("#c3").attr("src", 
			"/D/resources/Character/ch09/2층 왜가리1.webp");	
			}, 3600);
 		});					
	});
	
	
			
	$("#c4").click(function() {
		 $(".modal2").fadeIn();
		$(".modal_content2").click(function(){
    		$(".modal2").fadeOut();
 	});
	});
	
		
	
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}