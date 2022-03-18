
function init() {
	$("#dialogue").click(function() {
		$("form").submit();
	});
};
var range = 0.1;
window.onresize = function() {
	resize();
}
var warning = document.querySelector("#warning");
function resize() {
	if(window.innerHeight/window.innerWidth > 0.5625 + range+0.05) {
		//window.resizeBy(window.innerHeight*1.7777 - window.innerWidth, 0);
		warning.style.display = "flex";
	}
	else if (window.innerHeight/window.innerWidth < 0.5625 - range) {
		//window.resizeBy(0, window.innerWidth*0.5625 - window.innerHeight);
		warning.style.display = "flex";
	}
	else
		warning.style.display = "none";
}
resize();