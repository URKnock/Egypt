var Anubis = document.querySelector('#interact .character:nth-of-type(7)');

function tap_info(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		show_info(i);
		
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