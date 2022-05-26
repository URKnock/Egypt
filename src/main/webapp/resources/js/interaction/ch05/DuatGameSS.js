var first = new Audio('resources/bgm/ch05/5_4_1_0.mp3');
function interaction() {
	setSound();
	$("#background").children().hide();
	first.play();
			$("#menu img:nth-child(2)").on("click", function() {
		location.href="/chapter02";
	});
}