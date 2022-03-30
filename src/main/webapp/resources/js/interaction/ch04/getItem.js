var body = document.querySelector("#interact");

var animal = document.querySelector("#interact .animal:nth-of-type(6)");

var knife = document.querySelector("#interact .knife");

var spot1 = document.querySelector("#interact .spot1");
var spot2 = document.querySelector("#interact .spot2");

var item = document.querySelector("#interact .item");

var is_dragging = [];
is_dragging[0] = false;
is_dragging[1] = false;

function init_item() {	
	body.addEventListener('mousemove', follow_mouse);
	body.addEventListener('mouseup', function() {
		is_dragging[0] = false;
		is_dragging[1] = false;
	});
	body.style.cursor = "none";
	spot1.style.cursor = "none";
	spot2.style.cursor = "none";
	
	spot1.onmousedown = function() {
		if(!is_dragging[0]) {
			is_dragging[1] = true;
		}
	}
	spot2.onmousedown = function() {
		if(!is_dragging[1]) {
			is_dragging[0] = true;
		}
	}
	spot1.onmouseup = function() {
		if(is_dragging[0]) {
			var line = document.querySelector("#interact #line");
			line.style.display = "none";
			
			animal.style.display = "none";
			animal = document.querySelector("#interact .animal:nth-of-type(5)");
			animal.style.display = "block";
			
			item.style.display = "block";
			
			setTimeout(next, 2500);
		}
	}
	spot2.onmouseup = function() {
		if(is_dragging[1]) {
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
	const x = event.clientX - (knife.clientWidth*0.01);
	const y = event.clientY - (knife.clientHeight*1.01);
		
	knife.style.left = x + 'px';
	knife.style.top = y + 'px';
}

function next() {
	$("form").submit();
}