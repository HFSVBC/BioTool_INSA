function percentileResult(value, type) {
    return `<div class="col-sm-6 pb-2 mb-1 result_color_scale_cont">
                    <p>`+convertType[type]["name"]+`</p>
                    <div class="row">
                        <span id="value_`+type+`" style="left: `+convertType[type]["span"][value]+`%;">`+value+`</span>
                        <div class="bg-success p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="bg-warning p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="back-orange p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="bg-danger p-2 pb-3 col-3 result_color_scale"></div>
                    </div>
                </div>`;
}
let convertType = {
    "TC": {"name": "Colesterol total (TC)", "span": {5: 37.5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "LCL_C": {"name": "Colesterol das lipoproteínas de baixa densidade (LDL-C)", "span": {5: 37.5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "HDL_C": {"name": "ColesteroL das lipoproteínas de alta densidade (HDL-C)", "span": {5: 87.5, 10: 62.5, 25: 37.5, 50: 20, 75: 12.5, 90: 6.95, 95: 5}},
    "TG": {"name": "Triglicéridos (TG)", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "ApoB": {"name": "Apolipoproteína B (ApoB)", "span": {5: 37.5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "ApoA": {"name": "Apolipoproteína A1 (ApoA1)", "span": {5: 87.5, 10: 62.5, 25: 37.5, 50: 20, 75: 12.5, 90: 6.95, 95: 5}},
    "Non_HDL_C": {"name": "Non-HDL-C", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "sdLDL_C": {"name": "Colesterol das partículaspequenas e densas das lipoproteínas de baixa densidade (sdLDL-C)", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "Lp_a": {"name": "Lipoproteína(a) (Lp(a))", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "ApoB_ApoA": {"name": "ApoB/ApoA1", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "sdLDL_C_LDL_C": {"name": "sdLDL-C/LDL-C", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
    "RC": {"name": "Remnant cholesterol", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}},
};
// let spanValueAll = {
//     5: 95,
//     10: 83.3333,
//     25: 66.6666,
//     50: 25,
//     75: 66.6666,
//     90: 83.3333,
//     95: 95
// }
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