function init() {	

			
			$("#boat_1").addClass("select");
			$("#boat_1").addClass("pikachu");
			$("#pre").addClass("pikachu");
			$("#boat_1").on("click", function() {
				objectSubmit("#boat_1");			
			});
			
			
	/*스르륵*/
	$("body").css("display", "none");
	$("body").fadeIn(500);
	$("a.transition").click(function(event){
	event.preventDefault();
	linkLocation = this.href;
	$("body").fadeOut(1000, redirectPage);
		});
	function redirectPage() {
		window.location = linkLocation;
}
	/*스르륵*/

	$("#boat_1").click(function() {
		 object("#boat_1", 40);
	});
	
	$(".modal_content").click(function(){
    $(".modal").fadeOut();
 	});	

	function object(select, index) {
		show_info(index);
	}
	
	function objectSubmit(select) {
	$(select).removeClass("select");
	}
			
}