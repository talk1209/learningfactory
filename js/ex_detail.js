$(document).ready(function() {
	// Scrollspy + 상세과정 카테고리, 사이드메뉴 fixed
	var $menu = $(".nav_menu");
	var $menu_a = $("a", $menu);
	var id = false;
	var sections = [];
	var hash = function(h) {
		if (history.pushState) {
			history.pushState(null, null, h);
		} else {
			location.hash = h;
		}
	};

	$menu_a.click(function(event) {
		event.preventDefault();
		$("html, body").stop().animate({
			scrollTop: $($(this).attr("href")).offset().top - $(".ex_detail_con_nav").height()
		},{
			duration: 700,
			complete: hash($(this).attr("href"))
		});
	});

	$menu_a.each(function() {
		sections.push($($(this).attr("href")));
	});

	$(window).scroll(function(event) {
		var scrolling = $(this).scrollTop();
		if(scrolling > $('.ex_detail_con').offset().top){
			$('.ex_detail_con').addClass('fixed_top');

			var scrolling_fix = $(this).scrollTop() + $(".ex_detail_con_nav").height();
			var scroll_id;
			for (var i in sections) {
				var section = sections[i];
				if (scrolling_fix >= section.offset().top) {
					scroll_id = section.attr("id");
				}
			}
			if (scroll_id !== id) {
				id = scroll_id;
				$menu_a.removeClass('on theme_color theme_bd');
				$("a[href='#" + id + "']", $menu).addClass('on theme_color theme_bd');
			}
		}else{
			$('.ex_detail_con').removeClass('fixed_top');
		}
    });
});