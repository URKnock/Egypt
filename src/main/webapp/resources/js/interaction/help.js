var help_idx = 0;
function setHelp() {
	$("#help").css("display", "flex");
	$("#help_container").width(1502 * w);
	$("#help_container").height(950 * h);
	$("#help_content").css({"width":870*w, "margin":25});
	
	$("#help input").on("mouseover", function() {
		$("#help input").removeClass("help_hover");
		$(this).addClass("help_hover");
	});
	$("#help input").on("mouseout", function() {
		var pwd = parseInt($("#help input[type=hidden]").val()) + 1;
		$("#help input").removeClass("help_hover");
		$("#help input:nth-child(" + pwd + ")").addClass("help_hover");
	});
	$("#help input").on("click", function() {
		var name = $(this).attr("name");
		$("#help input[type=hidden]").val(name);
		switch(name) {
			case "1":
				$("#help_content img").attr("src", "/resources/UI/Help/20.png");
				$(".help_arrow img").hide();
				$(".help_arrow:last-child img").show();
				break;
			case "2":
				$("#help_content img").attr("src", "/resources/UI/Help/23.png");
				$(".help_arrow img").hide();
				break;
			case "3":
				$("#help_content img").attr("src", "/resources/UI/Help/24.png");
				$(".help_arrow img").hide();
				break;
			case "4":
				$("#help_content img").attr("src", "/resources/UI/Help/25.png");
				$(".help_arrow img").hide();
				$(".help_arrow:last-child img").show();
				break;
		}
	});
	$("#help input[type=button]:nth-child(2)").addClass("help_hover");
	$("#help_content img").attr("src", "/resources/UI/Help/20.png");
	$("#help_content img").css({"width": 928*w, "height": 751*h});
	$(".help_arrow img").hide();
	$("#help_right img").show();

	$("#help_left img").on("click", function() {
		var value = $("#help input[type=hidden]").val();
		if(value == 1) {
			switch(help_idx) {
				case 1:
					$("#help_content img").attr("src", "/resources/UI/Help/20.png");
					$(".help_arrow img").hide();
					$("#help_right img").show();
					help_idx = 0;
					break;
				case 2:
					$("#help_content img").attr("src", "/resources/UI/Help/21.png");
					$(".help_arrow img").show();
					help_idx = 1;
					break;
			}
		} else if(value == 4) {
			$("#help_content img").attr("src", "/resources/UI/Help/25.png");
			$(".help_arrow img").hide();
			$("#help_right img").show();
		}
	});
	$("#help_right img").on("click", function() {
		var value = $("#help input[type=hidden]").val();
		if(value == 1) {
			switch(help_idx) {
				case 0:
					$("#help_content img").attr("src", "/resources/UI/Help/21.png");
					$(".help_arrow img").show();
					help_idx = 1;
					break;
				case 1:
					$("#help_content img").attr("src", "/resources/UI/Help/22.png");
					$(".help_arrow img").hide();
					$("#help_left img").show();
					help_idx = 2;
					break;
			}
		} else if(value == 4) {
			$("#help_content img").attr("src", "/resources/UI/Help/26.png");
			$(".help_arrow img").hide();
			$("#help_left img").show();
		}
		
	});
	
	var containOffset = $("#help_container").offset();
	$("#help_close").css({
		left: containOffset.left + (1502 * w) - $("#help_close").width() - 50,
		top: containOffset.top + 30
	});
	$("#help_close").on("click", function() {
		$("#help").fadeOut();
	});
}
