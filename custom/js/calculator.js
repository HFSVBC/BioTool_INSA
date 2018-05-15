function percentileResult(value, type) {
    return `<div class="col-sm-6 pb-2 mb-1 result_color_scale_cont">
                    <p>`+convertType[type]+`</p>
                    <div class="row">
                        <span id="value_`+type+`" style="left: `+spanValue[value]+`%;">`+value+`</span>
                        <div class="bg-success p-2 pb-3 col-4 result_color_scale"></div>
                        <div class="bg-warning p-2 pb-3 col-4 result_color_scale"></div>
                        <div class="bg-danger p-2 pb-3 col-4 result_color_scale"></div>
                    </div>
                </div>`;
}
let convertType = {
    "TC": "Colesterol total (TC)",
    "LCL_C": "Colesterol das lipoproteínas de baixa densidade (LDL-C)",
    "HDL_C": "ColesteroL das lipoproteínas de alta densidade (HDL-C)",
    "TG": "Triglicéridos (TG)",
    "ApoB": "Apolipoproteína B (ApoB)",
    "ApoA": "Apolipoproteína A1 (ApoA1)",
    "Non_HDL_C": "Non-HDL-C",
    "sdLDL_C": "Colesterol das partículaspequenas e densas das lipoproteínas de baixa densidade (sdLDL-C)",
    "Lp_a": "Lipoproteína(a) (Lp(a))",
    "ApoB_ApoA": "ApoB/ApoA1",
    "sdLDL_C_LDL_C": "sdLDL-C/LDL-C",
    "RC": "Remnant cholesterol"
};
let spanValue = {
    5: 95,
    10: 83.3333,
    25: 66.6666,
    50: 5,
    75: 66.6666,
    90: 83.3333,
    95: 95
}
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
        let results = response.message;
        var html = "";
        for (var key in results) {
            if (results.hasOwnProperty(key) && results[key][0] == true) {
                console.log(key + " -> " + results[key][1]);
                html += percentileResult(results[key][1], key);
            }
        }
        $('#graphResult').html(html);
        $('#calc_result_modal').modal('show');
    }else {
        $('.calc-btns .text-warning.d-none').addClass('d-inline');
    }
    sub.prop('disabled', false).html(sub.attr('data-original-text'));
}