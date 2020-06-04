$(document).ready(function() {
   	$('.table_faq_list').find('dt a').on('click', function(){
		$td = $(this).parent().parent();
		if($td.hasClass('on')){
			$td.removeClass('on');
		}else{
			$td.addClass('on');
		}
	});
});