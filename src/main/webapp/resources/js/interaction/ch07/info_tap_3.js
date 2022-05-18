var Anubis = document.querySelector('#interact .character:nth-of-type(8)');

var obj = [];
obj[0] = document.querySelector('#interact .character:nth-of-type(9)');
obj[1] = document.querySelector('#interact .character:nth-of-type(10)');
obj[2] = document.querySelector('#interact .character:nth-of-type(11)');
obj[3] = document.querySelector('#interact .bgObj:nth-of-type(3)');

var motion = [];
motion[0] = "resources/webp/ch07/-.webp";
motion[1] = "resources/webp/ch07/-.webp";
motion[2] = "resources/webp/ch07/-.webp";
motion[3] = "resources/webp/ch07/-.webp";

var webp = [];
webp[0] = "resources/webp/ch07/-.webp";
webp[1] = "resources/webp/ch07/-.webp";
webp[2] = "resources/webp/ch07/-.webp";
webp[3] = "resources/webp/ch07/-.webp";

var png = [];
png[0] = "resources/webp/ch07/-.png";
png[1] = "resources/webp/ch07/-.png";
png[2] = "resources/webp/ch07/-.png";
png[3] = "resources/webp/ch07/-.png";

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
	if(true) {
		show_info(i);
	}
	else {
		pause();
	
		e.src = motion[i];
		
		const bg = document.querySelector(".info_back");
		bg.style.display = "block";
		bg.style.opacity = "0"
		
		setTimeout(function() { show_info(i); }, 3000);
	}
	
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