var w, h, x, y;
var scene, index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	$(".close").on("click", function() { 
		hide_info();
		if(clicked.length == 0) {
			$("form").submit();
		}
	});
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();

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
			
		default:
			$("#dialogue").on("click", function() {
				$("form").submit();
			});	
			break;
	}
});

function init() {
	scene = $("input[name='scene']").val();

	h = $("#background").height() - $("#dialogue").height();
	if (h < 0) h = 0;
	$("#background").height(h);
		
	w = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	w = w - $("#choice").width();
	if (w < 0) w = 0;
	$("#scene").width(w);
	
	$("#choice > img").height( $("#dialogue > img").height() );
	
	w = $("#background").width() / 2650;
	h = $("#background").height() / 1080;
	
	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0;
	
	var bg1 = $("#background > img:nth-child(1)");
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	
	var bg2 = $("#background > img:nth-child(2)");
//	bg2.width(bg2.prop("naturalWidth") * w);
//	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - 550);
	bg2.css("bottom", $("#dialogue").height() + 10);
	
	var bg3 = $("#background > img:nth-child(3)");
//	bg3.width(bg3.prop("naturalWidth") * w);
//	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x + 450);
	bg3.css("bottom", $("#dialogue").height() + 10);
	
	var bg4 = $("#background > img:nth-child(4)");
	bg4.css("left", x + 600);
	bg4.css("bottom", $("#dialogue").height() + 5);
	
	var bottom = 0;
	if(scene == 8) {
		bottom = canopic_two(); 
	} else { 
		bottom = canopic_one(); 
	}
	bg1.css("left", x - (bg1.width() / 2.0) + 10);
	bg1.css("bottom", bottom);
}

function object(select, index, arrIndex) {
	show_info(index);
	if(clicked.indexOf(arrIndex) != -1) {
		clicked.splice(clicked.indexOf(arrIndex), 1);
		$(select).removeClass("pikachu");
		$(select).off("click");
	}
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
	var ca_bottom = $("#dialogue").height() + 10;
	$("#ca1").css("bottom", ca_bottom);
	$("#ca1").css("left", x - 237);
		
	for(var i = 2; i < 5; i++) {
		$("#ca" + i).css("bottom", ca_bottom);
		$("#ca" + i).css("left", x - 312 + (125 * i) - 50);
	}
	return (ca_bottom + caH / 3 - 5);
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
	var ca_bottom_0 = $("#dialogue").height() + 10;
	var ca_bottom_1 = $("#ca1_1").height() / 3 + ca_bottom_0;
	$("#ca1_0").css("bottom", ca_bottom_0);
	$("#ca1_0").css("left", x - 227);
	$("#ca1_1").css("bottom", ca_bottom_1);
	$("#ca1_1").css("left", x - 237);
		
	for(var i = 2; i < 5; i++) {
		$("#ca" + i + "_0").css("bottom", ca_bottom_0);
		$("#ca" + i + "_0").css("left", x - 312 + (125 * i) - 40);
		$("#ca" + i + "_1").css("bottom", ca_bottom_1);
		$("#ca" + i + "_1").css("left", x - 312 + (125 * i) - 50);
	}
	return (ca_bottom_0 + caH / 3 - 5);
}