function interaction() {
	$('#pot').hide();
	resizeCenter("#human_soda");
	resizeCenter("#human_cover");

	function human_rescale() {
		var arr = ["#human", "#human_soda", "#human_cover"]
		arr.forEach (function (item, idx) {
			resizeWH(item, 834, 177);
			centerX(item);
			$(item).css("bottom", $("#dialogue").height() + 90*w);
		});
		resize("#bed");
		centerX("#bed");
		$("#bed").css("bottom", 0);
		resize(organName);
		$(organName).css("top", $("#human").offset().top + ($("#human").height() / 2) - $(organName).width() / 2);
		$(organName).css("right", $('#background').width() - ($("#human").offset().left + $("#human").width() / 4 * 3) + 25*w);
	}
	$("#paper").hide();
	$("#soda_pot").hide();
	
	var organName = '#organ1';
	resize(organName);
	$(organName).width($(organName).width() / 2);
	$(organName).height($(organName).height() / 2);
	$(organName).css("top", $("#human").offset().top + ($("#human").height() / 2) - $(organName).width() / 2);
	$(organName).css("right", $('#background').width() - ($("#human").offset().left + $("#human").width() / 4 * 3) + 25*w);
	
	preload([
	    $('#potToClick').attr("src"),
	    $('#bandage').attr("src"),
	    $('#servant').attr("src"),
	    $('#scroll').attr("src"),
	    "/resources/object/ch03/soda_1.png",
	    "/resources/object/ch03/soda_2.png",
	    "/resources/object/ch03/soda_3.png",
	    "/resources/object/ch03/soda_4.png"
	]);
	
	resize("#scroll");
	centerX("#scroll");
	var sl = $('#scroll').offset().left;
	$("#scroll").css("top", 112*w);
	$('#scroll').hide();
	
	var scrollY = $("#scroll").height() / 2 + 112*w;
	resize('#potToClick');
	$('#potToClick').css("top", scrollY - ($('#potToClick').height() / 2));
	$('#potToClick').css("left", x - $("#scroll").width() / 4 - ($('#potToClick').width() / 2));
	$('#potToClick').on("click", function() {
		var sLeft = $("#bed").offset().left;
		$('#potToClick').removeClass("select");
		$('#potToClick').hide();
		resize("#soda_pot");
		rescale("#soda_pot", 7/5);
		$('#soda_pot').css("top", 300 + $("#pot").height()/7);
		$('#soda_pot').css("left", sLeft + $("#pot").width()/7*3/2);
		$('#soda_pot').addClass("blinking");
		$('#pot').css("left", sLeft);
		$('#soda_pot').show();
		$('#pot').show();
	});
	
	resize('#bandage');
	$('#bandage').css("top", scrollY - ($('#bandage').height() / 2));
	$('#bandage').css("left", x - $('#bandage').width() / 2);

	resizeWH('#niddle', 43*w, 150*w);
	$('#niddle').css("top", scrollY - ($('#niddle').height() / 2));
	$('#niddle').css("left", x + $("#scroll").width() / 4 - $('#niddle').width() / 2);

	resizeWH('#paper', 1341, 776);
	resizeWH('#servant', 1341, 776);
	$('#paper').css("bottom", $("#dialogue").height());
	$('#paper').css("left", 0);
	$('#servant').css("bottom", $("#dialogue").height());
	$('#servant').css("left", 0);
	setTimeout(function() {	
	$('#servant').addClass("select"); 
		$('#servant').on("click", function() {
			$('#servant').on("load", function() {
				resize("#servant");
				$('#paper').on("load", function() {
					sl = sl - ($('#paper').width() - $('#scroll').width());
					$('#paper').animate({
						top: '0',
						left: sl
					}, 2600);
					setTimeout(function() {
						$('#scroll').show();
						$('#paper').hide();
						$('#bandage').fadeIn("slow");
						$('#niddle').fadeIn("slow");
						$('#potToClick').fadeIn("slow", function() {
							$('#potToClick').addClass("select");
						});
						$("#background").css("background", "no-repeat url(/resources/background/ch03/3_5.png) center top");
						$('#background').children().hide();
						$('#servant').hide();
						human_rescale();
					}, 2000);
				});
				$('#paper').attr("src", "/resources/character/ch03/paper_4.webp");
				$('#paper').show();
			});	
			$('#servant').attr("src", "/resources/character/ch03/servant_3.webp");
			$('#servant').removeClass("select");
		});
	}, 2400);

	var kWidth = $("#pot").height();
	$("#pot").on("mousedown", function(event) {
		let shiftX = event.clientX - pot.getBoundingClientRect().left;
		pot.style.position = 'absolute';
		pot.style.zIndex = 1000;
		document.body.append(pot);
	
		function movepot(pageX) {
			pot.style.left = pageX - shiftX + 'px';
			soda_pot.style.left = kWidth + pageX - shiftX + 'px';
		}
	
		function onMousepot(event) {
			movepot(event.pageX);
	
			pot.hidden = true;
			let eb1 = document.elementFromPoint(event.clientX, event.clientY);
			pot.hidden = false;
			
			if (!eb1) return;
			let db1 = eb1.closest('.droppable');
			if (cd1 != db1) {
				if (cd1) {
					leavepot(cd1);
				}
				cd1 = db1;
				if (cd1) {
					enterpot(cd1);
				}
			}
		}
		document.addEventListener('mousemove', onMousepot);
		pot.onmouseup = function() {
			document.removeEventListener('mousemove', onMousepot);
			pot.onmouseup = null;
			if (pot.isOverlaped == true) {
				leavepot(cd1)
			}
		};
	});	
}

