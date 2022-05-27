var body = document.querySelector("#interact");
var item = document.querySelector("#interact .item");
var spot = document.querySelector("#interact .spot");
var circle = document.querySelector("#interact .circle");

var xStart;
var yStart;

var isDragging = false;

function init_toss() {
	xStart = item.style.left; 
	yStart = item.style.top;
	
	item.onmousedown = function() {
		isDragging = true;
		xStart = item.style.left;
		yStart = item.style.top;
		
		body.addEventListener('mousemove', follow_mouse);
		
		item.style.cursor = "none";
		spot.style.cursor = "none";
		
		circle.style.display = "block";
	}
	body.onmouseup = function() {
		if(isDragging == true) {
			reset();
			is_Dragging = false;
		}
	}
	
	spot.onmouseup = function() {
		if(isDragging == true) {
			item.style.display = "none";
			next();
		}
	}
}

function follow_mouse( event ) {
	const x = event.clientX - (item.clientWidth*0.5);
	const y = event.clientY - (item.clientHeight*0.5);
		
	item.style.left = x + 'px';
	item.style.top = y + 'px';
}

function reset() {
	item.style.left = xStart;
	item.style.top = yStart;
	
	body.removeEventListener("mousemove", follow_mouse);
}

function next() {
	$("form").submit();
}