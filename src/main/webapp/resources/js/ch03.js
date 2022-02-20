var w, h, x, y;
var scene, index, flag;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	w = $("#background").width() / 2650 / 0.87;
	h = $("#background").height($("#background").prop("naturalHeight") * w);
	$(window).resize(function() {
		location.reload(true);
	});
	$(".close").on("click", function() { 
		hide_info();
		if(clicked.length == 0) {
			$("form").submit();
		}
	});
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
 
	switch(scene) {
		case '1':
			if(index == 0) {
				$("#background > img:nth-child(2)").addClass("pikachu");
				$("#background > img:nth-child(3)").addClass("pikachu");
				$("#background > img:nth-child(2)").on("click", function() { 
					object("#background > img:nth-child(2)", 6, 5); 
				});
				$("#background > img:nth-child(3)").on("click", function() { 
					object("#background > img:nth-child(3)", 5, 6); 
				});
				for(var i = 1; i < 5; i++) {
					$("#ca" + i).addClass("pikachu");
				}
				$("#ca1").on("click", function() { object("#ca1", 3, 1) });
				$("#ca2").on("click", function() { object("#ca2", 4, 2) });
				$("#ca3").on("click", function() { object("#ca3", 0, 3) });
				$("#ca4").on("click", function() { object("#ca4", 2, 4) });
			} else {
				$("#dialogue").on("click", function() {
					$("form").submit();
				});
			}
			break;
		case '2':
			if(flag == 1) {
				$("#background > img:nth-child(4)").addClass("pikachu");
				$("#background > img:nth-child(4)").on("click", function() {
					objectSubmit("#background > img:nth-child(4)");
				});
			}
			break;
		case '3':
		case '4':
			clicked = [];
			break;
		default:
			$("#dialogue").on("click", function() {
				$("form").submit();
			});	
			break;
	}
});

function init() {
	scene = $("input[name='scene']").val();

	w = $("#background").width() / 2650 / 0.87;
	x = $("#background").width() / 2.0;
	
	var bh = $("#background").height() - $("#dialogue").height();
	if (bh < 0) bh = 0;
	$("#background").height(bh);
		
	var sw = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	sw = sw - $("#choice").width();
	if (sw < 0) sw = 0;
	$("#scene").width(sw);
	$("#choice > img").height( $("#dialogue > img").height() );
	
	var b = $("#dialogue").height() + 10*w;
	
	var bg1 = $("#background > img:nth-child(1)");
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	
	var bg2 = $("#background > img:nth-child(2)");
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - 550*w);
	bg2.css("bottom", b);
	
	var bg3 = $("#background > img:nth-child(3)");
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x + 450*w);
	bg3.css("bottom", b);
	
	var bg4 = $("#background > img:nth-child(4)");
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x + 600*w);
	bg4.css("bottom", $("#dialogue").height() + 5*w);
	
	var bottom = 0;
	if(scene == 8) {
		bottom = canopic_two(); 
	} else { 
		bottom = canopic_one(); 
	}
	bg1.css("left", x - (bg1.width() / 2.0) + 10*w);
	bg1.css("bottom", bottom);
}

function object(select, index, arrIndex) {
	show_info(index);
	if(arguments.length == 3) {
		if(clicked.indexOf(arrIndex) != -1) {
			clicked.splice(clicked.indexOf(arrIndex), 1);
			$(select).removeClass("pikachu");
			$(select).off("click");
		}
	} else {
		$(select).removeClass("pikachu");
		$(select).off("click");
	}
}

function objectSubmit(select) {
	$(select).removeClass("pikachu");
	$(select).off("click");
	$("form").submit();
}

function canopic_one() {
/*	for(var i = 1; i < 5; i++) {
		var caW = $("#ca" + i).width() * w;
		var caH = $("#ca" + i).height() * w;
		$("#ca" + i).width(caW);
		$("#ca" + i).height(caH);
	}
*/
	var caH = $("#ca1").height();
	var ca_bottom = $("#dialogue").height() + 10*w;
	$("#ca1").width($("#ca1").prop("naturalWidth") * w);
	$("#ca1").height($("#ca1").prop("naturalHeight") * w);
	$("#ca1").css("bottom", ca_bottom);
	$("#ca1").css("left", x - 237*w);
		
	for(var i = 2; i < 5; i++) {
		$("#ca" + i).width($("#ca" + i).prop("naturalWidth") * w);
		$("#ca" + i).height($("#ca" + i).prop("naturalHeight") * w);
		$("#ca" + i).css("bottom", ca_bottom);
		$("#ca" + i).css("left", x + (-312 + (125 * i) - 50)*w);
	}
	return (ca_bottom + caH / 3 - 5*w);
}

function canopic_two() {
/*	for(var i = 1; i < 5; i++) {
		var caW = $("#ca" + i + "_1").width() * w;
		var caH = $("#ca" + i + "_1").height() * w;
		$("#ca" + i + "_1").width(caW);
		$("#ca" + i + "_1").height(caH);
			
		caW = $("#ca" + i + "_0").width() * w;
		caH = $("#ca" + i + "_0").height() * w;	
		$("#ca" + i + "_0").width(caW);
		$("#ca" + i + "_0").height(caH);
	}
*/
	var caH = $("#ca1_0").height();
	var ca_bottom_0 = $("#dialogue").height() + 10*w;
	var ca_bottom_1 = $("#ca1_1").height() / 3 + ca_bottom_0;
	$("#ca1_0").width($("#ca1_0").prop("naturalWidth") * w);
	$("#ca1_0").height($("#ca1_0").prop("naturalHeight") * w);
	$("#ca1_1").width($("#ca1_1").prop("naturalWidth") * w);
	$("#ca1_1").height($("#ca1_1").prop("naturalHeight") * w);
	$("#ca1_0").css("bottom", ca_bottom_0);
	$("#ca1_0").css("left", x - 227*w);
	$("#ca1_1").css("bottom", ca_bottom_1);
	$("#ca1_1").css("left", x - 237*w);
		
	for(var i = 2; i < 5; i++) {
		$("#ca" + i + "_0").width($("#ca" + i + "_0").prop("naturalWidth") * w);
		$("#ca" + i + "_0").height($("#ca" + i + "_0").prop("naturalHeight") * w);
		$("#ca" + i + "_1").width($("#ca" + i + "_0").prop("naturalWidth") * w);
		$("#ca" + i + "_1").height($("#ca" + i + "_0").prop("naturalHeight") * w);
		$("#ca" + i + "_0").css("bottom", ca_bottom_0);
		$("#ca" + i + "_0").css("left", x + (-312 + (125 * i) - 40)*w);
		$("#ca" + i + "_1").css("bottom", ca_bottom_1);
		$("#ca" + i + "_1").css("left", x + (-312 + (125 * i) - 50)*w);
	}
	return (ca_bottom_0 + caH / 3 - 5*w);
}

function center(element) {
	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100*w;
	$(element).css("left", x - ($(element).width() / 2));
	$(element).css("top", y - ($(element).height() / 2));
}