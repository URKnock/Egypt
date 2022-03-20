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
	$("#scroll").css("top", 112*w);
	$("#scroll").attr("src", "/resources/object/ch03/paper_open.webp");
	
	var scrollY = $("#scroll").height() / 2 + 112*w;
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
		$('#dragLine').css("top", $("#human").offset().top + $("#human").height() / 2);
		$('#dragLine').css("left", sLeft);
		$('#dragSpot').css("top", $("#human").offset().top + $("#human").height() / 2 - 25);
		$('#dragSpot').css("left", dLeft);
		$('#bandage').show();
		$('#dragLine').show();
		$('#dragSpot').show();
	});
	$('#bandageToClick').hide().fadeIn(1100).addClass("select");

	$("#bandage").on("mousedown", function(event) {
		let shiftX = event.clientX - bandage.getBoundingClientRect().left;
		bandage.style.position = 'absolute';
		bandage.style.zIndex = 1000;
		document.body.append(bandage);
	
		function movebandage(pageX) {
			bandage.style.left = pageX - shiftX + 'px';
		}
	
		function onMousebandage(event) {
			movebandage(event.pageX);
	
			bandage.hidden = true;
			let eb = document.elementFromPoint(event.clientX, event.clientY);
			bandage.hidden = false;
			
			if (!eb) return;
			let db = eb.closest('.droppable');
			if (cd != db) {
				if (cd) {
					leavebandage(cd);
				}
				cd = db;
				if (cd) {
					enterbandage(cd);
				}
			}
		}
		document.addEventListener('mousemove', onMousebandage);
		bandage.onmouseup = function() {
			document.removeEventListener('mousemove', onMousebandage);
			bandage.onmouseup = null;
			if (bandage.isOverlaped == true) {
				leavebandage(cd)
			}
		};
	});	
}

let cd = null;

function enterbandage(elem) {
	bandage.isOverlaped = true;
	$('#dragSpot').hide();
	$('#dragLine').removeClass("blinking");
	$('#dragLine').fadeOut(1000);
	$('#bandage').fadeOut(1000);
	$("#bandage").off("mousedown");
	bandage.ondragstart = function() { return true; };

	$("#human_cover").fadeIn(2000);
	$('#scroll').on("load", function() {
		$('#scroll').fadeOut("1000");
	});
	$('#scroll').attr("src", "/resources/object/ch03/paper_close.webp");
	setTimeout(function() { $("form").submit(); }, 5000);
}	

function leavebandage(elem) {
	bandage.isOverlaped = false;
}

bandage.ondragstart = function() {
	return false;
};