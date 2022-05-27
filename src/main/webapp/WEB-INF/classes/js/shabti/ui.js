/**
 * 
 */
/*지시창*/
$(document).ready(function(){
    //$('classNAME or element').hover(A, B);
    $('li a').hover(
      function(event){
        $(this).addClass('hover');
      },
      function(){
        $(this).removeClass('hover');
      }
    );
  });
/*캐러셀*/
$(document).ready(function(){
  $('#owl-UI').owlCarousel();
});
$('#owl-UI').owlCarousel({
	nav:true, 
	loop: true, 
	dots: true, 
	autoplay:true, 
	rewind: true, 
	autoplayTimeout: 2000, 
	margin:10, 
	responsiveClass:true, 
	responsive:{ 
		0:{ items:2, nav:true }, 
		600:{ items:3, nav:false }, 
		1000:{ items:6, nav:true, loop:false }
	}

	});
/*창닫기 */
function hide_dic(){
	window.close();
}