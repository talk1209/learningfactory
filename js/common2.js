$(document).ready(function() {
	// Faq slide
   	$('.table_faq_list').find('dt a').on('click', function(){
		var $td = $(this).parent().parent();
		if($td.hasClass('on')){
			$td.removeClass('on');
		}else{
			$td.addClass('on');
		}
	});

	// Tool tip
	$('.tool_tip').find('img').on({
		
		mouseenter: function(){
			var $str;
			$str = '<div class="tool_top_box">';
			$str += '<div class="tool_top_box_inner">'+$(this).attr('alt')+'</div>';
			$str += '<div class="tool_top_box_arrow"></div>';
			$str += '</div>';
			$(this).parent().append($str);
		},mouseleave: function(){
			$('.tool_top_box').remove();
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
	});

	$('.star_input').find('input').on('click', function(){
		var $score = Number($(this).val());
		$(this).closest('.review_star').find('.i_rating').html($score.toFixed(1));
	})
});