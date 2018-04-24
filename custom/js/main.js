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
});
var calculate_Non_HDL_C = function() {
    let result = parseInt($("#calc_CT").val()) - parseInt($("#calc_CLAD").val());
    $("#calc_HDL_C").val(result);
}
var calculate_ApoB_ApoA = function() {
    let result = parseInt($("#calc_AB").val()) / parseInt($("#calc_AA").val());
    $("#calc_AB_AA").val(result);
}
var calculate_sdldlC_ldlC = function() {
    let result = parseInt($("#calc_CPDLBD").val()) / parseInt($("#calc_CLBD").val());
    $("#calc_sdLDL_LDL").val(result);
}
var calculate_remnant_cholesterol = function() {
    let result = parseInt($("#calc_CT").val()) - ( parseInt($("#calc_CLBD").val()) + parseInt($("#calc_CLAD").val()) );
    $("#calc_RC").val(result);
}