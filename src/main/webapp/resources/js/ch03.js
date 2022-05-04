var w, h, x, y;
var scene, index, flag;
var o_select, o_index;
var clicked = [1, 2, 3, 4, 5, 6];

$(document).ready(function(){
	o_select = "0";
	w = $("#background").width() / 1920;
	h = $("#background").height() / 1080;
	
	$(".close").off("click").on("click", function() { 
		hide_info();
		if(clicked.length == 0) {
			$("form").submit();
		}
	});
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	
	$(window).resize(function() {
		location.reload(true);
	});

	if((scene == 1 && index == 0) || (scene == 2 && flag == 1)) {
 		if(scene == 2 && flag == 1) {
 			clicked = [0, 1, 2, 3, 4, 5, 6];
 			$("#background > img:nth-child(4)").addClass("select");
			$("#background > img:nth-child(4)").addClass("pikachu");
			$("#background > img:nth-child(4)").on("click", function() {
				objectSubmit("#background > img:nth-child(4)");
			});
 		} else {
			$("#background > img:nth-child(2)").addClass("select");
			$("#background > img:nth-child(3)").addClass("select");
			for(var i = 1; i < 5; i++) {
				$("#ca" + i).addClass("select");
			} 			
 		}
 		$("#background > img:nth-child(2)").addClass("pikachu");
		$("#background > img:nth-child(3)").addClass("pikachu");

		$("#background > img:nth-child(2)").on("click", function() { 
			object("#background > img:nth-child(2)", 5, 5); 
		});
		$("#background > img:nth-child(3)").on("click", function() { 
			object("#background > img:nth-child(3)", 4, 6); 
		});
		for(var i = 1; i < 5; i++) {
			$("#ca" + i).addClass("pikachu");
		}
		$("#ca1").on("click", function() { object("#ca1", 2, 1) });
		$("#ca2").on("click", function() { object("#ca2", 3, 2) });
		$("#ca3").on("click", function() { object("#ca3", 0, 3) });
		$("#ca4").on("click", function() { object("#ca4", 1, 4) });
 	} else if(scene == 7 && index == 1) {
 		$("input[name='index']").val(0);
 	} else if(scene == 14) {
		clicked = [1, 2, 3];
 	}
	switch(scene) {
		case '1':
			if(index != 0) {
				$("#dialogue").on("click", function() {
					$("form").submit();
				});
			}
			break;
		case '3':
		case '4':
			clicked = [];
			break;
		case '14':
			clicked = [1, 2, 3];
			break;
		default:
			$("#dialogue").on("click", function() {
				$("form").submit();
			});	
			break;
	}
});

function init() {
	scene = $("input[name='scene']").val();
	
	setDialogueSize();
	
	resize("#human");
	center("#human");
	
	var b = 300*h;
	
	var bg1 = $("#background > img:nth-child(1)");
	bg1.width(bg1.prop("naturalWidth") * w);
	bg1.height(bg1.prop("naturalHeight") * h);
	bg1.css("left", x - (bg1.width() / 2.0) + 10*w);
	bg1.css("bottom", b+3*h);
	
	var bg2 = $("#background > img:nth-child(2)");
	bg2.width(bg2.prop("naturalWidth") * w);
	bg2.height(bg2.prop("naturalHeight") * h);
	bg2.css("left", x - 600*w);
	bg2.css("bottom", b);
	
	var bg3 = $("#background > img:nth-child(3)");
	bg3.width(bg3.prop("naturalWidth") * w);
	bg3.height(bg3.prop("naturalHeight") * h);
	bg3.css("left", x + 400*w);
	bg3.css("bottom", b);
	
	var bg4 = $("#background > img:nth-child(4)");
	bg4.width(bg4.prop("naturalWidth") * w);
	bg4.height(bg4.prop("naturalHeight") * h);
	bg4.css("left", x + 500*w);
	bg4.css("bottom", b);
	
	if(scene == 10) {
		canopic_two(); 
	} else { 
		canopic_one(); 
	}

	function setCookie(c_name,value,exdays)
	{
	    var exdate=new Date();
	    exdate.setDate(exdate.getDate() + exdays);
	    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	    document.cookie=c_name + "=" + c_value;
	}
	
	function getCookie(c_name)
	{
	    var i,x,y,ARRcookies=document.cookie.split(";");
	    for (i=0;i<ARRcookies.length;i++)
	    {
	      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	      x=x.replace(/^\s+|\s+$/g,"");
	      if (x==c_name)
	        {
		        return unescape(y);
	        }
	      }
	}
	
	var song = document.getElementsByTagName('audio')[0];
	var voice = document.getElementsByTagName('audio')[1];
	var played = false;
	var tillPlayed = getCookie('timePlayed');
	function update()
	{
	    if(!played){
	        if(tillPlayed){
	        	song.currentTime = tillPlayed;
	        	song.play();
	        	played = true;
	        }
	        else {
	                song.play();
	                played = true;
	        }
	    }
	    else {
		    setCookie('timePlayed', song.currentTime);
	    }
	}
	update();
	setInterval(update, 500);
	voice.play();
	$("#voice").bind("ended", function() {
		bg4.attr("src", "/resources/character/ch03/anubis_close.webp");
		if(scene == 18) {
			setTimeout(function() { $("form").submit(); }, 2000);
		}
	});
}

