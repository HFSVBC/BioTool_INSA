var submmitCalculaterValues = function(){
    var form = $('form#CALC_form');
    var sub = $('button.btn.btn-primary#CALC_Send_BTN');
    $('.calc-btns .text-warning.d-none').removeClass('d-inline');
    sub.prop('disabled', true).html(sub.attr('data-loading-text'));
    var options = {
        success: showResponse
    };
    form.ajaxSubmit(options);
    return false;
}
var showResponse = function(responseText, statusText, xhr, $form){
    var response = JSON.parse(responseText);
    console.log(response);
    var sub = $('button.btn.btn-primary#CALC_Send_BTN');
    sub.prop('disabled', false).html(sub.attr('data-original-text'));
    if(response.success){
        $('#calc_result_modal .modal-body').html(responseText);
        $('#calc_result_modal').modal('show');
    }else {
        $('.calc-btns .text-warning.d-none').addClass('d-inline');
    }
    sub.prop('disabled', false).html(sub.attr('data-original-text'));
}