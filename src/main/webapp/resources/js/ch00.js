function init() {
	$("video").hide();
	$("#logo").hide().fadeIn(2000);
	$("div").hide().fadeIn(2000);
	$("div img:nth-child(1)").hide().fadeIn(2000);
	
	var width01 = $("div img:nth-child(1)").width();
	function wind() {
		$("div img:nth-child(1)").animate({
			left: -width01
		}, 40000, function() { 
			$(this).css("left", width01);
			wind();
		});
	};
	wind();
	
	var images = ["#logo", "div img:nth-child(2)"];
	for(var i = 0; i < 2; i++) {
		var image = $(images[i]);
		image.css("left", $("div").width() / 2 - image.width() / 2);
	}
	
	var clicked = 0;
	$("div img:nth-child(2)").addClass('fadeEffect');
	$(document).click(function() {
		$("div img:nth-child(2)").removeClass('fadeEffect')
		$("div").fadeOut(1000);
		$("#logo").fadeOut(1000);
		$("video").fadeIn(1000);
		setTimeout(function() {
			$("video").get(0).play();
			setTimeout(function() {
				$(location).attr("href", "/chapter01");
			}, 2540);
		}, 1000);
	});
	preload([
		"../resources/background/ch00/0_1.png",
		"../resources/background/ch00/0_2.png",
		"../resources/background/ch00/0_3.png",
		"../resources/background/ch00/0_4.png",
		"../resources/background/ch00/0_5.png"
	]);
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(index, value){
       	$('#logo').attr("src", value);
    });
    $('#logo').attr("src", "/resources/background/ch00/0_4.png");
}