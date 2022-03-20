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
		$(item).css("bottom", $("#dialogue").height() + 90*w);
	});
	$("#soda_over").css("bottom", $("#dialogue").height() + 90*w + 17*w);
	$(".soda").hide();

	resize("#bed");
	centerX("#bed");
	$("#bed").css("bottom", 0);
	
	preload([
	    $('#potToClick').attr("src"),
	    $('#scroll').attr("src")
	]);
	
	resize("#scroll");
	centerX("#scroll");
	var sl = $('#scroll').offset().left;
	$("#scroll").css("top", 112*w);
	$('#scroll').attr("src", "/resources/object/ch03/paper_open.webp");
	
	var scrollY = $("#scroll").height() / 2 + 112*w;
	resize('#potToClick');
	$('#potToClick').css("top", scrollY - ($('#potToClick').height() / 2));
	$('#potToClick').css("left", x - ($('#potToClick').width() / 2));
	$("#potToClick").addClass("select");
	$('#potToClick').on("click", function() {
		var sLeft = $("#bed").offset().left;
		var dLeft = sLeft + $('#dragLine').width();
		$('#potToClick').removeClass("select");
		$('#potToClick').hide();
		$('#pot').css("left", sLeft);
		$('#dragLine').css("left", sLeft);
		$('#dragSpot').css("top", 300);
		$('#dragSpot').css("left", dLeft);
		$('#pot').show();
		$('#dragLine').show();
		$('#dragSpot').show();
	});
	$('#potToClick').hide().fadeIn(1100).addClass("select");

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
	$('#scroll').attr("src", "/resources/object/ch03/paper_close.webp");
	setTimeout(function() { $("form").submit(); }, 5000);
}	

function leavepot(elem) {
	pot.isOverlaped = false;
}

pot.ondragstart = function() {
	return false;
};