
var info_total = 6;

var infoObj = [];
infoObj[0] = document.querySelector('#interact .object:nth-of-type(6)');
infoObj[1] = document.querySelector('#interact .object:nth-of-type(7)');
infoObj[2] = document.querySelector('#interact .object:nth-of-type(8)');
infoObj[3] = document.querySelector('#interact .object:nth-of-type(11)');
infoObj[4] = document.querySelector('#interact .object:nth-of-type(12)');
infoObj[5] = document.querySelector('#interact .object:nth-of-type(13)');

var Anubis = document.querySelector('#interact .object:nth-of-type(10)');

function info_set() {
	for(var i = 0; i < info_total; i++) {
		infoObj[i].id = 'active';
		infoObj[i].setAttribute('onclick', 'tap_info(this, '+ i +')');
	}
	
	var guide = document.querySelector('#interact .guide');
	guide.style.display = 'block';
}

function tap_info(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		show_info(i);
		
		info_total--;
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
	
			Anubis.id = 'active';
			Anubis.onclick = function() { $("form").submit(); };
		}
	}
}