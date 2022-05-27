
var motion_total = 2;

var effects = [];
effects[0] = document.querySelector('#interact .effect1');
effects[1] = document.querySelector('#interact .effect2');
effects[2] = document.querySelector('#interact .effect3');

var webp = [];
webp[0] = "resources/webp/ch04/servant_1_motion.webp";
webp[1] = "resources/webp/ch04/servant_2_motion.webp";
webp[2] = "resources/webp/ch04/servant_1.webp";
webp[3] = "resources/webp/ch04/servant_2.webp";

function tap_motion(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		e.style.zIndex = 3;
		e.src = webp[i];

		setTimeout(function() {
		  e.src = webp[i+2];
		}, 4800);

		if(i == 0) {
			setTimeout(function() {
				effects[1].style.display = 'block';
				setTimeout(function() {
					effSoundPlay( "incense" );
					effects[2].style.animationPlayState = 'running';
				}, 600);
			}, 1000);
			
			
		}
		else if(i == 1) {
			setTimeout(function() {
				effSoundPlay( "soda_stone_powder" );
				effects[0].style.display = 'block';
			}, 1300);
		}
		motion_total--;
		
		if(motion_total <= 0) {
			setTimeout(next, 5000);
		}
	}
}

function next() {
	$("form").submit();
}