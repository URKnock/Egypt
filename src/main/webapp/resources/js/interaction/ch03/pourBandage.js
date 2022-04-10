function interaction() {
	$('#bandage').hide();
	$('#dragLine').hide();
	$('#dragSpot').hide();
	
	resize("#human_cover");
	center("#human_cover");
	$("#human_cover").hide();
	
	resize("#scroll");
	centerX("#scroll");
	var sl = $('#scroll').offset().left;
	$("#scroll").css("top", 112*h);
	$("#scroll").attr("src", "/resources/object/ch03/paper_open.webp");
	
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
	$(holes).each(function(index, value){
		$(holes[index]).on("click", holeClick);
	});
	
	$("#hole1").css({"left": 918*w, "top": 660*h});
	$("#hole2").css({"left": 940*w, "top": 610*h});
	$("#hole3").css({"left": 978*w, "top": 680*h});
	$("#hole4").css({"left": 1015*w, "top": 593*h});
	$("#hole5").css({"left": 1063*w, "top": 680*h});
	$("#hole6").css({"left": 1085*w, "top": 610*h});
	$("#hole7").css({"left": 1100*w, "top": 660*h});
	
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
			$(this).addClass("doings");
			$(this).removeClass("holes");
			$(this).removeClass("starts");
			ctx1.lineWidth = 5;
			ctx1.strokeStyle = "blue";
			ctx1.beginPath();
			ctx1.moveTo(pos.x, pos.y);
			console.log(pos.x + " , " + pos.y);
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
			if(recent != tid) {
				if(recent == "#hole" + (idx-1)) {
					$("#canvas2").off("mousemove");
					ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
					ctx1.lineTo(pos.x, pos.y);
					ctx1.stroke();
					clicked = false;
					$(recent).removeClass("doings");
					$(recent).addClass("strings");
					$(this).removeClass("holes");
					$(this).addClass("starts");
					if(recent == "#hole6") {
						$(this).removeClass("starts");
						$(this).addClass("strings");
						
						$("#human_cover").fadeIn(2000);
						$('#scroll').on("load", function() {
							$('#scroll').fadeOut("1000");
						});
						$('#scroll').attr("src", "/resources/object/ch03/paper_close.webp");
						setTimeout(function() { 
							$('input[name=choice]').val(-1);
							$("form").submit();
						}, 5000);
					}
				} else {
					$(recent).removeClass("doings");
					$(recent).removeClass("strings");
					$(recent).addClass("holes");
					setTimeout(function() {
						$('input[name=choice]').val(1);
						$('form').submit();
					}, 1000);
				}
			} else {
				setTimeout(function() {
					$('input[name=choice]').val(1);
					$('form').submit();
				}, 1000);	
			}
		}
	}
	
	var scrollY = $("#scroll").height() / 2 + 112*h;
	resize('#bandageToClick');
	$('#bandageToClick').css("top", scrollY - ($('#bandageToClick').height() / 2));
	$('#bandageToClick').css("left", x - ($('#bandageToClick').width() / 2));
	$("#bandageToClick").addClass("select");
	$('#bandageToClick').on("click", function() {
		var sLeft = $("#background > img:first-child").offset().left;
		var dLeft = sLeft + $('#dragLine').width();
		$('#bandageToClick').removeClass("select");
		$('#bandageToClick').hide();
		$('#bandage').css("top", $("#human").offset().top + $("#human").height() / 2 - $("#bandage").height() / 2);
		$('#bandage').css("left", sLeft);
		$('#bandage').show();
	});
	$('#bandageToClick').hide().fadeIn(1100).addClass("select");
}
