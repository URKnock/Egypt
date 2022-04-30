var lists = new Array();
var loaded = false;

function init() {
	var chapter = parseInt($("input[type=hidden]").val());
	if(chapter < 10) {
		chapter = "0" + chapter;
	}

	var w = $("div").width() / 1920;
	var h = $("div").height() / 1080;

	$("#character").width($("#character").width() * w);
	$("#character").height($("#character").height() * h);
	
	if(chapter == 3) {
		$("#character").css({"left":820*w, "top":120*h});
	} else if(chapter == 4) {
		$("#character").css({"left":970*w, "top":90*h});
	} else if(chapter == 5) {
		$("#character").css({"left":680*w, "top":170*h});
	} else if(chapter == 6) {
		$("#character").css({"left":860*w, "top":210*h});
	} else if(chapter == 7) {
		$("#character").css({"left":990*w, "top":120*h});
	}
	
	preload(lists);
	$("*").on("click", function() {
		$("div").fadeOut();
		location.replace("/chapter" + chapter);
	});
}

function preload(arrayOfImages) {
	var preImg = $('body > img');
    $(arrayOfImages).each(function(index, value){
       	preImg.attr("src", value);
    });
    preImg.attr("src", "");
}