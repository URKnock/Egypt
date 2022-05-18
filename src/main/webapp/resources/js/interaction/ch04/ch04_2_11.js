var body = document.querySelector('body');
body.onload = function() { setTimeout(next, 6000); setSound(); };

var anubis = document.querySelector('#anubis');
setTimeout(function(){anubis.src = "resources/webp/ch04/anubis_1_talk.webp";}, 2400);

$("#voice").bind("ended", function() {
	anubis.src = "resources/webp/ch04/anubis_1.webp";
});

function next() { $("form").submit(); }