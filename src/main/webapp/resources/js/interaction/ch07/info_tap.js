var Anubis = document.querySelector('#interact .character:nth-of-type(4)');

var obj = [];
obj[0] = document.querySelector('#interact .bg .bgObj:nth-of-type(3)');
obj[1] = document.querySelector('#interact .character:nth-of-type(4)');
obj[2] = document.querySelector('#interact .character:nth-of-type(5)');
obj[3] = document.querySelector('#interact .character:nth-of-type(6)');
obj[4] = document.querySelector('#interact .bg .bgObj:nth-of-type(4)');
obj[5] = document.querySelector('#interact .character:nth-of-type(7)');
obj[6] = document.querySelector('#interact .bg .bgObj:nth-of-type(2)');

var motion = [];
motion[0] = "resources/webp/ch07/balance_motion.webp";
motion[1] = "resources/webp/ch07/anubis_motion.webp";
motion[2] = "resources/webp/ch07/horus_motion.webp";
motion[3] = "resources/webp/ch07/thoth_motion.webp";
motion[4] = "resources/webp/ch07/feather_motion.webp";
motion[5] = "resources/webp/ch07/ammut_motion.webp";
motion[6] = "resources/webp/ch07/45god_motion.webp";

var webp = [];
webp[0] = "resources/webp/ch07/balance.webp";
webp[1] = "resources/webp/ch07/anubis.webp";
webp[2] = "resources/webp/ch07/horus.webp";
webp[3] = "resources/webp/ch07/thoth.webp";
webp[4] = "resources/webp/ch07/feather.webp";
webp[5] = "resources/webp/ch07/ammut.webp";
webp[6] = "resources/webp/ch07/45god.webp";

var png = [];
png[0] = "resources/background/ch07/7_2_4.png";
png[1] = "resources/character/ch07/6_3.png";
png[2] = "resources/character/ch07/6_18.png";
png[3] = "resources/character/ch07/6_5.png";
png[4] = "resources/background/ch07/깃털.png";
png[5] = "resources/character/ch07/6_6.png";
png[6] = "resources/background/ch07/7_0_5.png";

document.querySelector('.close').onclick = function() { hide_info(); info_close(); }

function pause(index) {
	for(var i = 0; i < 7; i++) {
		if(i != index) obj[i].src = png[i];
	}
}
function play() {
	for(var i = 0; i < 7; i++) {
		obj[i].src = webp[i];
	}
}
function info_close() {
	play();
}

function tap_info(e, i) {
	var visited;
	if(e.id == 'active') visited = false;
	else visited = true;
	
	e.id = 'visited';
	pause();
	
	e.src = motion[i];
	
	const bg = document.querySelector(".info_back");
	bg.style.display = "block";
	bg.style.opacity = "0"
	
	setTimeout(function() { show_info(i); }, 3000);
	
	if(visited == false) {
		info_total--;
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
			
			Anubis.id = 'active';
			Anubis.style.filter ="drop-shadow(0px 0px 0.5vw red)";
			Anubis.onclick = function() { $("form").submit(); };
		}
	}
}

if(info_total <= 0) { // 모든 정보 확인함.
	var guide = document.querySelector('.guide');
	guide.style.display = 'none';

	Anubis.id = 'active';
	Anubis.style.filter ="drop-shadow(0px 0px 1.5vh red)";
	Anubis.onclick = function() { $("form").submit(); };
}


document.querySelector('.guide').onclick = function() { $("form").submit(); };