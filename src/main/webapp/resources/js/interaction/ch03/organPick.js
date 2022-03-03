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
		$(organName).on("mousedown", function (event) {
			Element = organName;			
			let shiftX = event.clientX - $(Element).offset().left;
			let shiftY = event.clientY - $(Element).offset().top;
			$(Element).css("position", 'absolute');
			$(Element).css("z-index", 1000);
			document.body.append($(Element));
		
			function moveElement(pageX, pageY) {
				$(Element).css('left', pageX - shiftX);
				$(Element).css('top', pageY - shiftY);
			}
		
			function onMouseElement(event) {
				moveElement(event.pageX, event.pageY);
				$(Element).hidden = true;
				let eb = document.elementFromPoint(event.clientX, event.clientY);
				$(Element).hidden = false;
				
				if (!eb) return;
				let db = eb.closest('.droppable');
				if (cd != db) {
					if (cd) {
						leaveElement(cd);
					}
					cd = db;
					if (cd) {
						cdName = cd.id
						enterElement(cd);
					}
				}
			}
			document.addEventListener('mousemove', onMouseElement);
			$(Element).on("mouseup", function() {
				document.removeEventListener('mousemove', onMouseElement);
				$(Element).off('mouseup');
				if ($(Element).isOverlaped == true) {
					leaveElement(cd);
				}
			});
		});
	}
	$('#organ1').on("click", function() {
		$('input[name=choice]').val(1);
		$('form').submit();
	});
	$('#organ1').css("right", oRC + $("#organ2").height() / 2);
	$('#organ3').css("top", $('#organ2').offset().top);
	
	resize('#servant');
	$('#servant').css("bottom", $("#dialogue").height());
	$('#servant').css("left", 0);
}

let cd = null;
var Element = null;
var entered = [ 2, 3, 4, 5 ];

function enterElement(elem) {
	elem.style.background = 'pink';
	cd.isOverlaped = true;
}

function leaveElement(elem) {
	cd.isOverlaped = false;

	var idx = Element.charAt(Element.length-1);
	entered.splice(entered.indexOf(idx), 1);
	elem.style.background = '/resources/object/ch03/organ_' + idx + '.png';
	$(Element).off("mousedown");
	$(Element).hidden = true;

	if(entered.length == 0) {
		$("form").submit();
	}
}