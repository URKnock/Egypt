function init(scene) {
	alert(scene);
	if(scene == 1) {
		
	}
	else {
		$("#dialogue").click(function() {
			$("form").submit();
		});
	}
};