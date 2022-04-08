function init() {
	$("#la").addClass("pikachu");
	$("#la").addClass("select");
	$("#earth").addClass("pikachu");
	$("#earth").addClass("select");
	
	$("#la").on("click", function() {
				objectSubmit("#la");
			});
	$("#earth").on("click", function() {
				objectSubmit("#earth");
			});
	function objectSubmit(select) {
	$(select).removeClass("select");
	$("form").submit();
}
	}