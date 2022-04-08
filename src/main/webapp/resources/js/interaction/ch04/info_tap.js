var Anubis = document.querySelector('#anubis');

var pontiff = [];
var webp = [];
webp[0] = "resources/webp/ch04/servant_1_info.webp";
webp[1] = "resources/webp/ch04/servant_2_info.webp";
webp[2] = "resources/webp/ch04/servant_3_info.webp";

webp[3] = "resources/webp/ch04/servant_1.webp";
webp[4] = "resources/webp/ch04/servant_2.webp";
webp[5] = "resources/webp/ch04/servant_3.webp";
var index;

document.querySelector('.close').onclick = function() { hide_info(); info_close(); }

function tap_info(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		
		show_info(i);
		info_total--;
		index = i; pontiff[index] = e;
		
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
	
			Anubis.id = 'active';
			Anubis.style.filter ="drop-shadow(0px 0px 0.5vw red)";
			Anubis.onclick = function() { $("form").submit(); };
		}
	}
}

function info_close() {
	if(index < 3) {
		pontiff[index].src = webp[index];
		var i = index;
		if(i == 0) 
			setTimeout(function() {
			  pontiff[i].src = webp[i+3];
			}, 3600);
		else
			setTimeout(function() {
			  pontiff[i].src = webp[i+3];
			}, 2400);
	}
}