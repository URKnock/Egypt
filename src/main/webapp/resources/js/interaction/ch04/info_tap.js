var Anubis = document.querySelector('#anubis');

var obj = [];
obj[0] = document.querySelector('#interact .pontiff:nth-of-type(7)');
obj[1] = document.querySelector('#interact .pontiff:nth-of-type(8)');
obj[2] = document.querySelector('#interact .pontiff:nth-of-type(9)');
obj[3] = document.querySelector('#anubis');

var motion = [];
motion[0] = "resources/webp/ch04/servant_1_info.webp";
motion[1] = "resources/webp/ch04/servant_2_info.webp";
motion[2] = "resources/webp/ch04/servant_3_info.webp";

var webp = [];
webp[0] = "resources/webp/ch04/servant_1.webp";
webp[1] = "resources/webp/ch04/servant_2.webp";
webp[2] = "resources/webp/ch04/servant_3.webp";
webp[3] = "resources/webp/ch04/anubis_2.webp";

var png = [];
png[0] = "resources/character/ch04/4_1.png";
png[1] = "resources/character/ch04/4_2.png";
png[2] = "resources/character/ch04/4_3.png";
png[3] = "resources/character/ch04/4_5.png";

document.querySelector('.close').onclick = function() { hide_info(); info_close(); }

function pause(index) {
	for(var i = 0; i < 4; i++) {
		if(i != index) obj[i].src = png[i];
	}
}
function play() {
	for(var i = 0; i < 4; i++) {
		obj[i].src = webp[i];
	}
}

function info_close() {
	play();
}

function tap_info(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		
		info_total--;
		pause();
		if(i < 3) {
			e.src = motion[i];
			
			const bg = document.querySelector(".info_back");
			bg.style.display = "block";
			bg.style.opacity = "0";
			
			if(i == 0) 
				setTimeout(function() {
					show_info(i);
				}, 3600);
			else
				setTimeout(function() {
					show_info(i);
				}, 2400);
		}
		else
			show_info(i);
		
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
	
			Anubis.id = 'active';
			Anubis.style.filter ="drop-shadow(0px 0px 1.5vh red)";
			Anubis.onclick = function() { $("form").submit(); };
		}
	}
}