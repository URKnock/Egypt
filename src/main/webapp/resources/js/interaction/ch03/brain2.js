function interaction() {
	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100;
	
	resizeWH("#brain", 1714, 678);
	$("#brain").css("left", 0);
	$("#brain").css("bottom", $("#blur").height()-15*h);
	$("#brain").on("click", clickBrain);
	$("#brain").addClass("pikachu");
	$("#brain").addClass("select");
	
	resize("#bed");
	$("#bed").css("bottom", 0);
	
	$("#background").css("background", "#F9F2DB");
	$("#background").children().hide();
}

var idx = 0;
var brains = [
    "/resources/object/ch03/B6_1.webp",
    "/resources/object/ch03/B6_2.webp",
    "/resources/object/ch03/B7.webp"
];

function clickBrain( event ) {
	var lock = 0;
	if(lock == 0) {
		$("#brain").removeClass("pikachu");
		$("#brain").removeClass("select");
		$("#brain").on("load", function() {
			setTimeout(function() { lock = 0 }, 350);
			if(idx >= 3) {
				$("#bed").hide();
				setTimeout(function() { $("form").submit(); }, 5000);
			}
		});
		$("#brain").attr("src", brains[idx]);
		idx += 1;
		lock = 1;
	}
}