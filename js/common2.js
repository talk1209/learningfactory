$(document).ready(function() {
	$(".checkall").next('label').click(function(){
        //클릭되었으면
        if($(this).prev().prop("checked")){
            $(this).nextAll('input').prop("checked",false);
            //클릭이 안되있으면
        }else{
            $(this).nextAll('input').prop("checked",true);
        }
    })
});