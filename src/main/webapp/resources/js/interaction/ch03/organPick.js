function interaction() {
	var hLC = $("#human").offset().left + ($("#human").width() / 3);
	var hTC = $("#human").offset().top + ($("#human").height() / 2);
	var hRC = hLC + ($("#human").width() / 3);
	
	resize("#human_cover");
	center("#human_cover");
	$("#human_cover").fadeOut(3000);
	
	for(var i = 1; i < 5; i++) {
		resize('#organDest' + i);
		$('#organDest' + i).css("left", $("#human").offset().left + $("#human").width() / 4 * (i - 1));
		$('#organDest' + i).css("top", 100);
		$('#organDest' + i).hide();
		$('#organDest' + i).fadeIn(1000 * i);
	}
	
	var oRC = $('#background').width() - $('#organDest4').offset().left
	var oRB = oRC;
	for(var i = 1; i < 6; i++) {
		var organName = '#organ' + i;
		resize(organName);
		$(organName).width($(organName).width() / 2);
		$(organName).height($(organName).height() / 2);
		$(organName).css("z-index", 6 - i);
		$(organName).css("top", hTC - $('#organ' + i).width() / 2);
		$(organName).css("right", oRB);
		if(i == 4) {
			oRB = oRB + $('#organ4').height() / 4;
		}
		if(i != 1 && i != 3) {
			oRB = oRB + $(organName).height() / 2;
		}
		dragElement(document.getElementById('organDiv' + i), organName);
	}
	$('#organ1').on("click", function() {
		$('input[name=choice]').val(1);
		$('form').submit();
	});
	$('#organ1').css("right", oRC + $("#organ2").height() / 2);
	$('#organ3').css("top", $('#organ2').offset().top);
	
	resize('#servant');
	$('#servant').css("bottom", 300*h);
	$('#servant').css("left", 0);

let cd = null;
var Element = null;
var entered = [];

function checkElement() {
	if(entered.length >= 4) {
		setTimeout(function() { 
			$('input[name=choice]').val(-1);
			$("form").submit(); 
		}, 2000);
	}
}

function enterElement(elem) {
	console.log("enter: " + elem.id + ", " + entered);
	cd.isOverlaped = false;
	if($.inArray(elem.id, entered) == -1) {
		elem.style.background = 'center center no-repeat url("' + $(Element).attr("src"); + '")';
		$("#" + elem.id).css("background-size", "contain");
		$("#" + elem.id).css("border-radius", "0");
		$("#" + elem.id).css("border", "0px");
		$(Element).off("mousedown");
		$(Element).hide();
		entered.push(elem.id);
		checkElement();
	}
}

function leaveElement(elem) {
	console.log("leave: " + elem.id + ", " + entered);
	cd.isOverlaped = false;
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
		let eb = document.elementFromPoint(event.clientX, event.clientY);
		let db = eb.closest('.droppable');
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