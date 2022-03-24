function interaction() {
	resize("#scroll");
	centerX("#scroll");
	var sl = $('#scroll').offset().left;
	$("#scroll").css("top", 112*w);
	var scrollY = $("#scroll").height() / 2 + 112*w;

	for(var i = 1; i < 4; i++) {
		resize('#charmDest' + i);
		centerX('#charmDest' + i);
		$('#charmDest' + i).css("top", scrollY - $('#charmDest' + i).height() / 2);
		$('#charmDest' + i).hide().fadeIn(1000 * i);

		resize('#charm' + i);
		dragElement(document.getElementById('charmDiv' + i), '#charm' + i);
	}
	$('#charmDest1').css("left", $('#charmDest1').offset().left - 100 - $('#charmDest1').width());
	$('#charmDest3').css("left", $('#charmDest3').offset().left + 100 + $('#charmDest3').width());
	
	$('#charm2').width($('#charm2').width() * 0.5);
	$('#charm2').height($('#charm2').height() * 0.5);
	$('#charm3').width($('#charm3').width() * 0.3);
	$('#charm3').height($('#charm3').height() * 0.3);
	
	$('#charm1').css({"left":50, "top":50});
	$('#charm2').css({"left":x + 500*w, "bottom": $("#dialogue").height() + 10*w});
	$('#charm3').css({"left":1535*w, "top":385*w});
		
let cd = null;
var Element = null;
var entered = [];

function enterElement(elem) {
	cd.isOverlaped = false;
	console.log(elem.id + " && " + Element.id);
	if(elem.id.slice(-1) == Element.id.slice(-1)) {
		$(Element).off("mousedown");
		$(Element).hide();
		$("#" + elem.id).addClass("originContrast");
		setTimeout(function() {
			$("#" + elem.id).removeClass("grayContrast");
			$("#" + elem.id).removeClass("originContrast");
			$("#" + elem.id).addClass("select");
		}, 600);
		$("#" + elem.id).on("click", function() {
			$("#" + elem.id).removeClass("select");
			var arrIndex = Number(elem.id.slice(-1));
			object(elem.id, (9 + arrIndex), arrIndex);
			if(clicked.indexOf(arrIndex) != -1) {
				clicked.splice(clicked.indexOf(arrIndex), 1);
			}
		});
		entered.push(elem.id);
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
		Element = elmnt;
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