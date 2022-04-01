
var motion_total = 2;

var effect = [];
effect[0] = document.querySelector('#interact .effect1');
effect[1] = document.querySelector('#interact .effect2');
effect[2] = document.querySelector('#interact .effect3');

var webp = [];
webp[0] = "resources/webp/ch04/4_1_3.webp";
webp[1] = "resources/webp/ch04/4_6_3.webp";

function tap_motion(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		e.style.zIndex = 2;
		e.src = webp[i];
		
		if(i == 0) {
			effect[1].style.animationPlayState = 'running';
			effect[2].style.animationPlayState = 'running';
		}
		else if(i == 1) {
			effect[0].style.animationPlayState = 'running';
		}
		motion_total--;
		
		if(motion_total <= 0) {
			setTimeout(next, 3000);
		}
	}
}

function next() {
	$("form").submit();
}