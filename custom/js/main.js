"USE STRICT";
$(window).on("load", function() {
    $("#calc_CT, #calc_CLAD").on("keyup", function(){
        calculate_Non_HDL_C();
    });
    $("#calc_AB, #calc_AA").on("keyup", function(){
        calculate_ApoB_ApoA();
    });
    $("#calc_CPDLBD, #calc_CLBD").on("keyup", function(){
        calculate_sdldlC_ldlC();
    });
    $("#calc_CT, #calc_CLBD, #calc_CLAD").on("keyup", function(){
        calculate_remnant_cholesterol();
    });
    $("#calc_CT, #calc_CLAD, #calc_T").on("keyup", function(){
        if(userChangedLDL == false){
            claculate_ldlc();
            calculate_remnant_cholesterol();
        }
    });
    $("#calc_CLBD_activator").on("change", function(){
        if($(this).is(':checked')){
            userChangedLDL = true;
            // $(this).tooltip('hide').attr('data-original-title', 'Automático').tooltip('show');
            $('#calc_CLBD').prop('readonly', false).addClass('b-darker');
        }else{
            userChangedLDL = false;
            // $(this).tooltip('hide').attr('data-original-title', 'Direto').tooltip('show');
            $('#calc_CLBD').prop('readonly', true).removeClass('b-darker');
        }
    });
    reseizeLabel();
    $( window ).resize(function() {
        reseizeLabel();
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

var userChangedLDL = false;

var reseizeLabel = function(){
    var max_h = 0;
    let l = $('#CALC_form>div>div>label');
    l.each(function(){
        let h = $(this).height();
        if(h > max_h)
            max_h = h;
    });
    l.each(function(){
        let h = $(this).height()
        $(this).css('padding-top', max_h-h);
    });
}
var calculate_Non_HDL_C = function() {
    let result = parseInt($("#calc_CT").val()) - parseInt($("#calc_CLAD").val());
    $("#calc_HDL_C").val(result);
}
var calculate_ApoB_ApoA = function() {
    let result = Math.round((parseInt($("#calc_AB").val()) / parseInt($("#calc_AA").val())) * 100) / 100;
    $("#calc_AB_AA").val(result);
}
var calculate_sdldlC_ldlC = function() {
    let result = Math.round((parseInt($("#calc_CPDLBD").val()) / parseInt($("#calc_CLBD").val())) * 100) / 100;
    $("#calc_sdLDL_LDL").val(result);
}
var calculate_remnant_cholesterol = function() {
    let result = parseInt($("#calc_CT").val()) - ( parseInt($("#calc_CLBD").val()) + parseInt($("#calc_CLAD").val()) );
    $("#calc_RC").val(result);
}
var claculate_ldlc = function(){
    let result = parseInt($('#calc_CT').val()) - parseInt($('#calc_CLAD').val()) - parseInt($('#calc_T').val())/5;
    $('#calc_CLBD').val(parseInt(result));
}