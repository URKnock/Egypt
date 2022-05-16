function interaction() {
	$('#bandage').hide();
	$('#dragLine').hide();
	$('#dragSpot').hide();
	
	resize("#human_cover");
	center("#human_cover");
	$("#human_cover").hide();
	
	var canvas1 = document.getElementById("canvas1");
	var canvas2 = document.getElementById("canvas2");
	var ctx1 = canvas1.getContext("2d");
	var ctx2 = canvas2.getContext("2d");
	
	canvas1.width = $("#background").width();
	canvas1.height = $("#background").height();
	canvas2.width = $("#background").width();
	canvas2.height = $("#background").height();
	
	var recent = "null";
	var clicked = false;
	
	var holes = ["#hole1", "#hole2", "#hole3", "#hole4", "#hole5", "#hole6", "#hole7"]
	$(holes).each(function(index){
		$(holes[index]).on("click", holeClick);
		$(holes[index]).hide();
	});
	
	$("#hole1").css({"left": 745*w, "top": 485*h});
	$("#hole2").css({"left": 835*w, "top": 503*h});
	$("#hole3").css({"left": 900*w, "top": 450*h});
	$("#hole4").css({"left": 980*w, "top": 493*h});
	$("#hole5").css({"left": 1035*w, "top": 420*h});
	$("#hole6").css({"left": 1115*w, "top": 490*h});
	$("#hole7").css({"left": 1173*w, "top": 450*h});

	$("#hole1").addClass("doings");
	$("#hole1").removeClass("holes");

	var offsets = $("#canvas1").offset();
	function holeClick(event) {
		var tid = "#" + $(this).attr("id");
		var idx = parseInt(tid.slice(-1));
		var pos = {
			x:event.pageX - offsets.left,
			y:event.pageY - offsets.top
		}
	
		if(!clicked) {
			clicked = true;
			recent = "#hole" + idx;
			$(this).addClass("strings");
			$(this).removeClass("holes");
			$("#hole" + (idx+1)).addClass("doings");
			$("#hole" + (idx+1)).removeClass("holes");
			
			ctx1.lineWidth = 5;
			ctx1.strokeStyle = "yellow";
			ctx1.beginPath();
			ctx1.moveTo(pos.x, pos.y);
			$("#canvas2").mousemove(function(e) {
				ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
				ctx2.lineWidth = 3;
				ctx2.strokeStyle = "red";
				ctx2.beginPath();
				ctx2.moveTo(pos.x, pos.y);
				ctx2.lineTo(e.pageX - offsets.left, e.pageY - offsets.top);
				ctx2.stroke();
			});
		} else {
			if(recent == "#hole" + (idx-1)) {
				$("#canvas2").off("mousemove");
				ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
				ctx1.lineTo(pos.x, pos.y);
				ctx1.stroke();
				
				recent = "#hole" + idx;
				$(this).removeClass("doings");
				$(this).addClass("strings");
				$("#hole" + (idx+1)).addClass("doings");
				$("#hole" + (idx+1)).removeClass("holes");				
				
				if(recent != "#hole7") {
					ctx1.lineWidth = 5;
					ctx1.strokeStyle = "yellow";
					ctx1.beginPath();
					ctx1.moveTo(pos.x, pos.y);
					$("#canvas2").mousemove(function(e) {
						ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
						ctx2.lineWidth = 3;
						ctx2.strokeStyle = "red";
						ctx2.beginPath();
						ctx2.moveTo(pos.x, pos.y);
						ctx2.lineTo(e.pageX - offsets.left, e.pageY - offsets.top);
						ctx2.stroke();
					});
				} else {		
					$("#bandage").fadeOut(1000);
					$("#canvas1").fadeOut(1000);
					$("#canvas2").fadeOut(1000);
					$("#human_cover").fadeIn(2000);
					$(holes).each(function(index){
						$(holes[index]).fadeOut(1000);
					});
					setTimeout(function() { 
						$('input[name=choice]').val(-1);
						$("form").submit();
					}, 5000);
				}
			} else {
				$(this).removeClass("strings");
				$(this).removeClass("doings");
				$(this).addClass("holes");
				setTimeout(function() {
					$('input[name=choice]').val(1);
					$('form').submit();
				}, 1000);
			}
		}
	}
	
	var bandage = document.getElementById("bandage");
	resizeWH('#servant', 1341, 776);
	$('#servant').css("bottom", 300*h);
	$('#servant').css("left", 0);
	$('#servant').addClass("select");
	setTimeout(function() { $('#servant').attr("src", "/resources/character/ch03/servant_dish_bandage_idle.webp"); }, 3500);
	
	$('#servant').on("click", function() {
		$(holes).each(function(index){
			$(holes[index]).fadeIn(1000);
		});
		$('#servant').on("load", function() {
			$('#servant').css("z-index", "1");
			$('#servant').removeClass("select");
			setTimeout(function() { $('#servant').delay(2000).hide(); }, 2000);
		});
		$('#servant').attr("src", "/resources/character/ch03/servant_dish_back.webp");
		$('#bandage').show();
		$('#bandage').css("z-index", "5");
		$('#bandage').css("transform", "rotate(45deg)");
		center('#bandage');
		bandage.isHeld = true;
		document.addEventListener('mousemove', followMouse);
	});
	$('#servant').hide().fadeIn(1100).addClass("select");
	
	function followMouse( event ) {
		if(bandage.isHeld) {
			const x = event.x - (bandage.clientWidth / 2.0);
			const y = event.y - (bandage.clientHeight / 2.0);
			bandage.style.left = x + 'px';
			bandage.style.top = y + 'px';
		}
	}
}
