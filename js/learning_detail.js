$(document).ready(function() {
	// 사이드메뉴 fixed
	$(window).scroll(function(event) {
		var scrolling = $(this).scrollTop();
		if(scrolling > $('.learning_detail_con').offset().top){
			$('.learning_detail_con').addClass('fixed_top');
		}else{
			$('.learning_detail_con').removeClass('fixed_top');
		}
    });
});