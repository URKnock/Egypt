function interaction() {
	$('#kettle').hide();
	$('#dragLine').hide();
	$('#dragSpot').hide();

	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100;

	$('#human').on("load", function() {
		var arr = ["#human", "#dirt_head", "#dirt_body", "#dirt_bottom", "#dirt_leg", "#shine"]
		arr.forEach (function (item, idx) {
			resize(item);
			centerX(item);
			$(item).css("bottom", 317*h);
		});
		resize("#bed");
		centerX("#bed");
		$("#bed").css("bottom", 0);
		$("#dirty").children().show();
	});
	$("#dirty").children().hide();
	$("#paper").hide();
	$("#water").hide();
	$('#shine').hide();
	$("#human").show();
	
	resize("#scroll");
	centerX("#scroll");
	var sl = $('#scroll').offset().left;
	$("#scroll").css("top", 112*h);
	$('#scroll').hide();
	
	var scrollY = $("#scroll").height() / 2 + 112*h;
	resize('#kettleToClick');
	$('#kettleToClick').css("top", scrollY - ($('#kettleToClick').height() / 2));
	$('#kettleToClick').css("left", x - 100 - ($('#kettleToClick').width() / 2));
	$('#kettleToClick').on("click", function() {
		$('#dragLine').width($("#bed").width());
		var sLeft = $("#bed").offset().left;
		var dLeft = sLeft + $('#dragLine').width();
		$('#kettleToClick').removeClass("select");
		$('#kettleToClick').hide();
		$('#water').show();
		$('#kettle').show();
		$('#dragLine').show();
		$('#dragSpot').show();
		$('#water').css("top", (300 + $("#kettle").height() / 2));
		$('#water').css("left", (sLeft + $("#kettle").width()));
		$('#kettle').css("left", sLeft);
		$('#dragLine').css("left", sLeft);
		$('#dragSpot').css("top", 300);
		$('#dragSpot').css("left", dLeft);
	});
	
	resize('#linen');
	$('#linen').css("top", scrollY - ($('#linen').height() / 2));
	$('#linen').css("left", x + 100 - ($('#linen').width() / 2));
	
	resizeWH('#paper', 1341, 776);
	resizeWH('#servant', 1341, 776);
	$('#paper').css("bottom", 300*h);
	$('#paper').css("left", 0);
	$('#servant').css("bottom", 300*h);
	$('#servant').css("left", 0);
	setTimeout(function() {
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
						$('#linen').fadeIn("slow");
						$('#kettleToClick').fadeIn("slow", function() {
							$('#kettleToClick').addClass("select");
						});
						$("#background").css("background", "no-repeat url(/resources/background/ch03/3_5.png) center top");
						$('#background').children().hide();
						$('#servant').hide();
						$('#human').attr("src", "/resources/object/ch03/3_2_2.png");
					}, 2000);
				});
				$('#paper').attr("src", "/resources/character/ch03/paper_4.webp");
				$('#paper').show();
			});	
			$('#servant').attr("src", "/resources/character/ch03/servant_3.webp");
			$('#servant').removeClass("select");
	}, 4800);

	var kWidth = $("#kettle").width();
	$("#kettle").on("mousedown", function(event) {
		let shiftX = event.clientX - kettle.getBoundingClientRect().left;
		kettle.style.position = 'absolute';
		kettle.style.zIndex = 1000;
		document.body.append(kettle);
	
		function moveKettle(pageX) {
			kettle.style.left = pageX - shiftX + 'px';
			water.style.left = kWidth + pageX - shiftX + 'px';
		}
	
		function onMouseKettle(event) {
			moveKettle(event.pageX);
	
			kettle.hidden = true;
			let eb1 = document.elementFromPoint(event.clientX, event.clientY);
			kettle.hidden = false;
			
			if (!eb1) return;
			let db1 = eb1.closest('.droppable');
			if (cd1 != db1) {
				if (cd1) {
					leaveKettle(cd1);
				}
				cd1 = db1;
				if (cd1) {
					enterKettle(cd1);
				}
			}
		}
		document.addEventListener('mousemove', onMouseKettle);
		kettle.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseKettle);
			kettle.onmouseup = null;
			if (kettle.isOverlaped == true) {
				leaveKettle(cd1)
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
	if(wipeCount == 100) {
		$('.dirt').fadeTo("1000", 0.6);
	} else if(wipeCount == 200) {
		$('.dirt').fadeTo("1000", 0.3);
	} else if(wipeCount == 300) {
		$('#linen').css("top", scrollY - ($('#linen').height() / 2));
		$('#linen').css("left", x + 100 - ($('#linen').width() / 2));
		$('.dirt').fadeOut(1000);
		$('#shine').fadeIn(1000);
		setTimeout(function() { 
			$("form").submit();
		}, 3000);
	}
}

let cd1 = null;
let cd2 = null;
let wipeCount = 0;
let cleanCount = 0;

function enterKettle(elem) {
	kettle.isOverlaped = true;
	$('#dragSpot').hide();
	$('#dragLine').removeClass("blinking");
	$('#dragLine').fadeOut(1000);
	$('#kettle').fadeOut(1000);
	$('#water').fadeOut(1000);
	
	$('.dirt').fadeTo("1000", 0.75);
	$('#linen').addClass('select');
	
	$("#kettle").off("mousedown");
	kettle.ondragstart = function() { return true; };
	linen.ondragstart = function() { return false; };
	
	var dirt_top = $("#human").offset().top;
	var dirt_bottom = dirt_top + $("#human").height();
	var dirt_left = $("#human").offset().left;
	var dirt_right = dirt_left + $("#human").width();

	$('#linen').on("mousedown", function(event) {
		let shiftX = event.clientX - linen.getBoundingClientRect().left;
		let shiftY = event.clientY - linen.getBoundingClientRect().top;
		var scrollY = $("#scroll").height() / 2 + 100;
		
		$('#linen').removeClass('select');
		linen.style.position = 'absolute';
		linen.style.zIndex = 1000;
		document.body.append(linen);
		
		function moveLinen(pageX, pageY) {
			linen.style.left = pageX - shiftX + 'px';
			linen.style.top = pageY - shiftY + 'px';
		}
		
		function onMouseLinen(event) {
			moveLinen(event.pageX, event.pageY);
			var lin_top = $("#linen").offset().top;
			var lin_left = $("#linen").offset().left;
			if (lin_top >= dirt_top && lin_top <= dirt_bottom) {
				if(lin_left >= dirt_left && lin_left <= dirt_right) {
					wipeCount = wipeCount + 1;
					checkWipeCount();
				}
			}
		}
		
		document.addEventListener('mousemove', onMouseLinen);
		linen.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseLinen);
			linen.onmouseup = null;
			if (linen.isOverlaped == true) {
				leaveLinen(cd2)
			} else {
				$('#linen').css("top", scrollY - ($('#linen').height() / 2));
				$('#linen').css("left", x + 100 - ($('#linen').width() / 2));
			}
		};
	});	
}	

function leaveKettle(elem) {
	kettle.isOverlaped = false;
}

kettle.ondragstart = function() {
	return false;
};