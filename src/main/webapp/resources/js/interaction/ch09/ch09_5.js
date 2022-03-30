function init() {	
	$("#background > img:nth-child(4)").addClass("select");
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
		 $(".modal").fadeIn();
	});
	
	
	$(".modal_content").click(function(){
    	$(".modal").fadeOut();
		$("#c2").attr("src", 
		"/D/resources/Character/ch09/3층 밭2.webp");	
		$("#cow1").attr("src", 
		"/D/resources/Character/ch09/2층 소2.webp");
		$("#cow2").attr("src", 
		"/D/resources/Character/ch09/2층 소2.webp");
 	});	

	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}