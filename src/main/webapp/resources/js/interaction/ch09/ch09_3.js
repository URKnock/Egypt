function init() {	
	$("#background > img:nth-child(4)").addClass("select");
			$("#c2").addClass("select");
			$("#c2").addClass("pikachu");
			$("#next").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#c2").on("click", function() {
				objectSubmit("#c2");
			});
			$("#c3").addClass("select");
			$("#c3").addClass("pikachu");
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
	$("#c2").click(function() {
		 $(".modal").fadeIn();
	});
	
	$(".modal_content").click(function(){
    $(".modal").fadeOut();
 	});	
			
	$("#c3").click(function() {
		 $(".modal2").fadeIn();
	});
	
	$(".modal_content2").click(function(){
    $(".modal2").fadeOut();
 	});	
	
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}