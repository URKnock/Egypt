function init() {
	var h = $("#background").height() - $("#dialogue").height();
	if(h < 0) h = 0;
	$("#background").height(h);
		
	var w = $("#scene").width() - $("#dialogue > img:first-of-type").width();
	w = w - $("#choice").width();
	if(w < 0) w = 0;
	$("#scene").width(w);
	
	$("#choice > img").height( $("#dialogue > img").height() );
	
	$(".menu1").click(function() {
		alert('눌렸습니다ㅋㅋ 어쩔티비저쩔티비~');
	});
	
	$("#earth").click(function() {
		 $(".modal").fadeIn();
	});

	$(".lab").click(function() {
		 $(".modal2").fadeIn();
	});
	
	//modal 닫힘
	
	$(".modal_content2").click(function(){
    $(".modal2").fadeOut();
  });

		$(".modal_content").click(function(){
    $(".modal").fadeOut();
 	 });

$("#dialogue").click(function() {
		$("form").submit();
	});
	
	var scene = $("input[name='scene']").value();
	if(scene == 99) {
		$("#dialogue").remove(click);
		$("#test").click(function() {
			$("form").submit();
		});	
	}
	
}
