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
	bg2.width($("#background").width());
	bg2.height($("#background").height());
	
	var bg4 = $("#background > img:nth-child(3)");
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * w);
	bg4.css("left", x - 550);
	bg4.css("bottom", $("#dialogue").height() + 15);
	
	var bg5 = $("#background > img:nth-child(4)");
	bg5.width(bg5.prop("naturalWidth") * w);
	bg5.height(bg5.prop("naturalHeight") * w);
	bg5.css("left", x + 450);
	bg5.css("bottom", $("#dialogue").height() + 15);
	
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
	var ca_bottom_0 = $("#dialogue").height() + 15;
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
	bg1.css("bottom", $("#dialogue").height() + ($("#ca1_0").height() / 3 * 2));
	
	$("#dialogue").click(function() {
		$("form").submit();
	});
	
	var scene = $("input[name='scene']").val();
	if(scene == 99) {
		$("#dialogue").remove(click);
		$("#test").click(function() {
			$("form").submit();
		});	
	}
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}