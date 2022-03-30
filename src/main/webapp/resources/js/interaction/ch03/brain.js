function interaction() {
	x = $("#background").width() / 2.0;
	y = $("#background").height() / 2.0 + 100;

	var arr = ["#bed", "#hum", "#brain"]
	arr.forEach (function (item, idx) {
		resize(item);
		$(item).css("left", 0);
		$(item).css("bottom", $("#dialogue").height());
	});
	$("#brain").addClass("select");
	$("#background").css("background", "#fff8e7");
	$("#background").children().hide();
	
	var idx = 0;
	var brains = [
	    "/resources/object/ch03/B2.webp",
	    "/resources/object/ch03/B3_1.webp",
	    "/resources/object/ch03/B3_2.webp",
	    "/resources/object/ch03/B4_1.webp",
	    "/resources/object/ch03/B4_2.webp",
	    "/resources/object/ch03/B5_1.webp",
	    "/resources/object/ch03/B5_2.webp",
	    "/resources/object/ch03/B5_3.webp",
	    "/resources/object/ch03/B5_4.webp",
	    "/resources/object/ch03/B6_1.webp",
	    "/resources/object/ch03/B6_2.webp",
	    "/resources/object/ch03/B7.webp"
	];
	preload(brains);
	
	var lock = 0;
	$("#brain").on("click", function() {
		if(lock == 0) {
			$("#brain").on("load", function() {
				console.log(idx + ", " + brains[idx]);
				setTimeout(function() { lock = 0 }, 350);
				if(idx == 10) {
					$("#hum").hide();
					$("#brain").removeClass("select");
				} else if(idx == 12) {
					$("#bed").hide();
					setTimeout(function() { $("form").submit(); }, 5000);
				}
			});
			$("#brain").attr("src", brains[idx]);
			idx += 1;
			lock = 1;
		}
	});
}