
var body = document.querySelector("#interact");
var knife = document.querySelector("#interact .knife");

var animal = document.querySelector("#interact #active");

function init_kill() {
	body.addEventListener('mousemove', follow_mouse);
	body.style.cursor = "none";
	
	animal.onclick = function() {
		animal.style.display = "none";
		animal = document.querySelector("#interact .animal:nth-of-type(6)");
		animal.style.display = "block";
		
		setTimeout(next, 1000);
	};
}

function follow_mouse( event ) {
	const x = event.clientX - (knife.clientWidth*0.95);
	const y = event.clientY - (knife.clientHeight*0.1);
		
	knife.style.left = x + 'px';
	knife.style.top = y + 'px';
}

function next() {
	$("form").submit();
}