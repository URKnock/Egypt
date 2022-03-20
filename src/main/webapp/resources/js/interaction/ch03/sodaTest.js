function interaction() {
	$('#bed').hide();
	$('#pot').hide();
	$('#bandage').hide();
	$('#niddle').hide();
	$('canvas').hide();
	$('.clickable').hide();
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
	    $('#bandageToClick').attr("src"),
	    $('#niddleToClick').attr("src"),
	    $('#servant').attr("src"),
	    $('#scroll').attr("src"),
	    "/resources/object/ch03/soda_1.png",
	    "/resources/object/ch03/soda_2.png",
	    "/resources/object/ch03/soda_3.png",
	    "/resources/object/ch03/soda_4.png",
	    "/resources/object/ch03/paper_open.webp",
	    "/resources/object/ch03/paper_close.webp"
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
		var sLeft = $('#background').width() / 2 - $('#pot').width() / 2;
		$('#potToClick').removeClass("select");
		$('#potToClick').hide();
		$('#pot').show();
		$('#pot').css("left", sLeft);
		$('#click1').show();
		onUsing = "pot";
		dragElement(document.getElementById('click1'), "#pot");
	});
	
	resize('#bandageToClick');
	$('#bandageToClick').css("top", scrollY - ($('#bandageToClick').height() / 2));
	$('#bandageToClick').css("left", x - $('#bandageToClick').width() / 2);
	$('#bandageToClick').hide();

	resizeWH('#niddleToClick', 43*w, 150*w);
	$('#niddleToClick').css("top", scrollY - ($('#niddleToClick').height() / 2));
	$('#niddleToClick').css("left", x + $("#scroll").width() / 4 - $('#niddleToClick').width() / 2);
	$('#niddleToClick').hide();

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
						$('#bandageToClick').fadeIn("slow");
						$('#niddleToClick').fadeIn("slow");
						$('#potToClick').fadeIn("slow", function() {
							$('#potToClick').addClass("select");
						});
						$("#background").css("background", "no-repeat url(/resources/background/ch03/3_5.png) center top");
						$('#background').children().hide();
						$('#servant').hide();
						$('#bed').show();
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

let cd = null;
let Element = null;
var onUsing = null;
var enterCnt = 1;
var isEntering = false;

function enterElement(elem) {
	console.log("enter: " + elem.id + ", " + isEntering + ", " + enterCnt + ", " + cd.id);
	cd.isOverlaped = false;
	if(!isEntering && elem.id == "human_cover") {
		isEntering = true;
		enterCnt++;
		if(onUsing == "pot") {
			$('#human_soda').attr("src", "/resources/object/ch03/soda_" + enterCnt + ".png");
			if(enterCnt >= 3) {
				enterCnt == 0;
				$("#" + onUsing).off("mousedown");
				$("#" + onUsing).hide();
				$('#potToClick').show();
				$('#bandageToClick').addClass("select");
				$('#bandageToClick').on("click", function() {
					$('#bandageToClick').removeClass("select");
					$('#bandageToClick').hide();
					$('#bandage').css("left", $('#background').width() / 2 - $('#pot').width() / 2);
					$('#bandage').show();
					$('#click1').hide();
					$('#click2').show();
					onUsing = "bandage";
					dragElement(document.getElementById('click2'), "#bandage");
				});
			}
		} else if(onUsing == "bandage") {
			$('#human_soda').attr("src", "/resources/object/ch03/bandage_" + enterCnt-3 + ".png");
			if(enterCnt >= 4) {
				$("#" + onUsing).off("mousedown");
				$("#" + onUsing).hide();
				$('#bandageToClick').show();
				$('#niddleToClick').addClass("select");
				$('#niddleToClick').on("click", function() {
					$('#niddleToClick').removeClass("select");
					$('#niddleToClick').hide();
					$('#click2').hide();
					$('#click3').show();
					$('#human_cover').addClass("select");
					onUsing = "niddle";
					// dragElement(document.getElementById('click3'), "#niddle");
					
					var isDrawed = false;
					var cHeight2 = $('canvas').height() / 2;
					
					var cTop = $('#human').offset().top + 20*w;
					var cLeft = $('#human').offset().left + 410*w;
					$('canvas').show();
					
					$('canvas').width(210*w*1.25);
					$('canvas').height(105*w);
					$('canvas').css({ top : cTop, left : cLeft });
					
					function next() {
						if(isDrawed) {
							isDrawed = false;
							$('#potToClick').fadeOut();
							$('#bandageToClick').fadeOut();
							$('#niddleToClick').fadeOut();
							$('#scroll').attr("src", "/resources/object/ch03/paper_close.webp");
							$('#human_soda').on("load", function() {
								$('canvas').fadeOut(2000);
								$('#human').fadeOut(1000);
								$('#human_cover').fadeOut(1000);
								$('#human_soda').addClass("fadeLeft");
								setTimeout(function() { $('#human_soda').addClass("fadeActive"); }, 100);
								setTimeout(function() { $("form").submit(); }, 5000);
							});
							canvas.removeEventListener("mousemove", draw);
							$('#human_soda').attr("src", "/resources/character/ch03/3_4.png");
						}
					}
					
					$('canvas').on("mouseover", function() { $('#human_cover').removeClass("select"); });
					$('canvas').on("mouseout", function() { if( isDrawed ) { next(); } });
					
					const canvas = document.getElementById("canvas");
					const ctx = canvas.getContext("2d");
					let coord = { x: 0, y: 0 };
					
					canvas.addEventListener("mousedown", start);
					canvas.addEventListener("mouseup", stop);
					
					function reposition(event) {
					  coord.x = event.clientX - canvas.offsetLeft;
					  coord.y = event.clientY - canvas.offsetTop + cHeight2;
					}
					function start(event) {
					  canvas.addEventListener("mousemove", draw);
					  reposition(event);
					}
					function stop() {
					  canvas.removeEventListener("mousemove", draw);
					  isDrawed = true;
					  next();
					}
					function draw(event) {
					  ctx.beginPath();
					  ctx.lineWidth = 5;
					  ctx.lineCap = "round";
					  ctx.strokeStyle = "#FF0000";
					  ctx.moveTo(coord.x, coord.y);
					  reposition(event);
					  ctx.lineTo(coord.x, coord.y);
					  ctx.stroke();
					  ctx.closePath();
					  if(coord.x > canvas.offsetLeft + canvas.width() / 1.25) { 
					 	isDrawed = true;
					  }
					}
				});
			}
		}
	}
}

function leaveElement(elem) {
	console.log("leave: " + elem.id);
	cd.isOverlaped = false;
	isEntering = false;
}

function dragElement(elmnt, elem) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elem)) {
		document.getElementById(elem).onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}
	
	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}
	
	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}
	
	function closeDragElement() {
		Element = elem;
		elmnt.style.display = 'none';
		let eb = document.elementFromPoint(event.clientX, event.clientY);
		let db = eb.closest('.droppable');
		elmnt.style.display = '';
		console.log(eb);
		console.log(db);
		if (eb) {
			if (cd != db) {
				if (cd) { leaveElement(cd); }
				cd = db;
				if (cd) { enterElement(cd); }
			}
		}
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

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
