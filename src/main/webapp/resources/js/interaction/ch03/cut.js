function interaction() {
	var hLC = $("#human").offset().left + ($("#human").width() / 3);
	var hTC = $("#human").offset().top + ($("#human").height() / 2);
	var hRC = hLC + ($("#human").width() / 3);
	
	resize("#scroll");
	centerX("#scroll");
	$("#scroll").css("top", 0);
	$('#scroll').hide();
	
	resize('#knifeToClick');
	$('#knifeToClick').hide();
	$('#paper').hide();
	
	resize('#knife');
	$('#knife').css("left", hLC - ($('#knife').width() / 1.414) / 2);
	$('#knife').css("top", hTC - $('#knife').height());
	$('#knife').hide();
	
	resize('#dragLine');
	centerX('#dragLine');
	$('#dragLine').css("top", hTC);
	$('#dragLine').hide();
	
	$('#dragDest').css("left", hRC);
	$('#dragDest').css("top", hTC-20);
	$('#dragDest').hide();

	resize('#knifeToClick');
	$('#knifeToClick').css("top", $("#scroll").height() - $('#knifeToClick').height() - 27*h);
	centerX('#knifeToClick');
	$('#knifeToClick').on("click", function() {	
		$('#knifeToClick').fadeOut(1000);
		$('#knife').fadeIn("1000");
		$('#dragLine').fadeIn("1000");
		$('#dragDest').fadeIn("1000");
	});
	
	resizeWH('#paper', 522, 217);
	$('#paper').css("top", 0);
	centerX('#paper');
	
	resizeWH('#servant', 1341, 776);
	$('#servant').css("bottom", 300*h);
	$('#servant').css("left", 0);
	setTimeout(function() {
			$('#servant').on("load", function() {
				resize("#servant");
				$('#paper').on("load", function() {
					setTimeout(function() {
					$('#scroll').show();
					$('#paper').hide();
					$('#knifeToClick').fadeIn("1000").addClass("select");
					}, 2000);
					setTimeout(function() { $('#servant').hide(); }, 1800);
				});
				$('#paper').attr("src", "/resources/object/ch03/dish_organ.webp");
				$('#paper').show();
			});
		$('#servant').attr("src", "/resources/character/ch03/servant_none_back.webp");
	}, 5000);

	$("#knife").on("mousedown", function(event) {
		let shiftX = event.clientX - knife.getBoundingClientRect().left;
		knife.style.position = 'absolute';
		knife.style.zIndex = 1000;
		document.body.append(knife);
	
		function moveknife(pageX) {
			knife.style.left = pageX - shiftX + 'px';
		}
	
		function onMouseknife(event) {
			moveknife(event.pageX);
	
			knife.hidden = true;
			let eb1 = document.elementFromPoint(event.clientX, event.clientY);
			knife.hidden = false;
			
			if (!eb1) return;
			let db1 = eb1.closest('.droppable');
			if (cd1 != db1) {
				if (cd1) {
					leaveknife(cd1);
				}
				cd1 = db1;
				if (cd1) {
					enterknife(cd1);
				}
			}
		}
		document.addEventListener('mousemove', onMouseknife);
		knife.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseknife);
			knife.onmouseup = null;
			if (knife.isOverlaped == true) {
				leaveknife(cd1)
			}
		};
	});	
}

let cd1 = null;

function enterknife(elem) {
	elem.style.background = 'pink';
	knife.isOverlaped = true;
	setTimeout(function() {
		$("#scroll").animate({ left:-$("#scroll").width() }, 500);
		$("#knife").fadeOut(500);
		$("#dragLine").fadeOut(500);
		$("#dragDest").fadeOut(500);
		$("form").submit();
	}, 2000);
}

function leaveknife(elem) {
	elem.style.background = '';
	knife.isOverlaped = false;
}

knife.ondragstart = function() {
	return false;
};