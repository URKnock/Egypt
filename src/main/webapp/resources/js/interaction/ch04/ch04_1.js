
var info_total = 6;
var motion_total = 3;

var infoObj = [];
infoObj[0] = document.querySelector('#wrap .object:nth-of-type(6)');
infoObj[1] = document.querySelector('#wrap .object:nth-of-type(7)');
infoObj[2] = document.querySelector('#wrap .object:nth-of-type(8)');
infoObj[3] = document.querySelector('#wrap .object:nth-of-type(11)');
infoObj[4] = document.querySelector('#wrap .object:nth-of-type(12)');
infoObj[5] = document.querySelector('#wrap .object:nth-of-type(13)');

var motionObj = [];
motionObj[0] = document.querySelector('#wrap .object:nth-of-type(6)');
motionObj[1] = document.querySelector('#wrap .object:nth-of-type(7)');
motionObj[2] = document.querySelector('#wrap .object:nth-of-type(8)');

var Anubis = document.querySelector('#wrap .object:nth-of-type(10)');

function info_set() {
	for(var i = 0; i < info_total; i++) {
		infoObj[i].id = 'active';
		infoObj[i].setAttribute('onclick', 'tap_info(this, '+ i +')');
	}
	
	var guide = document.querySelector('.guide');
	guide.style.display = 'block';
}
info_set();

function tap_info(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		show_info(i + 12);
		
		info_total--;
		if(info_total <= 0) { // 모든 정보 확인함.
			var guide = document.querySelector('.guide');
			guide.style.display = 'none';
	
			Anubis.id = 'active';
			Anubis.onclick = function() {
					if(Anubis.id == 'active') {
						Anubis.id = 'inactive';
						motion_set();
					}
				};
		}
	}
}

function motion_set() {
	for(var i = 0; i < motion_total; i++) {
		motionObj[i].id = 'active';
		motionObj[i].setAttribute('onClick', 'tap_motion(this,'+i+')');
	}
	
	var guide = document.querySelector('.guide');
	guide.style.display = 'none';
}

function tap_motion(e, i) {
	if(e.id == 'active') {
		e.id = 'inactive';
		
		alert(i+"번째 신관 모션!");
		
		motion_total--;
		if(motion_total <= 0) { // 모든 모션 확인함.
			alert("chapter4_1 끝!");
		}
	}
}
