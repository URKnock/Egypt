function interaction() {
	$('#kettle').hide();
	$('#water').hide();
	$('#shine').hide();
	$('#dragLine').hide();
	$('#dragSpot').hide();
	$('#arrowLine').hide();
	
	$("#background").css("background", "no-repeat url(/resources/background/ch03/3_5.png) center top");
	$('#background').children().hide();

	var arr = ["#hum", "#soda_head", "#soda_body", "#soda_bottom", "#soda_leg", "#soda_over", "#shine"]
	arr.forEach (function (item, idx) {
		resizeWH(item, 834, 177);
		centerX(item);
		$(item).css("bottom", 317*h);
	});
	resize("#shine");
	centerX("#shine");
	$("#soda_over").css("bottom", 334*h);
	$("#effect").attr("src", "/resources/bgm/ch03/kettle.mp3");

	resize("#bed");
	centerX("#bed");
	$("#bed").css("bottom", 0);
	
	resize("#scroll");
	centerX("#scroll");
	$("#scroll").css("top", 0);

	resize('#kettleToClick');
	$('#kettleToClick').css("top", $("#scroll").height() - $('#kettleToClick').height() - 27*h);
	$('#kettleToClick').css("left", x - 80*w - ($('#kettleToClick').width() / 2));
	$('#kettleToClick').on("click", function() {
		$('#dragLine').show();
		$('#dragLine').css("top", 500*h);
		centerX('#dragLine');
		var dragLeft = $("#dragLine").offset().left;
		$('#kettleToClick').removeClass("select");
		$('#kettleToClick').hide();
		$('#water').show();
		$('#kettle').show();
		$('#dragSpot').show();
		$('#water').css("top", 500*h);
		$('#water').css("left", dragLeft);
		$('#kettle').css("top", 500*h - $("#kettle").height() / 2);
		$('#kettle').css("left", dragLeft - $("#kettle").width());
		$('#dragSpot').css("top", 500*h-55);
		$('#dragSpot').css("left", dragLeft + $('#dragLine').width());
		Effect.loop = true;
		effect();
	});
	$('#kettleToClick').hide().fadeIn(1100).addClass("select");
	setTimeout(function () {
		$('#scroll').attr("src", "/resources/object/ch03/dish.png");
	}, 1100);
	
	resize('#linen');
	$('#linen').css("top", $("#scroll").height() - $('#linen').height() - 27*h);
	$('#linen').css("left", x + 80*w - ($('#linen').width() / 2));
	$('#linen').hide().fadeIn(1100);

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

function checkWipeCount() {
	if(wipeCount == 100) {
		$('.soda').fadeTo("1000", 0.6);
		effect();
	} else if(wipeCount == 200) {
		$('.soda').fadeTo("1000", 0.3);
		effect();
	} else if(wipeCount == 300) {
		$('#linen').css("top", $("#scroll").height() - $('#linen').height() - 27*h);
		$('#linen').css("left", x + 80*w - ($('#linen').width() / 2));
		$('#arrowLine').fadeOut(500);
		$('.soda').fadeOut(1000);
		$('#shine').delay(500).fadeIn(1000);
		effect();
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
	
	Effect.pause();
	setTimeout(function() {
		$("#effect").attr("src", "/resources/bgm/ch03/towel.mp3");
	}, 4000);
	
	$('.soda').fadeTo("1000", 0.75);
	$('#linen').addClass('select');
	
	$("#kettle").off("mousedown");
	kettle.ondragstart = function() { return true; };
	linen.ondragstart = function() { return false; };
	
	var dirt_top = $("#hum").offset().top;
	var dirt_bottom = dirt_top + $("#hum").height();
	var dirt_left = $("#hum").offset().left;
	var dirt_right = dirt_left + $("#hum").width();

	$('#linen').on("mousedown", function(event) {
		$('#arrowLine').show();
		$('#arrowLine').css("top", $("#hum").offset().top);
		centerX('#arrowLine');

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
				$('#linen').css("top", $("#scroll").height() - $('#linen').height() - 27*h);
				$('#linen').css("left", x + 80*w - ($('#linen').width() / 2));
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