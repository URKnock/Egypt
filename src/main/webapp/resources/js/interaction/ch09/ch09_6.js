var count = 0;
function interaction() { }; 
function init() {
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	choice = $("input[name='choice']").val();
	
	$("button").on("click", function() {
		if(choice == 0) {
			$("form").submit();
		}
	});
	
	if(choice == -1 || choice == 1 || scene == 1) {
		$("form").hide();
		$("#boat_1").addClass("select");
		$("#boat_1").addClass("pikachu");
		
	}

	
	console.log(scene);
	console.log(index);
	console.log(flag);
	console.log(choice);
	
	$("video").height("100%");	
	$("video").width("100%");
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
		count++;
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
			$("#c2").addClass("pikachu");
			$("#c2").addClass("select2");

		}
	$("#c2").click(function() {
		$("#c2").removeClass("pikachu");
		$("#c2").removeClass("select2");
		$("form").show();
	});
	
	});
	
	


	function object(select, index) {
		show_info(index);
	}
	
	function objectSubmit(select) {
	$(select).removeClass("select");
		

	}
			
}