function object(select, index, arrIndex) {
	if(arguments.length == 3) {
		o_select = select;
		o_index = arrIndex;
		if(clicked.indexOf(arrIndex) != -1) {
			clicked.splice(clicked.indexOf(arrIndex), 1);
			$(select).removeClass("select");
		}
		if(o_select.startsWith("charm")) {
			show_info(index);
		} else if(o_select != "0") {
			var path = "/resources/background/ch03/" + o_index + ".webp";
			$(o_select).on("load", function() { 
				canopic_one();
				setTimeout(function() { show_info(index); }, 1000);
			});
			$(o_select).attr("src", path);
		}
	} else {
		o_select = "0";
		$(select).removeClass("select");
		show_info(index);
	}
}

function objectSubmit(select) {
	$(select).removeClass("select");
	$('input[name=choice]').val(-1);
	$("form").submit();
}

function canopic_one() {
	if(o_select != "0" && o_select != undefined) {
		var caL = 270.5;
	} else {
		var caL = 227;
	}
	var ca_bottom = 300 * h;
	resize("#ca1");
	$("#ca1").css("bottom", ca_bottom);
	if(caL == 270.5 && o_select != "0") {
		if(o_index == 1) {
			$("#ca1").css("left", x - caL*w);
		}
	} else {
		$("#ca1").css("left", x - caL*w);
	}
		
	for(var i = 2; i < 5; i++) {
		resize("#ca" + i);
		$("#ca" + i).css("bottom", ca_bottom);
		if(caL == 270.5 && o_select != "0") {
			if(o_index == i) {
				$("#ca" + i).css("left", x + (-caL - 125 + (125 * i))*w);
			}
		} else {
			$("#ca" + i).css("left", x + (-caL - 125 + (125 * i))*w);
		}
	}
}

function canopic_two() {
	var caH = $("#ca1_0").height();
	var ca_bottom_0 = 300 * h;
	var ca_bottom_1 = $("#ca1_1").height() / 3 + ca_bottom_0;
	resize("#ca1_0");
	resize("#ca1_1");
	$("#ca1_0").css("bottom", ca_bottom_0);
	$("#ca1_0").css("left", x - 227*w);
	$("#ca1_1").css("bottom", ca_bottom_1);
	$("#ca1_1").css("left", x - 237*w);
		
	for(var i = 2; i < 5; i++) {
		resize("#ca" + i + "_0");
		resize("#ca" + i + "_1");
		$("#ca" + i + "_0").css("bottom", ca_bottom_0);
		$("#ca" + i + "_0").css("left", x + (-312 + (125 * i) - 40)*w);
		$("#ca" + i + "_1").css("bottom", ca_bottom_1);
		$("#ca" + i + "_1").css("left", x + (-312 + (125 * i) - 50)*w);
	}
}

function center(element) {
	centerX(element);
	centerY(element);
}
function centerX(element) {
	$(element).css("left", x - ($(element).width() / 2));
}
function centerY(element) {
	if(element == "#human" || element == "#human_cover" || element == "#human_soda" || element == "#human_band") {
		$(element).css("bottom", 555*h);
	} else {
		$(element).css("bottom", 606*h);
	}
}

function resizeWH(element, ew, eh) {
	$(element).width(ew * w);
	$(element).height(eh * h);
}

function interaction() {};