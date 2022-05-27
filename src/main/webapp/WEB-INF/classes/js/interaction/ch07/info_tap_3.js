var Anubis = document.querySelector('#interact .character:nth-of-type(4)');

var obj = [];
obj[0] = document.querySelector('#interact .character:nth-of-type(5)');
obj[1] = document.querySelector('#interact .character:nth-of-type(6)');
obj[2] = document.querySelector('#interact .character:nth-of-type(7)');
obj[3] = document.querySelector('#interact .bgObj:nth-of-type(6)');
obj[4] = document.querySelector('#interact .bgObj:nth-of-type(7)');
obj[5] = document.querySelector('#horus');
obj[6] = document.querySelector('#men');

var motion = [];
motion[0] = "resources/webp/ch07/osiris_motion.webp";
motion[1] = "resources/webp/ch07/nephthys_motion.webp";
motion[2] = "resources/webp/ch07/isis_motion.webp";
motion[3] = "resources/webp/ch07/lotus_motion.webp";
motion[4] = "resources/webp/ch07/statue_motion.webp";

var webp = [];
webp[0] = "resources/webp/ch07/osiris.webp";
webp[1] = "resources/webp/ch07/nephthys.webp";
webp[2] = "resources/webp/ch07/isis.webp";
webp[3] = "resources/webp/ch07/lotus.webp";
webp[4] = "resources/webp/ch07/statue.webp";
webp[5] = "resources/webp/ch07/horus2.webp";
webp[6] = "resources/webp/ch07/men.webp";

var png = [];
png[0] = "resources/webp/ch07/osiris.png";
png[1] = "resources/webp/ch07/nephthys.png";
png[2] = "resources/webp/ch07/isis.png";
png[3] = "resources/webp/ch07/lotus.png";
png[4] = "resources/webp/ch07/statue.png";
png[5] = "resources/webp/ch07/horus2.png";
png[6] = "resources/webp/ch07/men.png";

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

	e.src = motion[i-7];
	
	const bg = document.querySelector(".info_back");
	bg.style.display = "block";
	bg.style.opacity = "0"
	
	var time;
	if(i-7 == 0) time = 3600;
	else if(i-7 == 1) time = 2400;
	else if(i-7 == 2) time = 2400;
	else if(i-7 == 3) time = 1950;
	else if(i-7 == 4) time = 1750;
	setTimeout(function() { show_info(i); }, time);
	
	
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