var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	o_select = "0";
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
		if(o_select != "0") {
			var path = "/resources/background/ch03/" + o_index + ".webp";
			$(o_select).on("load", function() { canopic_one(); });
			$(o_select).attr("src", path);
		}
	});
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();

 	if((scene == 1 && index == 0) || (scene == 2 && flag == 1)) {
 		if(scene == 2 && flag == 1) {
 			clicked = [0, 1, 2, 3, 4, 5, 6];
 			$("#background > img:nth-child(4)").addClass("select");
			$("#background > img:nth-child(4)").addClass("pikachu");
			$("#background > img:nth-child(4)").on("click", function() {
				objectSubmit("#background > img:nth-child(4)");
			});
 		} else {
			$("#background > img:nth-child(2)").addClass("select");
			$("#background > img:nth-child(3)").addClass("select");
			for(var i = 1; i < 5; i++) {
				$("#ca" + i).addClass("select");
			} 			
 		}
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
 	} else if(scene == 7 && index == 1) {
 		$("input[name='index']").val(0);
 	}
	switch(scene) {
		case '1':
			if(index != 0) {
				$("#dialogue").on("click", function() {
					$("form").submit();
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
		
	var sw = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	sw = sw - $("#choice").width();
	if (sw < 0) sw = 0;
	$("#scene").width(sw);
	$("#choice > img").height( $("#dialogue > img").height() );
	
	resize("#human");
	center("#human");
	
	var b = $("#dialogue").height() + 10*w;
	
	var bg1 = $("#background > img:nth-child(1)");
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	bg1.css("left", x - (bg1.width() / 2.0) + 10*w);
	bg1.css("bottom", b);
	
	var bg2 = $("#background > img:nth-child(2)");
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - 600*w);
	bg2.css("bottom", b);
	
	var bg3 = $("#background > img:nth-child(3)");
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x + 400*w);
	bg3.css("bottom", b);
	
	var bg4 = $("#background > img:nth-child(4)");
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x + 600*w);
	bg4.css("bottom", $("#dialogue").height() + 5*w);
	
	if(scene == 9) {
		canopic_two(); 
	} else { 
		canopic_one(); 
	}
}

function object(select, index, arrIndex) {
	show_info(index);
	if(arguments.length == 3) {
		o_select = select;
		o_index = arrIndex;
		if(clicked.indexOf(arrIndex) != -1) {
			clicked.splice(clicked.indexOf(arrIndex), 1);
			$(select).removeClass("select");
		}
	} else {
		o_select = "0";
		$(select).removeClass("select");
	}
}

function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}

function canopic_one() {
	if(o_select != "0" && o_select != undefined) {
		var caL = 270.5;
	} else {
		var caL = 227;
	}
	var ca_bottom = $("#dialogue").height();
	resize("#ca1");
	$("#ca1").css("bottom", ca_bottom);
	if(caL == 270.5 && o_select != "0") {
		if(o_index == 1) {
			$("#ca1").css("left", x - caL*w);
		}
	} else {
		$("#ca1").css("left", x - caL*w);
	}
		
	for(var i = 2; i < 5; i++) {
		resize("#ca" + i);
		$("#ca" + i).css("bottom", ca_bottom);
		if(caL == 270.5 && o_select != "0") {
			if(o_index == i) {
				$("#ca" + i).css("left", x + (-caL - 125 + (125 * i))*w);
			}
		} else {
			$("#ca" + i).css("left", x + (-caL - 125 + (125 * i))*w);
		}
	}
}

function canopic_two() {
	var caH = $("#ca1_0").height();
	var ca_bottom_0 = $("#dialogue").height();
	var ca_bottom_1 = $("#ca1_1").height() / 3 + ca_bottom_0;
	resize("#ca1_0");
	resize("#ca1_1");
	$("#ca1_0").css("bottom", ca_bottom_0);
	$("#ca1_0").css("left", x - 227*w);
	$("#ca1_1").css("bottom", ca_bottom_1);
	$("#ca1_1").css("left", x - 237*w);
		
	for(var i = 2; i < 5; i++) {
		resize("#ca" + i + "_0");
		resize("#ca" + i + "_1");
		$("#ca" + i + "_0").css("bottom", ca_bottom_0);
		$("#ca" + i + "_0").css("left", x + (-312 + (125 * i) - 40)*w);
		$("#ca" + i + "_1").css("bottom", ca_bottom_1);
		$("#ca" + i + "_1").css("left", x + (-312 + (125 * i) - 50)*w);
	}
}

function center(element) {
	centerX(element);
	centerY(element);
}
function centerX(element) {
	$(element).css("left", x - ($(element).width() / 2));
}
function centerY(element) {
	$(element).css("bottom", $("#dialogue").height() + 265*w);
}

function resize(element) {
	$(element).width($(element).prop("naturalWidth") * w);
	$(element).height($(element).prop("naturalHeight") * w);
}
function resizeWH(element, ew, eh) {
	$(element).width(ew * w);
	$(element).height(eh * w);
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function interaction() {};