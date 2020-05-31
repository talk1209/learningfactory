$(document).ready(function() {
    /* Sidebar Mouseover Event */
    $(".learning_sidebar li").mouseover(function(){
        $(this).addClass("on");
    });
    $(".learning_sidebar li").mouseleave(function(){
        $(this).removeClass("on");
    });
    
    $(window).scroll(function() {
		if($('.learning_status_wrap').length > 0){
			if ($(this).scrollTop() >= Math.ceil($('.learning_status_wrap').offset().top)) {			
				$(".learning_sidebar.main").addClass("side_fixed");
			} else {			
				$(".learning_sidebar.main").removeClass("side_fixed");
			}
		}
    });
    
    /* Swiper - Main visual */
	var learningMainVisual = new Swiper('.swiper-container', {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
		pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
	});    
    /* Swiper - Main Course */
	var learningMainCourse = new Swiper('.main_course_container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 32,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
	});
    
    /* Swiper - Main New Course */
	var mainNewCourse = new Swiper('.new_course_container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 32,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
	});
    
    /* Main Course Mouseover Event */
    $(".main_course .swiper-slide").mouseover(function(){
        $(this).addClass("on");
    });
    $(".main_course .swiper-slide").mouseleave(function(){
        $(this).removeClass("on");
    });
        
    $(".swiper-slide").hover(
        function() {
            learningMainVisual.autoplay.stop();
            learningMainCourse.autoplay.stop();
            mainNewCourse.autoplay.stop();
        }, function() {
            learningMainVisual.autoplay.start();
            learningMainCourse.autoplay.start();
            mainNewCourse.autoplay.start();
        }
    );

    /* Popular Course Tab */
    popularTab();
    weeklyTab();
    monthlyTab();
    
    // To the top
    $(document).on("click", ".go_top", function(){
        $("html, body").animate({scrollTop:0}, 500);
        return false;
    });
});

// Popular Course Tab
function popularTab() {
    var $tbtn = $(".tab_btn li");
    var $tbtn_leng = $tbtn.length;
    //$tbtn.width(100/$tbtn_leng+"%");
    var $tab_contentsOb = $(".tab_contents");

    $tab_contentsOb.hide();
    $tab_contentsOb.eq(0).show();
    $tbtn.eq(0).addClass("on");

    $tbtn.click(function(e){
    
        e.preventDefault();

        idx = $(this).index();

        $tbtn.removeClass();
        $tbtn.eq(idx).addClass("on");
        $tab_contentsOb.hide();
        $tab_contentsOb.eq(idx).show();       
    });
}
// Popular Course Tab
function weeklyTab() {
    var $tbtn = $(".tab_in_tab2 li");
    var $tbtn_leng = $tbtn.length;
    //$tbtn.width(100/$tbtn_leng+"%");
    var $tab_contentsOb = $(".tab_course_desc2");

    $tab_contentsOb.hide();
    $tab_contentsOb.eq(0).show();
    $tbtn.eq(0).addClass("on");

    $tbtn.click(function(e){
    
        e.preventDefault();

        idx = $(this).index();

        $tbtn.removeClass();
        $tbtn.eq(idx).addClass("on");
        $tab_contentsOb.hide();
        $tab_contentsOb.eq(idx).show();       
    });
}
// Popular Course Tab
function monthlyTab() {
    var $tbtn = $(".tab_in_tab3 li");
    var $tbtn_leng = $tbtn.length;
    //$tbtn.width(100/$tbtn_leng+"%");
    var $tab_contentsOb = $(".tab_course_desc3");

    $tab_contentsOb.hide();
    $tab_contentsOb.eq(0).show();
    $tbtn.eq(0).addClass("on");

    $tbtn.click(function(e){
    
        e.preventDefault();

        idx = $(this).index();

        $tbtn.removeClass();
        $tbtn.eq(idx).addClass("on");
        $tab_contentsOb.hide();
        $tab_contentsOb.eq(idx).show();       
    });
}

// To the top
$(window).on({
    "scroll" : function(){
        var winScrlTop = $(window).scrollTop();
		
        if(winScrlTop > 270){           
            $(".go_top").fadeIn();
        }else{
            $(".go_top").fadeOut();
        }
    }
});
