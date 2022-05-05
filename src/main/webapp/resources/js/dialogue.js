function setDialogueSize() {
	w = $("body").width() / 1920;
	h = $("body").height() / 1080;
	x = $("body").width() / 2.0;

	$("#dialogue").height($("#dialogue").height() * h);
	$("#dialogue_bg").height($("#dialogue").height());

	var sw = $("#dialogue").width() - $("#dialogue > img:first-of-type").width();
	sw = sw - $("#choice").width();
	if (sw < 0) sw = 0;
	$("#scene").width(sw);
	
	resize("#dialogue_img");
	resize("#choice > img");

	var temp = "auto " + (90*w) + "px auto " + (50*w) + "px";
	$("#dialogue_img").css("margin", temp);
	
	temp = 55*h + "px " + 20*w + "px " + 10*h + "px 0";
	$("#title > div:nth-child(1)").css("margin", temp);
	
	temp = 54*h + "px";
	$("#title > div:nth-child(2)").css("margin-top", temp);
	
	temp = 100*h + "px " + 110*w + "px " + 80*h + "px " + 50*w + "px";
	$("#choice > img").css("margin", temp);

	$("#blur").height(260 * h);
	$("#blur").css("left", "0");
	$("#blur").css("bottom", "0");
}

function resize(element) {
	$(element).width($(element).prop("naturalWidth") * w);
	$(element).height($(element).prop("naturalHeight") * h);
}