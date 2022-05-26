function init() {
	setSound(); 
	$("#background > img:nth-child(4)").addClass("select");
			$("#c3").addClass("select");
			$("#c3").addClass("pikachu");
			$("#next").addClass("pikachu");
			$("#c3").on("click", function() {
				objectSubmit("#c3");
			});
		$("#menu img:nth-child(2)").on("click", function() {
		location.href="/chapter02";
	});	
	$("#c3").click(function() {
		$("#c2").attr("src", 
		"/resources/character/ch09/1층 공물 노예2.webp");
		$("#c3").attr("src", 
		"/resources/character/ch09/1층 공물2.webp");
		$("#keepers").attr("src", 
		"/resources/character/ch09/1층 관문신2.webp");
		setTimeout(function() {
					object("#c3", 32);
				}, 3300);
		document.querySelector('.close').onclick 
		= function() { hide_info();
		$("#c2").attr("src", 
		"/resources/character/ch09/1층 공물 노예1.webp");
		 $("#c3").attr("src", 
		"/resources/character/ch09/1층 공물1.webp");
		$("#keepers").attr("src", 
		"/resources/character/ch09/1층 관문신1.webp"); }		

		
/*		 $(".modal").fadeIn();
			$(".modal_content").click(function(){
    		$(".modal").fadeOut();
			$("#c2").attr("src", 
			"/resources/Character/ch09/1층 공물 노예2.webp");
			$("#c3").attr("src", 
			"/resources/Character/ch09/1층 공물2.webp");
			$("#keepers").attr("src", 
			"/resources/Character/ch09/1층 관문신2.webp");
			//원상태로 돌아감
			setTimeout(function() { 
			$("#c2").attr("src", 
			"/resources/Character/ch09/1층 공물 노예1.webp");	
			}, 3900);
			setTimeout(function() { 
			$("#c3").attr("src", 
			"/resources/Character/ch09/1층 공물1.webp");		
			}, 3000);
			setTimeout(function() { 
			$("#keepers").attr("src", 
			"/resources/Character/ch09/1층 관문신1.webp");		
			}, 1650);
 	});	*/
		 
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
	

	
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}


function object(select, index) {
	show_info(index);
	}			
}