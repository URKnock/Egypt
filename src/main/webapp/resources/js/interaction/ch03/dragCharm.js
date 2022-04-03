function interaction() {
	resize("#scroll");
	centerX("#scroll");
	var sl = $('#scroll').offset().left;
	$("#scroll").css("top", 112*h);
	var scrollY = $("#scroll").height() / 2 + 112*h;

	for(var i = 1; i < 4; i++) {
		resize('#charm' + i);
		centerX('#charm' + i);
		$('#charm' + i).css("top", scrollY - $('#charm' + i).height() / 2);
		dragElement(document.getElementById('charmDiv' + i), '#charm' + i);
	}
	$('#charm1').css("left", $('#charm1').offset().left - 100 - $('#charm1').width());
	$('#charm3').css("left", $('#charm3').offset().left + 100 + $('#charm3').width());
	
	$('#body').css({"left":$("#human").offset().left + 204*w, "top":$("#human").offset().top + 7*w});
	$('#chest').css({"left":$("#human").offset().left + 340*w, "top":$("#human").offset().top - 10*w});
	
let cd = null;
var Element = null;
var entered = [];

function checkElement() {
	if(entered.length >= 3) {
		$("#scroll").on("load", function() {
			setTimeout(function() {
				$('input[name=choice]').val(-1);
				$("form").submit(); 
			}, 2000);
		});
		$("#scroll").attr("src", "/resources/object/ch03/paper_close.webp");
	}
}

function enterElement(elem) {
	cd.isOverlaped = false;
	elem.style.background = 'pink';
	console.log(elem.id + " && " + Element.id);
	if((elem.id == "body" && Element.id == "charmDiv3") || (elem.id == "chest" && (Element.id == "charmDiv1" || Element.id == "charmDiv2"))) {
		$(Element).off("mousedown");
		$(Element).addClass("fade-out");
		$(Element).fadeOut(1000);
		entered.push(Element.id);
		checkElement();
		elem.style.background = '';
	} else {
		$('input[name=choice]').val(1);
		$("form").submit(); 
	}
}

function leaveElement(elem) {
	console.log("leave: " + elem.id + ", " + entered);
	cd.isOverlaped = false;
	elem.style.background = '';
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