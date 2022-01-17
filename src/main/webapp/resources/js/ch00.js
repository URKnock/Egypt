function init() {
	var num = 0;
	$("img").addClass('fadeEffect');
	$("img").click(function() {
		num = num + 1;
		switch(num) {
			case 1:	
				$("img").removeClass('fadeEffect');
				$("img").fadeTo(500, 0, function() {
					$("img").attr("src", "../../resources/background/ch00/0_3.png");
					$("img").fadeTo(2500, 1, function(){});
				});
				break;
			case 2:
				$(location).attr("href", "../../chapter01");
				break;
		}
	});
}