$(document).ready(function() {
    //PC GNB
    var snb_bg = $('#snb_bg')
    var timeout = 0;
    var hovering = false;
    snb_bg.hide();
    
    $('#gnb')
        .on("mouseenter", function () {
        hovering = true;
        // Open the snb_bg
        $('#snb_bg')
            .stop(true, true)
            .slideDown('fast');
 
        if (timeout > 0) {
            clearTimeout(timeout);
        }
    })
        .on("mouseleave", function () {
        resetHover();
    });
 
    $("#snb_bg")
        .on("mouseenter", function () {
        // reset flag
        hovering = true;
        // reset timeout
        startTimeout();
    })
        .on("mouseleave", function () {
        // The timeout is needed incase you go back to the main menu
        resetHover();
    });
 
    function startTimeout() {
        // This method gives you 1 second to get your mouse to the sub-menu
        timeout = setTimeout(function () {
            closeMenu();
        }, 'fast');
    };
 
    function closeMenu() {
        // Only close if not hovering
        if (!hovering) {
            $('#snb_bg').stop(true, true).slideUp('fast');
        }
    };
 
    function resetHover() {
        // Allow the menu to close if the flag isn't set by another event
        hovering = false;
        // Set the timeout
        startTimeout();
    };
    
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
	if($('.swiper-container').length > 0){
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
	};
	
    /* Swiper - Main Course */
	if($('.main_course_container').length > 0){
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
	};
    
    /* Swiper - Main New Course */
	if($('.new_course_container').length > 0){
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
	};
    
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
    
    /* Login Find Tab */
    loginFindTab();
    
    /* Sub Section Tab */
    subSecTab();
    
    // To the top
    $(document).on("click", ".go_top", function(){
        $("html, body").animate({scrollTop:0}, 500);
        return false;
    });
	
	// Input line style Action
	$("div").on("focusin", ".input_box.ip_line input", function () {
		$(this).parent().addClass("on");
	});	
	$("div").on("focusout", ".input_box.ip_line input", function () {		
		$(this).parent().removeClass("on");
	});
	
	/* Select Box (Selectric) */
    if($('.select_box').length > 0){
        $('.select_box').selectric({
            preventWindowScroll: false,
        });
    }
    
    $(".course_list li").mouseover(function(){
        $(this).addClass("on");
    });
    $(".course_list li").mouseleave(function(){
        $(this).removeClass("on");
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
// Login Tab
function loginFindTab() {
    var $tbtn = $(".tab_find li");
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
// Sub Section Tab
function subSecTab() {
    var $tbtn = $(".tab_sub_sec li");
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
// 숫자만
function onlyNum() {
    $( '.onlyNum' ).on("keyup blur", function() {
        var rgEx = /^[0-9]*$/g;
        var chkEx = rgEx.exec($(this).val());
        if(!chkEx){
            $(this).val( $(this).val().replace( /[^0-9]/gi, '' ));
        } 
    });
}

// autocomplete
function lf_org_ac() {
    var name = ["김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]","김사랑 [계열사명/아이디]"];

    $(".lf_org_ac").autocomplete({
        source: name,
        select: function(event, ui) {
            console.log(ui.item);
        },
        focus: function(event, ui) {
            return false;
        }
    });
}