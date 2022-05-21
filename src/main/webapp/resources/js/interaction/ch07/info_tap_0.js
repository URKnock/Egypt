var Anubis = document.querySelector('#interact .character:nth-of-type(4)');

var obj = [];
obj[0] = document.querySelector('#interact .bg .bgObj:nth-of-type(5)');
obj[1] = document.querySelector('#interact .character:nth-of-type(4)');
obj[2] = document.querySelector('#interact .character:nth-of-type(5)');
obj[3] = document.querySelector('#interact .character:nth-of-type(6)');
obj[4] = document.querySelector('#interact .bg .bgObj:nth-of-type(6)');
obj[5] = document.querySelector('#interact .character:nth-of-type(7)');
obj[6] = document.querySelector('#interact .bg .bgObj:nth-of-type(4)');

obj[7] = document.querySelector('#interact .character:nth-of-type(3)');

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

webp[7] = "resources/webp/ch07/men.webp";

var png = [];
png[0] = "resources/webp/ch07/balance.png";
png[1] = "resources/webp/ch07/anubis.png";
png[2] = "resources/webp/ch07/horus.png";
png[3] = "resources/webp/ch07/thoth.png";
png[4] = "resources/webp/ch07/feather.png";
png[5] = "resources/webp/ch07/ammut.png";
png[6] = "resources/webp/ch07/45god.png";

png[7] = "resources/webp/ch07/men.png";

document.querySelector('.close').onclick = function() { hide_info(); info_close(); }

function pause(index) {
	for(var i = 0; i < 8; i++) {
		if(i != index) obj[i].src = png[i];
	}
	if(index == 0) obj[4].style.display = "none";
}
function play() {
	if(obj[4].style.display == "none") obj[4].style.display = "block";
	for(var i = 0; i < 8; i++) {
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
	
	var time;
	if(i == 0) time = 2300;
	else if(i == 1) time = 0;
	else if(i == 2) time = 1050;
	else if(i == 3) time = 3600;
	else if(i == 4) time = 1750;
	else if(i == 5) time = 2450;
	else if(i == 6) time = 2150;
	
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


document.querySelector('.guide').onclick = function() { $("form").submit(); };