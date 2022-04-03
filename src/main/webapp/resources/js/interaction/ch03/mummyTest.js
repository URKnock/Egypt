function interaction() {
	resize("#servant");
	$('#servant').css("bottom", 300*h);
	$('#servant').css("left", 0);
	$('#human').addClass("select");
	dragElement(document.getElementById('humanDiv'), "#human");
	
let cd = null;
var Element = null;

function enterElement(elem) {
	cd.isOverlaped = false;
	$(Element).off("mousedown");
	$(Element).fadeOut(1000);
	$('#human').removeClass("select");
	$("#servant").on("load", function() {
		setTimeout(function() {
			$('input[name=choice]').val(-1);
			$("form").submit(); 
		}, 2000);
	});
	$("#servant").attr("src", "/resources/character/ch03/coffin_2.webp");
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