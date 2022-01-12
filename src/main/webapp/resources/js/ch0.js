function init() {
	var blink = setInterval(function() {
		$("img").fadeOut(3000).fadeIn(3000);
	}, 2000);
	$("img").mouseover(function() {
		clearInterval(blink);
	});
	$("img").click(function() {
		clearInterval(blink);
		$("img").fadeTo(500, 0, function() {
			$("img").attr("src", "../resources/background/0_main/0_3.png");
			$("img").fadeTo(2500, 1, function(){});
		});
	});
}