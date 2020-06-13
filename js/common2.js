$(document).ready(function() {
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
		
	});

	// aside Review edit
	$('.more_review_edit').on('click', function(){
		$(this).closest('.more_box').toggle();
		$(this).closest('.list_con').find('.review_con_text').css('display','none');
		$(this).closest('.list_con').find('.review_date').css('display','none');
		$(this).closest('.list_con').find('.review_form').css('display','block');
	});
	
	// 링크 복사
	$('.btn_copy2').on('click', function() {
		$str = $(this).val();
		copyToClipboard($str);
		alert('복사되었습니다.');
	});
});

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
    $(".box_title").on('click', function() {   
        $(this).parent().toggleClass('active');
        $(this).next('.box_cont').slideToggle(300);
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