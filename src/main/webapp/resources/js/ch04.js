var w, h, x, y;

function init() {
	$("#dialogue").click(function() {
		$("form").submit();
	});
};

$(document).ready(function() {
	setDialogueSize();
	
	if($("#dialogue_img").width() == 0) {
		location.reload(true);
	}
	
	$(window).resize(function() {
		location.reload(true);
	});
});