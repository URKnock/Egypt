var Anubis = document.querySelector('#anubis');

function tap_info(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		show_info(chapter, i);
		
		info_total--;
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
	
			Anubis.id = 'active';
			Anubis.onclick = function() { $("form").submit(); };
		}
	}
}