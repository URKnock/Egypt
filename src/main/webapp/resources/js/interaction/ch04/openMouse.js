var body = document.querySelector("#interact");
var pese = document.querySelector("#interact .tool");
var obj = document.querySelector("#interact .object");

var Anubis = document.querySelector('#anubis');
let spotCount = 1;
pese.isHeld = false;

var circle = [];

var flag = 0;

for(var i = 1; i <= 3; i++) {
	circle[i] = document.querySelector('#interact .circle:nth-of-type('+(4-i)+')');
	circle[i].style.cursor = "none";
	circle[i].style.display = "none";
	
	circle[i].setAttribute('onclick', 'tap_circle( this )');
}

function init_pese() {
	obj.id = "active"
	
	obj.style.display = "block";
	pese.style.display = "none";
	
	body.style.cursor = "auto";
	
	obj.onclick = function() { 
			Anubis.src = "resources/webp/ch04/anubis_3_motion.webp";
			flag++;
			setTimeout(function() {
				flag--;
				if(flag == 0) Anubis.src = "resources/webp/ch04/anubis_3.webp";
			}, 2400);
		
			obj.id = "inactive"
			
			obj.style.display = "none";
			pese.style.display = "block";
			pese.isHeld = true;
			
			// 마우스 따라다님
			body.addEventListener('mousemove', follow_mouse);
			body.style.cursor = "none";
			
			// circle 활성화
			circle[spotCount].style.display = "block";
		};
}

function follow_mouse( event ) {
	if(pese.isHeld) {
		const x = event.x - (pese.clientWidth*0.95);
		const y = event.y - (pese.clientHeight*0.2);
		
		pese.style.left = x + 'px';
		pese.style.top = y + 'px';
	}
}

function tap_circle( e ) {
	if(e.id == "spot") {
		e.style.animation = "fadeout 3s";
		
		e.id = "inactive";
		Anubis.src = "resources/webp/ch04/anubis_3_motion.webp";
		flag++;
		setTimeout(function() {
			flag--;
			if(flag == 0) Anubis.src = "resources/webp/ch04/anubis_3.webp";
		}, 2400);

		var oil =  document.querySelector('#oil0' + (4-spotCount));
		if(oil != null) {
			oil.style.display = "block";
		}
		
		spotCount++;
		if(spotCount > 3) {
			pese.style.display = "none";
			obj.style.display = "block";
			pese.isHeld = false;
			
			var char = document.querySelector('#interact .character:nth-of-type(2)');
			char.style.animation = "withdraw 1s";
			
			setTimeout(next, 900);
		}
		else
			circle[spotCount].style.display = "block";

	}
}

function next() {
	$("form").submit();
}

setTimeout(changeWebp, 3000);


function changeWebp() {
	Anubis.src = "resources/webp/ch04/anubis_3_talk.webp";
}