function setSetting() {
	var bgm = document.getElementById("bgm");
	var voice = document.getElementById("voice");
	var effect = document.getElementById("effect");

	$("#setting").css("display", "flex");

	var volumed = getCookie("bgmVol");
	if(!volumed) {
		setCookie("bgmVol", 1);
		setCookie("voiceVol", 1);
		setCookie("effectVol", 1);
	} else {
		bgm.volume = volumed;
		voice.volume = getCookie("voiceVol");
		effect.volume = getCookie("effectVol");
	}

	$('.audioSetting:nth-child(1) .audioSlider').slider({
	    orientation: "vertical",
	    value: bgm.volume,
	    min: 0,
	    max: 1,
	    range: 'min',
	    animate: true,
	    step: 0.05,
	    change: function() {
	        bgm.volume = $('.audioSetting:nth-child(1) .audioSlider').slider("value");
	    }
	});
	$('.audioSetting:nth-child(2) .audioSlider').slider({
	    orientation: "vertical",
	    value: effect.volume,
	    min: 0,
	    max: 1,
	    range: 'min',
	    animate: true,
	    step: 0.05,
	    change: function() {
	        effect.volume = $('.audioSetting:nth-child(2) .audioSlider').slider("value");
	    }
	});
	$('.audioSetting:nth-child(3) .audioSlider').slider({
	    orientation: "vertical",
	    value: voice.volume,
	    min: 0,
	    max: 1,
	    range: 'min',
	    animate: true,
	    step: 0.05,
	    change: function() {
	        voice.volume = $('.audioSetting:nth-child(3) .audioSlider').slider("value");
	    }
	});
	
	$('.audioSetting:nth-child(1) > div > img').on("click", function() {
		bgm.volume = 1;
		$('.audioSetting:nth-child(1) .audioSlider').slider("value", 1);
	});
	$('.audioSetting:nth-child(2) > div > img').on("click", function() {
		effect.volume = 1;
		$('.audioSetting:nth-child(2) .audioSlider').slider("value", 1);
	});
	$('.audioSetting:nth-child(3) > div > img').on("click", function() {
		voice.volume = 1;
		$('.audioSetting:nth-child(3) .audioSlider').slider("value", 1);
	});
	
	$("#setting_container").width(1195 * w);
	$("#setting_container").height(655 * h);
	$("#setting input").on("click", function() {
		$("#setting").hide();
	    setCookie("bgmVol", $('.audioSetting:nth-child(1) .audioSlider').slider("value"));
	    setCookie("effectVol", $('.audioSetting:nth-child(2) .audioSlider').slider("value"));
	    setCookie("voiceVol", $('.audioSetting:nth-child(3) .audioSlider').slider("value"));
	});
}
