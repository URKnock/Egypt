function interaction() {
	resize("#human_cover");
	center("#human_cover");
	$("#human_cover").fadeOut(3000);
	
	var organName = '#organ1';
	resize(organName);
	$(organName).width($(organName).width() / 2);
	$(organName).height($(organName).height() / 2);
	$(organName).css("top", $("#human").offset().top + ($("#human").height() / 2) - $(organName).width() / 2);
	$(organName).css("right", $('#background').width() - ($("#human").offset().left + $("#human").width() / 4 * 3) + 25*w);
	
	for(var i = 2; i <= 5; i++) {
		var organName = '#organ' + i;
		resize(organName);
		$(organName).css("left", x - $("#organ" + i).width() / 2);
		$(organName).css("top", 100);
		$(organName).animate({
			left: $("#human").offset().left + $("#human").width() / 4 * (i - 2)
		}, 1000, 'linear');
		dragElement(document.getElementById('organDiv' + i), organName);
	}
	
	resize('#servant');
	$('#servant').css("bottom", $("#dialogue").height());
	$('#servant').css("left", 0);

	let cd = null;
	var Element = null;
	var Clicked = null;
	
	var lock1 = false;
	var lock2 = false;
	
	var entered = [];
	var organed = [];
	var pairs = { "ca1":"organ5", "ca2":"organ2", "ca3":"organ3", "ca4":"organ4" }

	function enterElement(elem) {
		console.log("enter: " + elem.id + ", " + entered);
		cd.isOverlaped = false;
		var id = elem.id.substring(0, 3);
		if(!lock1 && $.inArray(cd.id, organed) == -1 && $.inArray(id, entered) == -1) {
			lock1 = true;
			$('#' + id + "_1").removeClass("head-leave");
			$('#' + id + "_1").addClass("head-hover");
			$(Element).off("mousedown");
			console.log(id + ", " + cd.id + " & " + pairs[id] + " & " + Clicked);
			if(Clicked != null) {
			if(pairs[id] != Clicked) {
				$('#' + id + "_0").addClass("hue");
				$('#' + id + "_1").addClass("hue");
				setTimeout(function() {
					$('input[name=choice]').val(1);
					$('form').submit();
				}, 1000);
			} else if(pairs[id] == Clicked) {
				entered.push(id);
				organed.push(cd.id);
			}
			}
		}
	}
	
	function leaveElement(elem) {
		console.log("leave: " + elem.id + ", " + entered);
		cd.isOverlaped = false;
		var id = elem.id.substring(0, 3);
		if(!lock2 && $.inArray(cd.id, organed) == $.inArray(id, entered)) {
			lock2 = true;
			setTimeout(function() {
				$(Element).addClass("fade-out");
				$('#' + id + "_1").removeClass("head-hover");
				$('#' + id + "_1").addClass("head-leave");
				if(organed.length >= 4 && entered.length >= 4) {
					for(var i = 1; i < 5; i++) {
						$('#ca' + i + "_0").addClass("contrast");
						$('#ca' + i + "_1").addClass("contrast");
					}
					setTimeout(function() {
						for(var i = 1; i < 5; i++) {
							$('#ca' + i + "_0").removeClass("contrast");
							$('#ca' + i + "_1").removeClass("contrast");
							$('#ca' + i + "_0").addClass("contrast_origin");
							$('#ca' + i + "_1").addClass("contrast_origin");
						}
					}, 1000);
					setTimeout(function() { 
						$('input[name=choice]').val(-1);
						$("form").submit(); 
					}, 2000);
				}
				lock1 = false;
				lock2 = false;
			}, 500);
		}
	}
	
	function dragElement(elmnt, elem) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		var eb, db;
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
			Clicked = e.target.id;
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
			
			Element = elem;
			eb = document.elementFromPoint(event.clientX, event.clientY);
			db = eb.closest('.droppable');
			if (eb) {
				if (cd != db) {
					if (cd) { leaveElement(cd); }
					cd = db;
					if (cd) { enterElement(cd); }
				}
			}
		}
		
		function closeDragElement() {
			Clicked = elmnt;
			elmnt.onmouseup = function() {
				elmnt.onmouseup = null;
				if (cd.isOverlaped == true) {
					leaveDroppable(cd);
				}
			}	
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}
}