function resizeWithDiv(element, div) {
	var e = $(element);
	e.width(e.prop("naturalWidth") / div);
	e.height(e.prop("naturalHeight") / div);
}

function resizeCenter(element) {
	resize(element);
	center(element);
}

function rescale(element, div) {
	var e = $(element);
	resizeWithDiv(e);
	e.width(e.width() / div);
	e.height(e.height() / div);
}

function checkWipeCount() {
	if(wipeCount == 300) {
		$('.dirt').fadeTo("1000", 0.6);
	} else if(wipeCount == 600) {
		$('.dirt').fadeTo("1000", 0.3);
	} else if(wipeCount == 1000) {
		$('#bandage').css("top", scrollY - ($('#bandage').height() / 2));
		$('#bandage').css("left", x + 100 - ($('#bandage').width() / 2));
		$('.dirt').fadeOut(1000);
		setTimeout(function() { 
			$("form").submit();
		}, 3000);
	}
}

let cd1 = null;
let cd2 = null;
let wipeCount = 0;
let cleanCount = 0;

function enterpot(elem) {
	pot.isOverlaped = true;
	$('#dragSpot').hide();
	$('#dragLine').removeClass("blinking");
	$('#dragLine').fadeOut(1000);
	$('#pot').fadeOut(1000);
	$('#soda_pot').fadeOut(1000);
	
	$('.dirt').fadeTo("1000", 0.75);
	$('#bandage').addClass('select');
	
	$("#pot").off("mousedown");
	pot.ondragstart = function() { return true; };
	bandage.ondragstart = function() { return false; };
	
	var dirt_top = $("#human").offset().top;
	var dirt_bottom = dirt_top + $("#human").height();
	var dirt_left = $("#human").offset().left;
	var dirt_right = dirt_left + $("#human").width();

	$('#bandage').on("mousedown", function(event) {
		let shiftX = event.clientX - bandage.getBoundingClientRect().left;
		let shiftY = event.clientY - bandage.getBoundingClientRect().top;
		var scrollY = $("#scroll").height() / 2 + 100;
		
		$('#bandage').removeClass('select');
		bandage.style.position = 'absolute';
		bandage.style.zIndex = 1000;
		document.body.append(bandage);
		
		function movebandage(pageX, pageY) {
			bandage.style.left = pageX - shiftX + 'px';
			bandage.style.top = pageY - shiftY + 'px';
		}
		
		function onMousebandage(event) {
			movebandage(event.pageX, event.pageY);
			var lin_top = $("#bandage").offset().top;
			var lin_left = $("#bandage").offset().left;
			if (lin_top >= dirt_top && lin_top <= dirt_bottom) {
				if(lin_left >= dirt_left && lin_left <= dirt_right) {
					wipeCount = wipeCount + 1;
					checkWipeCount();
				}
			}
		}
		
		document.addEventListener('mousemove', onMousebandage);
		bandage.onmouseup = function() {
			document.removeEventListener('mousemove', onMousebandage);
			bandage.onmouseup = null;
			if (bandage.isOverlaped == true) {
				leavebandage(cd2)
			} else {
				$('#bandage').css("top", scrollY - ($('#bandage').height() / 2));
				$('#bandage').css("left", x + 100 - ($('#bandage').width() / 2));
			}
		};
	});	
}	

function leavepot(elem) {
	pot.isOverlaped = false;
}

pot.ondragstart = function() {
	return false;
};