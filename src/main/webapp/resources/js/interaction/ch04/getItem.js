var body = document.querySelector("#interact");

var animal = document.querySelector("#interact .animal:nth-of-type(6)");

var knife = document.querySelector("#interact .knife");

var spot1 = document.querySelector("#interact .spot1");
var spot2 = document.querySelector("#interact .spot2");

var item = document.querySelector("#interact .item");

var is_dragging = false;

function init_item() {	
	body.addEventListener('mousemove', follow_mouse);
	body.addEventListener('mouseup', function() {
		is_dragging = false;
	});
	body.style.cursor = "none";
	spot1.style.cursor = "none";
	spot2.style.cursor = "none";
	
	spot1.onmousedown = function() {
		is_dragging = true;
	}
	spot2.onmouseup = function() {
		if(is_dragging) {
			var line = document.querySelector("#interact #line");
			line.style.display = "none";
			
			animal.style.display = "none";
			animal = document.querySelector("#interact .animal:nth-of-type(5)");
			animal.style.display = "block";
			
			item.style.display = "block";
			
			setTimeout(next, 2500);
		}
	}
}

function follow_mouse( event ) {
	const x = event.clientX - (knife.clientWidth*0.95);
	const y = event.clientY - (knife.clientHeight*0.1);
		
	knife.style.left = x + 'px';
	knife.style.top = y + 'px';
}

function next() {
	$("form").submit();
}