var v16 = new Audio('resources/bgm/ch05/5_6_1_0.mp3');
var v17 = new Audio('resources/bgm/ch05/5_7_1_0.mp3');
var v18 = new Audio('resources/bgm/ch05/5_8_1_0.mp3');

var v19 = new Audio('resources/bgm/ch05/5_9_1_0.mp3');
var v19_1_r = new Audio('resources/bgm/ch05/5_9_2_0.mp3');
var v19_1_n = new Audio('resources/bgm/ch05/5_9_2_1.mp3');

var v20 = new Audio('resources/bgm/ch05/5_10_1_0.mp3');
var v20_1_r = new Audio('resources/bgm/ch05/5_10_2_0.mp3');
var v20_1_n = new Audio('resources/bgm/ch05/5_10_2_1.mp3');

var v20_1_0 = new Audio('resources/bgm/ch05/5_11_1_0.mp3');
var v21_0_1 = new Audio('resources/bgm/ch05/5_11_2_0.mp3');
var v21_n = new Audio('resources/bgm/ch05/5_11_2_1.mp3');

var v22_0_0 = new Audio('resources/bgm/ch05/5_12_1_0.mp3');
var v22_0_1 = new Audio('resources/bgm/ch05/5_12_2_0.mp3');
var v22_0_2 = new Audio('resources/bgm/ch05/5_12_3_0.mp3');
var v22_0_3 = new Audio('resources/bgm/ch05/5_12_4_0.mp3');

function interaction() { 
			$("#menu img:nth-child(2)").on("click", function() {
		location.href="/chapter02";
	});
	scene = $("input[name='scene']").val();
	index = $("input[name='index']").val();
	flag = $("input[name='flag']").val();
	$("#background").children().hide();
	//$("form").hide();
	
/*	$(".mainC_s").delay(500).animate({left: "-90%"}, 6000);*/
	if(scene == 16) {
		v16.play();
		$("#keeper1").css({width:"360px"});
		$("#keeper1").css({left:"49.6%"});
		$("#keeper1").css({top:"10%"});
		$("#keeper1").attr("src", "/resources/character/ch05/토끼말해.webp");
		
	}
	if(scene == 17) {
		v17.play();
		$("#keeper2").css({width:"365px"});
		$("#keeper2").css({left:"65.8%"});		
		$("#keeper2").css({top:"10.2%"});
		$("#keeper2").attr("src", "/resources/character/ch05/뱀말해.webp");
	}
	if(scene == 18 && index == 0) {
		v18.play();
		$("#keeper3").css({width:"362px"});
		$("#keeper3").css({left:"82.76%"});
		$("#keeper3").css({top:"10.6%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
	}
	if(scene == 18 && index == 1) { //기억했는가 안내인은?
		$("#keeper1").css({width:"360px"});
		$("#keeper1").css({left:"49.6%"});
		$("#keeper1").css({top:"10%"});
		$("#keeper1").attr("src", "/resources/character/ch05/토끼말해.webp");
		v18.pause();
		v19.play();
		
	}
	if(scene == 19 && index == 0) { //ㅇ
		$("#keeper1").css({width:"360px"});
		$("#keeper1").css({left:"49.6%"});
		$("#keeper1").css({top:"10%"});
		$("#keeper1").attr("src", "/resources/character/ch05/토끼말해.webp");
		v19_1_r.play();
		
	}
	if(scene == 19 && index == 0 && flag == 1) { //ㄴ
		$("#keeper1").css({width:"360px"});
		$("#keeper1").css({left:"49.6%"});
		$("#keeper1").css({top:"10%"});
		$("#keeper1").attr("src", "/resources/character/ch05/토끼말해.webp");
		v19_1_r.pause();
		v19_1_n.play();
		
	}
	if(scene == 19 && index == 0 && flag == 2) { //ㄴ
		$("#keeper1").css({width:"360px"});
		$("#keeper1").css({left:"49.6%"});
		$("#keeper1").css({top:"10%"});
		$("#keeper1").attr("src", "/resources/character/ch05/토끼말해.webp");
		v19_1_r.pause();
		v19_1_n.play();
		
	}
	if(scene == 19 && index == 1 && flag == 0) { //기억했는가 문지기 이름은?
		$("#keeper2").css({width:"365px"});
		$("#keeper2").css({left:"65.8%"});		
		$("#keeper2").css({top:"10.2%"});
		$("#keeper2").attr("src", "/resources/character/ch05/뱀말해.webp");
		v20.play();
		
	}
	if(scene == 20 && index == 0 && flag == 0) { //ㄴ
		$("#keeper2").css({width:"365px"});
		$("#keeper2").css({left:"65.8%"});		
		$("#keeper2").css({top:"10.2%"});
		$("#keeper2").attr("src", "/resources/character/ch05/뱀말해.webp");
		v20_1_n.play();
		
	}
	if(scene == 20 && index == 0 && flag == 1) { //ㅇ
		$("#keeper2").css({width:"365px"});
		$("#keeper2").css({left:"65.8%"});		
		$("#keeper2").css({top:"10.2%"});
		$("#keeper2").attr("src", "/resources/character/ch05/뱀말해.webp");
		v20_1_r.play();
		
	}
	if(scene == 20 && index == 0 && flag == 2) { //ㄴ
		$("#keeper2").css({width:"365px"});
		$("#keeper2").css({left:"65.8%"});		
		$("#keeper2").css({top:"10.2%"});
		$("#keeper2").attr("src", "/resources/character/ch05/뱀말해.webp");
		v20_1_r.pause();
		v20_1_n.play();
		
	}
	if(scene == 20 && index == 1 && flag == 0) { //정령이름은?
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v20_1_0.play();
		
	}	
	if(scene == 21 && index == 0 && flag == 0) { //ㄴ
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v20_1_0.pause();
		v21_n.play();
		
	}
	if(scene == 21 && index == 0 && flag == 1) { //ㅇ
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v20_1_0.pause();
		v21_0_1.play();
		
	}
	if(scene == 21 && index == 0 && flag == 2) { //ㄴ
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v20_1_0.pause();
		v21_n.play();
		
	}	
	if(scene == 21 && index == 0 && flag == 2) { //ㄴ
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v20_1_0.pause();
		v21_n.play();
		
	}
	
	if(scene == 22 && index == 0 && flag == 0) { //옳은답
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v22_0_0.play();
		$("#dialogue").on("click", function() {
		location.href="/chapter06";
	});
	}
	if(scene == 22 && index == 0 && flag == 1) { //다음엔더
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v22_0_1.play();
		$("#dialogue").on("click", function() {
		location.href="/chapter06";
	});
	}
	if(scene == 22 && index == 0 && flag == 2) { //분발
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v22_0_2.play();
		$("#dialogue").on("click", function() {
		location.href="/chapter06";
	});
	}
	if(scene == 22 && index == 0 && flag == 3) { //끌고가
		$("#keeper3").css({width:"364px"});
		$("#keeper3").css({left:"82.7%"});
		$("#keeper3").css({top:"10.2%"});
		$("#keeper3").attr("src", "/resources/character/ch05/소말해.webp");
		v22_0_3.play();
		$("#dialogue").on("click", function() {
		location.href="/chapter13";
	});
		
	}
						
}