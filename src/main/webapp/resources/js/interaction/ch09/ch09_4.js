function init() {	
	$("video").height("100%");	
	$("video").width("100%");	
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
		$("#c3").attr("src", 
			"/D/resources/character/ch09/2층 왜가리2.webp");
		setTimeout(function() {
					object("#c3", 37);
				}, 3800);
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
		$("#c3").attr("src", 
			"/D/resources/character/ch09/2층 왜가리1.webp");
		 }	
 		});					

	
	
			
	$("#c4").click(function() {
		object("#c4", 38);
	});
	
		
	function object(select, index) {
	show_info(index);
	}	
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
			
}