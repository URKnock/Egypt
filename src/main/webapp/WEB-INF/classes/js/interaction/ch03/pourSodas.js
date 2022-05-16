function interaction() {
	$('#pot').hide();
	$('#soda_over').hide();
	$('#dragLine').hide();
	$('#dragSpot').hide();
	$("#background").css("background", "no-repeat url(/resources/background/ch03/3_5.png) center top");
	$('#background').children().hide();

	var arr = ["#hum", "#soda_head", "#soda_body", "#soda_bottom", "#soda_leg", "#soda_over"]
	arr.forEach (function (item, idx) {
		resizeWH(item, 834, 177);
		centerX(item);
		$(item).css("bottom", 317*h);
	});
	$("#soda_over").css("bottom", 334*h);
	$(".soda").hide();

	resize("#bed");
	centerX("#bed");
	$("#bed").css("bottom", 0);
	
	resize("#scroll");
	centerX("#scroll");
	$("#scroll").css("top", 0);
	
	resize("#paper");
	centerX("#paper");
	$("#paper").css("top", 0);	
	
	resizeWH('#potToClick', 110, 100);
	$('#potToClick').css("top", $("#scroll").height() - $('#potToClick').height() - 27*h);
	$('#potToClick').css("left", x - ($('#potToClick').width() / 2));
	$("#potToClick").addClass("select");
	$('#potToClick').on("click", function() {
		$('#dragLine').show();
		$('#dragLine').css("top", 500*h);
		centerX('#dragLine');
		var dragLeft = $("#dragLine").offset().left;
		$('#potToClick').removeClass("select");
		$('#potToClick').hide();
		$('#pot').show();
		$('#pot').css("top", 500*h - $("#pot").height() / 2);
		$('#pot').css("left", dragLeft - $("#pot").width());
		$('#dragSpot').show();
		$('#dragSpot').css("top", 500*h-55);
		$('#dragSpot').css("left", dragLeft + $('#dragLine').width());		
	});
	$('#potToClick').hide();
	
	setTimeout(function() {
		$('#potToClick').fadeIn(1100).addClass("select");
		$('#paper').hide();
	}, 1000);

	$("#pot").on("mousedown", function(event) {
		let shiftX = event.clientX - pot.getBoundingClientRect().left;
		pot.style.position = 'absolute';
		pot.style.zIndex = 1000;
		document.body.append(pot);
	
		function movepot(pageX) {
			pot.style.left = pageX - shiftX + 'px';
		}
	
		function onMousepot(event) {
			movepot(event.pageX);
	
			pot.hidden = true;
			let eb = document.elementFromPoint(event.clientX, event.clientY);
			pot.hidden = false;
			
			if (!eb) return;
			let db = eb.closest('.droppable');
			if (cd != db) {
				if (cd) {
					leavepot(cd);
				}
				cd = db;
				if (cd) {
					enterpot(cd);
				}
			}
		}
		document.addEventListener('mousemove', onMousepot);
		pot.onmouseup = function() {
			document.removeEventListener('mousemove', onMousepot);
			pot.onmouseup = null;
			if (pot.isOverlaped == true) {
				leavepot(cd)
			}
		};
	});	
}

let cd = null;

function enterpot(elem) {
	pot.isOverlaped = true;
	$('#dragSpot').hide();
	$('#dragLine').removeClass("blinking");
	$('#dragLine').fadeOut(1000);
	$('#pot').fadeOut(1000);
	$("#pot").off("mousedown");
	pot.ondragstart = function() { return true; };

	$("#soda_over").fadeIn(500).fadeOut(2000);
	$("#soda_leg").slideDown(1200);
	$("#soda_bottom").slideDown(1500);
	$("#soda_body").slideDown(1800);
	$("#soda_head").slideDown(2100);
	setTimeout(function() { $("form").submit(); }, 5000);
}	

function leavepot(elem) {
	pot.isOverlaped = false;
}

pot.ondragstart = function() {
	return false;
};