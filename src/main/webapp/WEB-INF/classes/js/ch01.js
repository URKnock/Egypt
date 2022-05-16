function init() {
	$("video").height("100%");
	
	$("video").get(0).play();
	$("video").on("ended", function() {
  		$(location).attr("href", "../../chapter02");
	});
}