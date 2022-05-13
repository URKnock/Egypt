function init() {	
	$("video").height("100%");	
	$("video").width("100%");		
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
		$("#c2").attr("src", 
		"/D/resources/character/ch09/3층 밭2.webp");	
		$("#cow1").attr("src", 
		"/D/resources/character/ch09/2층 소2.webp");
		$("#cow2").attr("src", 
		"/D/resources/character/ch09/2층 소2.webp");	
			
		setTimeout(function() {
					object("#c22", 39);
					//object("#c2", 34);
				}, 2700);	
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
		$("#c2").attr("src", 
		"/D/resources/character/ch09/3층 밭1.webp");	
		$("#cow1").attr("src", 
		"/D/resources/character/ch09/2층 소1.webp");
		$("#cow2").attr("src", 
		"/D/resources/character/ch09/2층 소1.webp");	
		 }	
		
	});
	
	
	$(".modal_content").click(function(){
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
	function object(select, index) {
	show_info(index);
	}			
}