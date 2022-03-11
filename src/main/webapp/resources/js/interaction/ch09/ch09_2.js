function init() {	
	$("#background > img:nth-child(4)").addClass("select");
			$("#c3").addClass("select");
			$("#c3").addClass("pikachu");
			$("#next").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#c3").on("click", function() {
				objectSubmit("#c3");
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


	$("#c3").click(function() {
		 $(".modal").fadeIn();
	});
	
	$(".modal_content").click(function(){
    $(".modal").fadeOut();
 	});	

	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}