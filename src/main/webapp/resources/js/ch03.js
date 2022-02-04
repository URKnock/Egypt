var clicked = [1, 2, 3, 4, 5];

$(document).ready(function(){
	var scene = $("input[name='scene']").val();
	var index = $("input[name='index']").val();
	switch(scene) {
		case '1':
			if(index == 0) {
				$("#background > img:nth-child(2)").addClass("pikachu");
				$("#background > img:nth-child(3)").addClass("pikachu");
				for(var i = 1; i < 5; i++) {
					$("#ca" + i + "_0").addClass("pikachu");
					$("#ca" + i + "_1").addClass("pikachu");
				}
				$("#ca1_0").on("click", function() { canopic(4, 1) });
				$("#ca1_1").on("click", function() { canopic(4, 1) });
				$("#ca2_0").on("click", function() { canopic(5, 2) });
				$("#ca2_1").on("click", function() { canopic(5, 2) });
				$("#ca3_0").on("click", function() { canopic(1, 3) });
				$("#ca3_1").on("click", function() { canopic(1, 3) });
				$("#ca4_0").on("click", function() { canopic(3, 4) });
				$("#ca4_1").on("click", function() { canopic(3, 4) });
			} else {
				$("#dialogue").click(function() {
					$("form").submit();
				});
			}
			break;
		default:
			$("#dialogue").click(function() {
				$("form").submit();
			});	
			break;
	}
});

function init() {
	var h = $("#background").height() - $("#dialogue").height();
	if (h < 0) h = 0;
	$("#background").height(h);
		
	var w = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	w = w - $("#choice").width();
	if (w < 0) w = 0;
	$("#scene").width(w);
	
	$("#choice > img").height( $("#dialogue > img").height() );
	
	w = $("#background").width() / 2650;
	h = $("#background").height() / 1080;
	
	var x = $("#background").width() / 2.0;
	var y = $("#background").height() / 2.0;
	
	var bg1 = $("#background > img:nth-child(1)");
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * w);
	
	var bg2 = $("#background > img:nth-child(2)");
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * w);
	bg2.css("left", x - 550);
	bg2.css("bottom", $("#dialogue").height());
	
	var bg3 = $("#background > img:nth-child(3)");
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * w);
	bg3.css("left", x + 450);
	bg3.css("bottom", $("#dialogue").height());
	
	for(var i = 1; i < 5; i++) {
		var caW = $("#ca" + i + "_1").width() * w;
		var caH = $("#ca" + i + "_1").height() * w;
		$("#ca" + i + "_1").width(caW);
		$("#ca" + i + "_1").height(caH);
		
		caW = $("#ca" + i + "_0").width() * w;
		caH = $("#ca" + i + "_0").height() * w;	
		$("#ca" + i + "_0").width(caW);
		$("#ca" + i + "_0").height(caH);
	}
	var ca_bottom_0 = $("#dialogue").height() + 5;
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
	bg1.css("left", x - (bg1.width() / 2.0) + 10);
	bg1.css("bottom", ca_bottom_0 + ($("#ca1_0").height() / 3 * 2));
}

function canopic(index, arrIndex) {
	show_info(index);
	if(clicked.indexOf(arrIndex) != -1) {
		clicked.splice(clicked.indexOf(arrIndex), 1);
		$("#ca" + arrIndex + "_1").removeClass("pikachu");
		$("#ca" + arrIndex + "_0").removeClass("pikachu");
		$("#ca" + arrIndex + "_1").off("click");
		$("#ca" + arrIndex + "_0").off("click");
	}
	if(clicked.length == 0) {
	}
	
	var str = ""
	clicked.forEach(function(e, i) {
		str += e + " ";
	});
	console.log(str);
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}