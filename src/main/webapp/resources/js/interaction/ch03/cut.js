function interaction() {
	var hLC = $("#human").offset().left + ($("#human").width() / 3);
	var hTC = $("#human").offset().top + ($("#human").height() / 2);
	var hRC = hLC + ($("#human").width() / 3);
	
	resize('#knife');
	$('#knife').css("left", hLC - ($('#knife').width() / 1.414) / 2);
	$('#knife').css("top", hTC - $('#knife').height());
	$('#knife').hide();
	
	$('#dragLine').width($("#human").width() / 3);
	$('#dragLine').css("left", hLC);
	$('#dragLine').css("top", hTC);
	$('#dragLine').hide();
	
	$('#dragDest').css("left", hRC);
	$('#dragDest').css("top", hTC);
	$('#dragDest').hide();
	
	resize('#servant');
	$('#servant').css("bottom", $("#dialogue").height());
	$('#servant').css("left", 0);
	setTimeout(function() {
		$('#servant').addClass("select");
	}, 3600);
	$('#servant').on("click", function() {
		$('#servant').on("load", function() {
			$('#servant').removeClass("select");
			$('#knife').fadeIn("1000");
			$('#dragLine').fadeIn("1000");
			$('#dragDest').fadeIn("1000");
		});
		$('#servant').attr("src", "/resources/character/ch03/servant_2.webp");
	});

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
		$("form").submit();
	}, 100);
}

function leaveknife(elem) {
	elem.style.background = '';
	knife.isOverlaped = false;
}

knife.ondragstart = function() {
	return false;
};