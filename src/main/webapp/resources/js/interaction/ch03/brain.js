function interaction() {
	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100;

	var arr = ["#bed", "#hum", "#brain", "#scroll", "#stick"]
	arr.forEach (function (item, idx) {
		resize(item);
		$(item).css("left", 0);
		$(item).css("bottom", $("#blur").height());
	});
	$("#bed").css("bottom", -30*h);
	$("#hum").css("bottom", $("#blur").height()-15*h-30*h);
	$("#brain").css("bottom", $("#blur").height()-15*h-30*h);
	$("#background").css("background", "#F9F2DB");
	$("#background").children().hide();
	
	centerX("#scroll");
	$("#scroll").css("top", 15*h);
	
	centerX("#stick");
	$("#stick").hide().fadeIn(1000);
	$("#stick").css("top", $("#scroll").height() / 2 + 15*h);
	$("#stick").addClass("select");
	$("#stick").on("click", function() {
		$("#brain").addClass("select");
		$("#stick").removeClass("select");
		$("#stick").css("transform", "rotate(45deg)");
		$("#stick").off("click");
		stick.isHeld = true;
		document.getElementById("brain").setAttribute("onclick", "clickBrain( this )");
		document.addEventListener('mousemove', followMouse);
	});
	$("#brain").on("mouseover", function() {
		$("#stick").fadeOut();
	}).on("mouseout", function() {
		$("#stick").fadeIn();
	});
}

var stick = document.getElementById("stick");
var idx = 0;
var brains = [
    "/resources/object/ch03/3_3_1.webp",
    "/resources/object/ch03/3_3_2.webp",
    "/resources/object/ch03/3_3_3.webp",
    "/resources/object/ch03/3_3_4.webp",
    "/resources/object/ch03/3_3_5.webp",
    "/resources/object/ch03/3_3_6.webp",
    "/resources/object/ch03/3_3_7.webp",
    "/resources/object/ch03/3_3_8.webp",
    "/resources/object/ch03/3_3_9.webp"
];

function followMouse( event ) {
	if(stick.isHeld) {
		const x = event.x - (stick.clientWidth / 2.0);
		const y = event.y - (stick.clientHeight / 2.0);
		stick.style.left = x + 'px';
		stick.style.top = y + 'px';
	}
}

function clickBrain( event ) {
	var lock = -1;
	if(lock == -1) {
		$("#scroll").on("load", function() {
			$("#scroll").animate({ left:-$("#scroll").width() }, 2000);
			$("#scroll").delay(1000).fadeOut(1000);
		});
		$("#scroll").attr("src", "/resources/object/ch03/paper_close.webp");
		lock = 0;
		$("#brain").removeClass("select");
		$("#brain").css({"bottom":-5*h});
		$("#hum").hide();
		resizeWH("#brain", 1270, 1092);
	}
	if(lock == 0) {
		$("#brain").on("load", function() {
			setTimeout(function() {	lock = 0; }, 350);
			if(idx >= 9) { $("form").submit(); }
		});
		$("#brain").attr("src", brains[idx]);
		idx += 1;
		lock = 1;
	}
}
