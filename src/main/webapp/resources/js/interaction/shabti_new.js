var help_idx = 0;
function setShabti() {
	$("#content_locked").hide();
	$("#shabti").css("display", "flex");
	$("#shabti_container").width(1502 * w * 1.1);
	$("#shabti_container").height(950 * h);
	$("#shabti_content").css({"width":1094*w, "margin":-45});
	
	$("#shabti input").on("mouseover", function() {
		$("#shabti input").removeClass("shabti_hover");
		$(this).addClass("shabti_hover");
	});
	$("#shabti input").on("mouseout", function() {
		var pwd = parseInt($("#shabti input[type=hidden]").val()) + 1;
		$("#shabti input").removeClass("shabti_hover");
		$("#shabti input:nth-child(" + pwd + ")").addClass("shabti_hover");
	});
	$("#shabti input").on("click", function() {
		var name = $(this).attr("name");
		$("#shabti input[type=hidden]").val(name);
		switch(name) {
			case "1":
				$("#content_locked").hide();
				$("#shabti_content > img").show();
				$("#shabti_content > img").attr("src", "/resources/UI/Shabti/content.png");
				$(".shabti_arrow img").hide();
				break;
			default:
				$("#content_locked").show();
				$("#shabti_content > img").hide();
				$(".shabti_arrow img").hide();
				break;
		}
	});
	$("#shabti input[type=button]:nth-child(3)").addClass("shabti_hover"); //마우스오버 고정?
	$("#shabti_content > img").attr("src", "/resources/UI/Shabti/content.png");
	$("#shabti_content > img").css({"width": 1094*w, "height": 813*h});
	$(".shabti_arrow img").hide();

	$("#shabti_left img").on("click", function() {
		var value = $("#shabti input[type=hidden]").val();
		if(value == 1) {
			switch(help_idx) {
				case 1:
					$("#shabti_content > img").attr("src", "/resources/UI/Help/20.png");
					$(".shabti_arrow img").hide();
					help_idx = 0;
					break;
				case 2:
					$("#shabti_content > img").attr("src", "/resources/UI/Help/21.png");
					$(".shabti_arrow img").show();
					help_idx = 1;
					break;
			}
		} else if(value == 4) {
			$("#shabti_content > img").attr("src", "/resources/UI/Help/25.png");
			$(".shabti_arrow img").hide();
			$("#shabti_right img").show();
		}
	});
	$("#shabti_right img").on("click", function() {
		var value = $("#shabti input[type=hidden]").val();
		if(value == 1) {
			switch(help_idx) {
				case 0:
					$("#shabti_content > img").attr("src", "/resources/UI/Help/21.png");
					help_idx = 1;
					break;
				case 1:
					$("#shabti_content > img").attr("src", "/resources/UI/Help/22.png");
					$(".shabti_arrow img").hide();
					help_idx = 2;
					break;
			}
		} else if(value == 4) {
			$("#shabti_content > img").attr("src", "/resources/UI/Help/26.png");
			$(".shabti_arrow img").hide();
			$("#shabti_left img").show();
		}
		
	});
	
	var containOffset = $("#shabti_container").offset();
	$("#shabti_close").css({
		left: containOffset.left + (1502 * w) + $("#shabti_close").width(),
		top: containOffset.top + 55
	});
	$("#shabti_close").on("click", function() {
		$("#shabti").fadeOut();
	});
}
