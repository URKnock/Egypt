function interaction() {
	$('#pot').hide();
	$('#bandage').hide();
	$('#niddle').hide();
	$('canvas').hide();
	$('.clickable').hide();
	resizeCenter("#human_soda");
	resizeCenter("#human_cover");

	function human_rescale() {
		var arr = ["#human", "#human_soda", "#human_band", "#human_cover"];
		arr.forEach (function (item, idx) {
			resizeWH(item, 834, 177);
			centerX(item);
			$(item).css("bottom", 317*h);
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
	
	resize("#scroll");
	centerX("#scroll");
	var sl = $('#scroll').offset().left;
	$("#scroll").css("top", 112*w);
	$('#scroll').hide();

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
	
	$("#hole1").css({"left": 943*w, "top": 660*h});
	$("#hole2").css({"left": 965*w, "top": 610*h});
	$("#hole3").css({"left": 1003*w, "top": 680*h});
	$("#hole4").css({"left": 1040*w, "top": 593*h});
	$("#hole5").css({"left": 1088*w, "top": 680*h});
	$("#hole6").css({"left": 1110*w, "top": 610*h});
	$("#hole7").css({"left": 1140*w, "top": 660*h});

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
					$("#niddle").fadeOut(1000);		
					$("#human_cover").fadeIn(2000);
					$('#human_band').fadeOut();
					$('#human_soda').on("load", function() {
						$(holes).each(function(index){
							$(holes[index]).fadeOut(2000);
						});
						$('canvas').fadeOut(2000);
						$('#human').fadeOut(1000);
						$('#human_cover').fadeOut(1000);
						$('#human_soda').addClass("fadeLeft");
						$('#scroll').attr("src", "/resources/object/ch03/paper_close.webp");
						setTimeout(function() { $('#human_soda').addClass("fadeActive"); }, 100);
						setTimeout(function() { $("form").submit(); }, 5000);
					});
					$('#human_soda').attr("src", "/resources/character/ch03/3_4.png");
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
	$('#paper').css("bottom", 300*h);
	$('#paper').css("left", 0);
	$('#servant').css("bottom", 300*h);
	$('#servant').css("left", 0);
	if(flag == "1") {
		$('#scroll').show();
		$('#paper').hide();
		$('#niddleToClick').fadeIn("slow", function() {
			$('#niddleToClick').addClass("select");
			$('#niddleToClick').on("click", function() {
				$('#niddleToClick').removeClass("select");
				$('#niddleToClick').hide();
				$('#click2').hide();
				$('#click3').show();
				$('canvas').show();
				$('#human_cover').addClass("select");
				onUsing = "niddle";
				$(holes).each(function(index){
					$(holes[index]).fadeIn(1000);
				});
				$('#niddle').show();
				$('#niddle').css("z-index", "15");
				$('#niddle').css("transform", "rotate(45deg)");
				center('#niddle');
				niddle.isHeld = true;
				document.addEventListener('mousemove', followMouse);
			});
		});
		$("#background").css("background", "no-repeat url(/resources/background/ch03/3_5.png) center top");
		$('#background').children().hide();
		$('#servant').hide();
		human_rescale();
	} else {
		$('#bed').hide();
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
		}, 4800);
	}

let cd = null;
let Element = null;
var onUsing = null;
var enterCnt = 0;
var isEntering = false;
var niddle = document.getElementById("niddle");

function followMouse( event ) {
	if(niddle.isHeld) {
		const x = event.x - (niddle.clientWidth / 2.0);
		const y = event.y - (niddle.clientHeight / 2.0);
		niddle.style.left = x + 'px';
		niddle.style.top = y + 'px';
	}
}

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
			$('#human_band').attr("src", "/resources/object/ch03/bandage_" + (enterCnt - 3) + ".png");
			if(enterCnt >= 6) {
				$("#" + onUsing).off("mousedown");
				$("#" + onUsing).hide();
				$('#niddleToClick').addClass("select");
				$('#niddleToClick').on("click", function() {
					$('#niddleToClick').removeClass("select");
					$('#niddleToClick').hide();
					$('#click2').hide();
					$('#click3').show();
					$('canvas').show();
					$('#human_cover').addClass("select");
					onUsing = "niddle";
					$(holes).each(function(index){
						$(holes[index]).fadeIn(1000);
					});
					$('#niddle').show();
					$('#niddle').css("z-index", "15");
					$('#niddle').css("transform", "rotate(45deg)");
					center('#niddle');
					niddle.isHeld = true;
					document.addEventListener('mousemove', followMouse);
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
