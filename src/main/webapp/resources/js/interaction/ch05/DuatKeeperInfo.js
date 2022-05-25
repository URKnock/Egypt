function interaction() {
	$("#background").children().hide();
	$("form").hide();
	$(".guide")
	.animate({opacity: "100%"}, 500)
	.delay(1000).animate({opacity: "0%"}, 500);
	$("#order").css("display", "flex");
	$("#order").text("마우스로 클릭하여 주변을 둘러보세요.");
	//$("#background").children().hide();
		$("#keepers").addClass("pikachu");
		$("#keepers").addClass("select");

		
		
		$("#keepers").click(function() {
			$("#keepers").removeClass("select");
			$("#keepers").removeClass("pikachu");
			object("#keepers", 19);
			document.querySelector('.close').onclick = function() { 
				hide_info();
				setTimeout("$('form').submit()", 1000);
	 		}	
		});
			
	function object(select, index) {
		show_info(index);
	}	
}