
var motion_total = 2;

var motionObj = [];
motionObj[0] = document.querySelector('#interact .motion1');
motionObj[1] = document.querySelector('#interact .motion2');

var effect = [];
effect[0] = document.querySelector('#interact .effect1');
effect[1] = document.querySelector('#interact .effect2');
effect[2] = document.querySelector('#interact .effect3');

function motion_set() {
	for(var i = 0; i < motion_total; i++) {
		motionObj[i].id = 'active';
		motionObj[i].setAttribute('onclick', 'tap_motion(this, '+ i +')');
	}
}

function tap_motion(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		
		if(i == 0) {
			effect[1].style.animationPlayState = 'running';
			effect[2].style.animationPlayState = 'running';
		}
		else if(i == 1) {
			effect[0].style.animationPlayState = 'running';
			effect[2].style.animationPlayState = 'running';
		}
		motion_total--;
		
		if(motion_total <= 0) {
			var dialogue = document.querySelector('#dialogue');
			dialogue.onclick = function() { $("form").submit(); };
		}
	}
}