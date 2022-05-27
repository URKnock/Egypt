
var body = document.querySelector("#interact");
var knife = document.querySelector("#interact .knife");

var animal = document.querySelector("#interact #active");

var effectName;

function init_kill() {
	body.addEventListener('mousemove', follow_mouse);
	body.style.cursor = "none";
	
	animal.onclick = function() {
		effSoundPlay( effectName );
		animal.style.display = "none";
		animal = document.querySelector("#interact .animal:nth-of-type(6)");
		animal.style.display = "block";
		
		setTimeout(next, 1000);
	};
}

function follow_mouse( event ) {
	const x = event.clientX - (knife.clientWidth*0.1);
	const y = event.clientY - (knife.clientHeight*1.1);
		
	knife.style.left = x + 'px';
	knife.style.top = y + 'px';
}

function next() {
	$("form").submit();
}

var anubis = document.querySelector('#anubis');
$("#voice").bind("ended", function() {
	anubis.src =  "resources/webp/ch04/anubis_1.webp";
});