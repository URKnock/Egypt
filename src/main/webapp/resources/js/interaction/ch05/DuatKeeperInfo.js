function interaction() {
	$("#background").children().hide();
	$("form").hide();
	$(".guide")
	.animate({opacity: "100%"}, 500)
	.delay(1000).animate({opacity: "0%"}, 500);
	
	//$("#background").children().hide();
		$("#keepers").addClass("pikachu");
		$("#keepers").addClass("select");

		
		
		$("#keepers").click(function() {
			$("#keepers").removeClass("select");
			$("#keepers").removeClass("pikachu");
			object("#keepers", 20);
			document.querySelector('.close').onclick = function() { 
				hide_info();
				setTimeout("$('form').submit()", 1000);
	 		}	
		});
			
	function object(select, index) {
		show_info(index);
	}	
}