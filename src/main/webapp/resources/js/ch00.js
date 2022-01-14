function init() {
	var num = 0;
	var flag = false;
	var blink = setInterval(function() {
		$("img").fadeOut(3000).fadeIn(3000);
		if(flag) {
			clearInterval(blink);
		}
	}, 2000);
	$("img").mouseover(function() {
		flag = true;
		clearInterval(blink);
	});
	$("img").click(function() {
		num = num + 1;
		switch(num) {
			case 0:
				flag = true;
				$("img").fadeTo(500, 0, function() {
					$("img").attr("src", "../background/ch00/0_3.png");
					$("img").fadeTo(2500, 1, function(){});
				});
				break;
			case 1:
				$(location).attr("href", "../../chapter01");
				break;
		}
	});
}