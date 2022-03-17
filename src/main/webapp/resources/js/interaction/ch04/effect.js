
var motion_total = 2;

var effect = [];
effect[0] = document.querySelector('#interact .effect1');
effect[1] = document.querySelector('#interact .effect2');
effect[2] = document.querySelector('#interact .effect3');
effect[3] = document.querySelector('#interact .effect4');

function tap_motion(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		e.style.zIndex = 2;
		
		if(i == 0) {
			effect[1].style.animationPlayState = 'running';
			effect[2].style.animationPlayState = 'running';
		}
		else if(i == 1) {
			effect[0].style.animationPlayState = 'running';
			effect[3].style.animationPlayState = 'running';
		}
		motion_total--;
		
		if(motion_total <= 0) {
			setTimeout(next, 1500);
		}
	}
}

function next() {
	$("form").submit();
}