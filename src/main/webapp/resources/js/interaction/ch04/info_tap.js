var Anubis = document.querySelector('#anubis');

var webp = [];
webp[0] = "resources/webp/ch04/4_1_2.webp";
webp[1] = "resources/webp/ch04/4_6_2.webp";
webp[2] = "resources/webp/ch04/4_7_2.webp";

function tap_info(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		
		show_info(chapter, i);
		if(i < 3) {
			document.querySelector('.info_back').style.opacity = "0";
			document.querySelector('#window').style.opacity = "0";

			e.src = webp[i];
			setTimeout(next, 3000);
			return;
		}
		
		next();
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
	
			Anubis.id = 'active';
			Anubis.onclick = function() { $("form").submit(); };
		}
	}
	function next() {
		document.querySelector('.info_back').style.opacity = "1";
		document.querySelector('#window').style.opacity = "1";
		info_total--;
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
	
			Anubis.id = 'active';
			Anubis.onclick = function() { $("form").submit(); };
		}
	}
}

