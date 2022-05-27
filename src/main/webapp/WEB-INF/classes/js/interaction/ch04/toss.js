var body = document.querySelector("#interact");
var spot = document.querySelector("#interact .spot");
var circle = document.querySelector("#interact .circle");

var xStart;
var yStart;

var isDragging = false;

var item;

var servant7 = document.querySelector('#interact .character:nth-of-type(3)');
var servant8 = document.querySelector('#interact .character:nth-of-type(4)');

var item1 = document.querySelector('#interact .item1');
var item2 = document.querySelector('#interact .item2');
var victim1 = document.querySelector('#interact .victim1');
var victim2 = document.querySelector('#interact .victim2');

var num = 0;

function init_toss() {
	if($("input[name=index]").val() == "2" || $("input[name=index]").val() == "4") {
		servant8.src = "resources/webp/ch04/servant_8_talk.webp";
		$("#voice").bind("ended", function() {
			servant8.src = "resources/webp/ch04/servant_8_nothing.webp";
		});
	}
		
	if($("input[name=index]").val() == "3" || $("input[name=index]").val() == "5") {
		servant7.src = "resources/webp/ch04/servant_7_talk.webp";
		$("#voice").bind("ended", function() {
			servant7.src = "resources/webp/ch04/servant_7_nothing.webp";
		});
	}
	
	if($("input[name=scene]").val() == "19") {
		var osiris = document.querySelector('.osiris');
		osiris.src = "resources/webp/ch04/osiris_talk.webp";
		$("#voice").bind("ended", function() {
			osiris.src = "resources/webp/ch04/osiris.webp";
		});
	}
		
		
	if($("input[name=index]").val() == "1") { // 맨 처음
		item1.style.animation = "3s appear";
		item2.style.animation = "3s appear";
		
		servant7.src = "resources/webp/ch04/servant_7_up.webp";
		servant8.src = "resources/webp/ch04/servant_8_up.webp";
		
		setTimeout(function() {
			servant7.src = "resources/webp/ch04/servant_7_nothing.webp";
			servant8.src = "resources/webp/ch04/servant_8_nothing.webp";
			
			item1.style.display = "block";
			item2.style.display = "block";
		}, 3150);
	}
	else if($("input[name=index]").val() == "2") {
		//effSoundPlay( "Dish" );
		victim1.style.display = "block";
		item2.style.display = "block";
	}
	else if($("input[name=index]").val() == "3") {
		//effSoundPlay( "Dish" );
		victim2.style.display = "block";
		item1.style.display = "block";
	}
	else {
		//effSoundPlay( "Dish" );
		victim1.style.display = "block";
		victim2.style.display = "block";
		
		$("#dialogue").click(function() {
			$("form").submit();
		});
		
		var nextButton = document.querySelector('#nextButton');
		nextButton.style.display = "block";
		if($("input[name=scene]").val() == "19") {
			nextButton.style.position = "absolute";
			nextButton.style.paddingTop = "68px";
			nextButton.style.paddingLeft = "470px";
		}
	
		$("input[name=index]").val("5");
	}
	
	item1.onmousedown = function() {
		if(!isDragging) {
			isDragging = true;
			item = item1;
			num = "1";
			xStart = item.style.left; 
			yStart = item.style.top;
			
			body.addEventListener('mousemove', follow_mouse);
			
			circle.style.display = "block";
			item.style.cursor = "none";
			spot.style.cursor = "none";
		}
	}
	item2.onmousedown = function() {
		if(!isDragging) {
			isDragging = true;
			item = item2;
			num = "2";
			xStart = item.style.left; 
			yStart = item.style.top;
			body.addEventListener('mousemove', follow_mouse);
			
			item.style.cursor = "none";
			spot.style.cursor = "none";
			
			circle.style.display = "block";
			circle.style.transform = "translate(-20vh, 0)";
			spot.style.transform = "translate(-18vh, 0)";
		}
	}
	body.onmouseup = function() {
		if(isDragging == true) {
			isDragging = false;
			reset();
			
			circle.style.display = "none";
			item.style.cursor = "auto";
			spot.style.cursor = "auto";
			circle.style.transform = "";
			spot.style.transform = "";
		}
	}
	spot.onmouseup = function() {
		if(isDragging == true) {
			if($("input[name=index]").val() == "1") $("input[name=index]").val(num);
			else if($("input[name=index]").val() == "2") $("input[name=index]").val("4");
			else if($("input[name=index]").val() == "3") $("input[name=index]").val("3");
			$("form").submit();
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