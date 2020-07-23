$(document).ready(function() {
    //PC GNB
    var snb_bg = $('#snb_bg')
    var snb_bg_cs = $('#snb_bg')
    var timeout = 0;
    var hovering = false;
    snb_bg.hide();
    snb_bg_cs.hide();
    
    $('.gnb_ex')
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

	// 고객센터 2depth
    $('.gnb_cs')
        .on("mouseenter", function () {
        hovering = true;
        // Open the snb_bg
        $('#snb_bg_cs')
            .stop(true, true)
            .slideDown('fast');
 
        if (timeout > 0) {
            clearTimeout(timeout);
        }
    })
        .on("mouseleave", function () {
        resetHover();
    });
 
    $("#snb_bg_cs")
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
            $('#snb_bg_cs').stop(true, true).slideUp('fast');
        }
    };

    function resetHover() {
        // Allow the menu to close if the flag isn't set by another event
        hovering = false;
        // Set the timeout
        startTimeout();
    };
    
     /* Layer Popup Body Lock*/
    if ($(".layer_popup").hasClass("visible")) {
        $('body').addClass("lock"); // body scroll 잠금
    } else {
        $('body').removeClass("lock");
    }
    
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
				delay: 5000,
				disableOnInteraction: false,
			  },
			  slidesPerView: 1,
			  navigation: { //200706 추가
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
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
    
    if($('.card_learning_slider').length > 0){
        var cardLearning = new Swiper('.card_learning_slider', {
            //loop: true,
			slidesPerView: 1,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar : {
                el : '.swiper-scrollbar',
                snapOnRelease:true,
                draggable : true
            },
        });
    };

	/* Swiper - 내가 구독한 채널 */
	if($('.my_channel_course_container').length > 0){
		var learningMainCourse = new Swiper('.my_channel_course_container', {
			loop: false,
			slidesPerView: 8,
			slidesPerGroup: 8,
			speed: 500,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	};

	/* Swiper - 인기채널 */
	if($('.popular_channel_course_container').length > 0){
		var learningMainCourse = new Swiper('.popular_channel_course_container', {
			loop: false,
			slidesPerView: 4,
			spaceBetween: 36,
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
        
    $(".swiper-container .swiper-slide").hover(
        function() {
            learningMainVisual.autoplay.stop();
        }, function() {
            learningMainVisual.autoplay.start();
        }
    );
    $(".main_course_container .swiper-slide").hover(
        function() {
            learningMainCourse.autoplay.stop();
        }, function() {
            learningMainCourse.autoplay.start();
        }
    );
    $(".new_course_container .swiper-slide").hover(
        function() {
            mainNewCourse.autoplay.stop();
        }, function() {
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
    
	/* task ast - focus event */
	$('div').on('focusin', '.input_box .ip_task_subj', function () {
		$(this).next().hide();
    });
	$('div').on('focusout', '.input_box .ip_task_subj', function () {
        $(this).next().show();
    });
	$('div').on('focusout', '.input_box .ip_task_subj', function () {
        if ($(this).val().length > 0) { // check if value changed        
            $(this).next().hide();
        } else {
           $(this).next().show();
        }
    });

	/* task ast - focus event */
	$('div').on('focusin', '.input_box .ip_ast', function () {
		$(this).next().hide();
    });
	$('div').on('focusout', '.input_box .ip_ast', function () {
        $(this).next().show();
    });
	$('div').on('focusout', '.input_box .ip_ast', function () {
        if ($(this).val().length > 0) { // check if value changed        
            $(this).next().hide();
        } else {
           $(this).next().show();
        }
    });
    
    /* Change Pw */
    $( '#btn_chg' ).on("click", function() {
		$(this).hide();
        $('.change_pw_box').show();
	});
    $('input.ip_active').on('keyup', function() {
        $(this).addClass("theme_bd")
    });
    $('input.ip_active').on('focusout', function() {
        $(this).removeClass("theme_bd")
    });

    /* select_box option 직접입력 */
    $('.sel_direct_ip').on('change', function(){
       var state = $(this).find('option:selected').val();
       if ( state == 'directInput' ) {
            $(this).parents(".selectric-select_box").next(".direct_ip_box").show();
        } else {
           $(this).parents(".selectric-select_box").next(".direct_ip_box").hide();
           $(this).parents(".selectric-select_box").next(".direct_ip_box").children().val('');
        }
    });
    
	/* Join_terms - Checkbox All Chk */   
    $("#cardAllChk").click(function(){
        if($("#cardAllChk").prop("checked")) {
            $(".regi_card .upload_list li input[name='uploadCardList']").prop("checked",true);         
        } else {
            $(".regi_card .upload_list li input[name='uploadCardList']").prop("checked",false);       
        } 
    });    
    
    
    
    
    
    
    
    // Faq slide
   	$('.table_faq_list').find('dt a').on('click', function(){
		var $td = $(this).parent().parent();
		if($td.hasClass('on')){
			$td.removeClass('on');
		}else{
			$td.addClass('on');
		}
	});



	// Tool tip  - 20200609 수정
	$('.tool_tip').find('img').on({
		mouseenter: function(){
			$(this).next().css('display','block');
		},mouseleave: function(){
			$(this).next().css('display','none');
		}
	});

	// Review edit
	$('.btn_review_option').on('click', function(){
		$(this).parent().find('.more_box').toggle();
	});

	$('.more_edit').on('click', function(){
		$(this).closest('.review_option').find('.more_box').toggle();
		$(this).closest('.list_con').find('.review_con_text').css('display','none');
		$(this).closest('.list_con').find('.review_date').css('display','none');
		$(this).closest('.list_con').find('.review_form').css('display','block');
		$(this).closest('.list_con').find('.reiview_star_view').css('display','none');
		$(this).closest('.list_con').find('.review_star_write').css('display','inline-block');
	});

	$('.star_input').find('input').on('click', function(){
		var $score = Number($(this).val());
		$(this).closest('.review_star').find('.i_rating').html($score.toFixed(1));
	})

	// 링크 복사
	function copyToClipboard(val) {
	  var t = document.createElement("textarea");
	  document.body.appendChild(t);
	  t.value = val;
	  t.select();
	  document.execCommand('copy');
	  document.body.removeChild(t);
	}

	$('.btn_copy').on('click', function() {
		$str = $(this).parent().find('a').text();
		copyToClipboard($str);
		alert('복사되었습니다.');
	});

	$('.btn_copy2').on('click', function() {
		$str = $(this).val();
		copyToClipboard($str);
		alert('복사되었습니다.');
	});






	// 20200615 추가
	/* aside Tab */
	asideTab();

	// Review edit
	$('.btn_option').on('click', function(){
		$(this).parent().find('.more_box').toggle();
	});

	$('.more_comment_edit').on('click', function(){
		$(this).closest('.more_box').toggle();
		$(this).closest('.aside_review_list_li').find('.favorite').css('display','none');
		$(this).closest('.aside_review_list_li').find('.con').css('display','none');
		$(this).closest('.aside_review_list_li').find('.input').css('display','block');
	});

	$('.more_bookmark_edit').on('click', function(){
		$(this).closest('.more_box').toggle();
		$(this).closest('.box_cont_inner').addClass('on theme_bg_o10 theme_color theme_bd');
		$(this).closest('.box_cont_inner').next('.bookmark_input').css('display','block');
	});

	$('.star_input').find('input').on('click', function(){
		var $score = Number($(this).val());
		$(this).closest('.review_star').find('.i_rating').html($score.toFixed(1));
	})

	/* 학습피스상세 사이드 접기 */
	$('.learning_piece_aside_close').on('click', function(){
		$wrap = $('.learning_piece');
		if($wrap.hasClass('full_size')){
			$wrap.removeClass('full_size');
		}else{
			$wrap.addClass('full_size');
			$('.learning_piece').attr('height:auto;');
		}

        // swiper update
		if($('.card_learning_slider').length > 0){
			var cardLearning = document.querySelector('.card_learning_slider').swiper
			if($wrap.hasClass('full_size')){
				cardLearning.update();
			}else{
				cardLearning.update();
			}
		}
	});

	// aside Review edit
	$('.more_review_edit').on('click', function(){
		$(this).closest('.more_box').toggle();
		$(this).closest('.list_con').find('.review_con_text').css('display','none');
		$(this).closest('.list_con').find('.review_date').css('display','none');
		$(this).closest('.list_con').find('.review_form').css('display','block');
	});
	
	

	// Tool tip2
	$('.btn_tool_tip').on({
		mouseenter: function(){
			$(this).next().css('display','block');
		},mouseleave: function(){
			$(this).next().css('display','none');
		}
	});

	$('.more_reply_edit').on('click', function(){
		$(this).closest('.more_box').toggle();
		$(this).closest('.reply_list_li').find('.i_content').css('display','none');
		$(this).closest('.reply_list_li').find('.i_date').css('display','none');
		$(this).closest('.reply_list_li').find('.hidden_input').css('display','block');
	});

	$("#checkall").next('label').click(function(){
		
        //클릭되었으면
        if($("#checkall").prop("checked")){
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
            $(".chk_id").prop("checked",false);
            //클릭이 안되있으면
        }else{
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
            $(".chk_id").prop("checked",true);
        }
    })




	$('.view_btn').on('click', function(){
		if($(this).hasClass('view_down')){
			$(this).parent().next('ul').slideDown(300);
		}

		if($(this).hasClass('view_up')){
			$(this).parent().next('ul').slideUp(300);
		}
	});


	// 좋아요
	$('.btn_favorite').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on theme_color theme_bd theme_color theme_bd');
		}else{
			$(this).addClass('on theme_color theme_bd theme_color theme_bd');
		}
	});

	$('.qa_slide').on('click', function(){
		if($(this).hasClass('on')){
			$(this).next('.tr_detail').css('display','none');
			$(this).removeClass('on');
		}else{
			$(this).next('.tr_detail').css('display','table-row');
			$(this).addClass('on');
		}
	});

	// input 내용삭제 버튼생성
	$('.auto_cancle input').keydown(function(){
        $(this).parent().addClass('on');
    });

	$('.btn_input_cancle').on('click', function(){
		$(this).parent().removeClass('on');
		$(this).parent().find('input').val('');
	});

	// 인풋 +, - 카운트 변경
	$('.btn_cnt').on('click', function(){
		$cnt = $(this).parent().find('.cnt');
		$cnt_val = $cnt.val();
		if($(this).hasClass('btn_cnt_down')){
			$cnt_val--;
			if($cnt_val < 0){
				$cnt_val = 0;
			}
		}else if($(this).hasClass('btn_cnt_up')){
			$cnt_val++;
		}
		$cnt.val($cnt_val);
	});

	//일반 num_only : 무조건 숫자만입력되게
    $(document).on('keypress', 'input.num_only', function(e){
        if(e.which && (e.which < 48 || e.which > 57) ) e.preventDefault();
    });

    $(document).on('keyup', 'input.num_only', function(e){
        if( $(this).val() != null && $(this).val() != '' ) {
            var tmps = parseInt($(this).val().replace(/[^0-9]/g, '')) || 0;
            $(this).val(tmps);
        }
    });

    //금액입력자동콤마 num_only2 : 숫자입력시 3자리단위로 콤마입력
    $(document).on('keypress', 'input.num_only2', function(e){
        if(e.which && (e.which < 48 || e.which > 57) ) e.preventDefault();
    });

    $(document).on('keyup', 'input.num_only2', function(e){
        if( $(this).val() != null && $(this).val() != '' ) {
            //var tmps = $(this).val().replace(/[^0-9]/g, '');
            var tmps = parseInt($(this).val().replace(/[^0-9]/g, '')) || 0;
            var tmps2 = tmps.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            $(this).val(tmps2);
        }
    });
    
    /* Main bn 갯수에 따라 클래스 제어 */
    $(".main_bn_wrap").is(function(){
        var chkBnLength = $('.main_bn_wrap div').length;
        
        if(chkBnLength == 1) {
            $(".main_bn_wrap").addClass("bn1");
        } else if (chkBnLength == 2) {
            $(".main_bn_wrap").removeClass("bn1");
            $(".main_bn_wrap").addClass("bn2");
        } else if (chkBnLength == 3) {
            $(".main_bn_wrap").removeClass("bn1");
            $(".main_bn_wrap").removeClass("bn2");
            $(".main_bn_wrap").addClass("bn3");
        } else if (chkBnLength == 4) {
            $(".main_bn_wrap").removeClass("bn1");
            $(".main_bn_wrap").removeClass("bn2");
            $(".main_bn_wrap").removeClass("bn3");
            $(".main_bn_wrap").addClass("bn4");
        } 
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
    $tbtn.eq(0).addClass("on").addClass("theme_bg");

    $tbtn.click(function(e){
    
        e.preventDefault();

        idx = $(this).index();

        $tbtn.removeClass();
        $tbtn.eq(idx).addClass("on").addClass("theme_bg");;
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
    $tbtn.eq(0).addClass("on").addClass("theme_bg").addClass("theme_bd");

    $tbtn.click(function(e){
    
        e.preventDefault();

        idx = $(this).index();

        $tbtn.removeClass();
        $tbtn.eq(idx).addClass("on").addClass("theme_bg").addClass("theme_bd");
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
    $tbtn.eq(0).addClass("on").addClass("theme_bg");

    $tbtn.click(function(e){
    
        e.preventDefault();

        idx = $(this).index();

        $tbtn.removeClass();
        $tbtn.eq(idx).addClass("on").addClass("theme_bg");
        $tab_contentsOb.hide();
        $tab_contentsOb.eq(idx).show();       
    });
}
// 정규식 - 숫자만
function onlyNum() {
    $( '.onlyNum' ).on("keyup blur", function() {
        var rgEx = /^[0-9]*$/g;
        var chkEx = rgEx.exec($(this).val());
        if(!chkEx){
            $(this).val( $(this).val().replace( /[^0-9]/gi, '' ));
        } 
    });
}

/* Calendar Start & End  */
function startDate(){
    //var today = new Date();
    //var tomorrow = new Date(Date.parse(today) + (1000 * 60 * 60 * 24));
    //datepicker    
    $('.start_date').datepicker({
        inline: true,
        firstDay: 0,
        showOtherMonths: true,
        showMonthAfterYear: true,
        dateFormat: "yy.mm.dd",
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames:  [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        monthNamesShort: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        //changeYear: true, //콤보박스에서 년 선택 가능
        //changeMonth: true, //콤보박스에서 월 선택 가능
        beforeShow: function(input, inst) {            
            $('#ui-datepicker-div').addClass('comm_calendar');
        },
        closeText:'닫기',
        showButtonPanel: true,
        //minDate: today,
        onClose: function( selectedDate ) {
            //$('#ui-datepicker-div').removeClass('month_calendar');
            // 시작일 datepicker가 닫힐때
            // 종료일의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
            $('.end_date').datepicker( "option", "minDate", selectedDate );
                
        }, //onClose
        onSelect: function (dateText, inst) { //date select
            //$('#ui-datepicker-div').removeClass('month_calendar');
            $('.comm_calendar').addClass('checked');            
        } //onSelect
    });    
}
function endDate(){
    //datepicker    
    $('.end_date').datepicker({
        inline: true,
        firstDay: 0,
        showOtherMonths: true,
        showMonthAfterYear: true,
        dateFormat: "yy.mm.dd",
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames:  [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        monthNamesShort: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        //changeYear: true, //콤보박스에서 년 선택 가능
        //changeMonth: true, //콤보박스에서 월 선택 가능
        beforeShow: function(input, inst) {            
            $('#ui-datepicker-div').addClass('comm_calendar');
        },
        closeText:'닫기',
        showButtonPanel: true,
        //minDate: today,
        onClose: function( selectedDate ) {
            // 시작일 datepicker가 닫힐때
            // 종료일의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
            $('.start_date').datepicker( "option", "maxDate", selectedDate );   
            //$('#ui-datepicker-div').removeClass('month_calendar');
        }, //onClose
        onSelect: function (dateText, inst) { //date select
            $('.comm_calendar').addClass('checked');
            //$('#ui-datepicker-div').removeClass('month_calendar');
        } //onSelect
    });
}
//div Accordion
function divAccodion() {
    $(".box_title").on('click', function() {   
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).next('.box_cont').slideToggle(300);
        $(this).next('.box_cont').parent().siblings().children('.box_cont').slideUp(300);//siblings('.faq_a').hide();
    });
}

function divAccodion2() {
	$(".active .box_cont").css('display','block');
    $(".box_title").on('click', function() {   
        $(this).parent().toggleClass('active');
        //$(this).parent().siblings().removeClass('active');
        $(this).next('.box_cont').slideToggle(300);
        //$(this).next('.box_cont').parent().siblings().children('.box_cont').slideUp(300);//siblings('.faq_a').hide();
    });
}











// 20200615 추가
// aside Tab
function asideTab(){
    var $tbtn = $(".tab_aside li");
    var $tbtn_leng = $tbtn.length;
    //$tbtn.width(100/$tbtn_leng+"%");
    var $tab_contentsOb = $(".tab_contents");

    $tab_contentsOb.hide();
    $tab_contentsOb.eq(0).show();
    $tbtn.eq(0).addClass("on").addClass("theme_bg");

    $tbtn.click(function(e){
    
        e.preventDefault();

        idx = $(this).index();

        $tbtn.removeClass();
        $tbtn.eq(idx).addClass("on").addClass("theme_bg");
        $tab_contentsOb.hide();
        $tab_contentsOb.eq(idx).show();
    });
}


function divAccodion3() {
    $('.box_cont').css('display','none');
	$('.active .box_cont').css('display','block');
    $(".box_title").on('click', function() {
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).next('.box_cont').slideUp(300);
		}else{
			$(this).parent().addClass('active');
			$(this).next('.box_cont').slideDown(300);
		}
    });
}

// 러닝피스 사이즈 조정
function learning_piece_size(){
	/*
	$('.learning_piece').attr('style','height:auto;');
	$('.learning_piece_aside').attr('style','height:auto;');
	$body_height = $('body').innerHeight();
	$con_height = $('.learning_piece').outerHeight();
	$aside_height = $('.learning_piece_aside').outerHeight();
	if($con_height < $aside_height){
		$height = $aside_height;
	}else{
		$height = $con_height;
	}

	if($height < $body_height){
		$height = $body_height;
	}

	$('.learning_piece').attr('style','height:'+$height+'px;');
	$('.learning_piece_aside').attr('style','height:'+$height+'px;');
	*/

	$body_height = $('body').innerHeight();
	$('.learning_piece_aside').attr('style','min-height:'+$body_height+'px;');
}


// 셀렉트박스 선택 시 내용변경 - 개인정보취급방침
function con_change(num){
	$('.con').removeClass('on');
	$('.con').eq(num).addClass('on');
}