const rand1 = Math.floor(Math.random() * 750);
const rand2 = Math.floor(Math.random() * 500);
const rand3 = Math.floor(Math.random() * 500);
const rand4 = Math.floor(Math.random() * 500);
var flag = 0;

function interaction() {
	/* $(".bug1").click(function() {	
		$(this).animate({top:rand1, left:rand2}, 900);
	}); */
	$("#background").children().hide();
	$(".bug1").click(function() {
		$(this).fadeOut(250, function() {
		$(this).attr("src",
		 "<c:url value='/resources/object/ch05/5_23.png'/>");
	});
	});


	
	$(function loop1() {
		$(".bug1").delay(600).animate({top:200, left:270}, 800);
		$(".bug1").delay(900).animate({top:200, left:100}, 800);
		$(".bug1").animate({top:"-=100", left:"+=310"}, 800, loop1).delay(600);
	})
	
	
	/*$(".bug1").animate({top:200, left:300}, 800);*/

	
	/*$(".bug2").click(function() {	
		$(this).animate({top:"-=100", left:"+=450"}, 900);
	}); */
	
	/*$(".bug2").animate({top:300, left:200}, 1500);*/
	
	$(".bug3").click(function() {	
		$(this).animate({top:"+=100", left:"-=300"}, 900);
	});
	$(".bug4").click(function() {	
		$(this).animate({top:"+=100", left:"+=500"}, 900);
	});	
}

