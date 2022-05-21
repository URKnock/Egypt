var count = 0;
var w, h, x, y;
var first = new Audio('/resources/bgm/ch09/9_5_1_0.wav');
var second = new Audio('/resources/bgm/ch09/9_5_2_0.wav');
function interaction() { }; 
function init() {
	setSound(); 
	w = $("body").width() / 1920;
	h = $("body").height() / 1080;
	x = $("body").width() / 2.0;
	
	setDialogueSize();
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	choice = $("input[name='choice']").val();
	
	$("button").on("click", function() {	
		//console.log($(this).val());
		if($(this).val() == 0) {
			$("#content").val(1);
			console.log(scene);
			console.log($("#content").val());
			$("#choice").hide();
			
			second.play();				
			$("#con").text('잘 다녀오거라 사자여, 평안한 안식이 되기를 바란다.');
		}
		if($(this).val() == 1) {
		$("#dialogue_bg").hide();
		$("#dialogue").hide();
		$("#blur").hide();
		}
	});
	
	if(choice == -1 || choice == 1 || scene == 1) {
		$("#dialogue_bg").hide();
		$("#dialogue").hide();
		$("#blur").hide();
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
		 object("#boat_1", 41);
		count++;
		document.querySelector('.close').onclick 
		= function() { hide_info(); 
			$("#c2").addClass("pikachu");
			$("#c2").addClass("select2");
		}
	$("#c2").click(function() {
		first.play();	
		if($("button").on("click", function() {
			first.pause();
			first.currentTime = 0;
			}));
		$("#c2").removeClass("select2");
		$("#dialogue_bg").show();
		$("#dialogue").show();
		$("#blur").show();
	});
	
	});
	
	


	function object(select, index) {
		show_info(index);
	}
	
	function objectSubmit(select) {
	$(select).removeClass("select");
		

	}
			
}