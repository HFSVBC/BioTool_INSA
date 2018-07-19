$(window).on('load', function(){
    $('.btn-changeView').on('click', function(){
        changeView($(this));
    });
});
function percentileGraphResult(value, type) {
    return `<div class="col-sm-6 mb-3 result_color_scale_cont">
                    <div class="row result_color_scale" id="`+type+`">
                        <span id="value_`+type+`" style="left: `+convertType[type]["span"][value]+`%;"></span>
                        <div class="`+convertType[type]["color"][0]+` p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="`+convertType[type]["color"][1]+` p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="`+convertType[type]["color"][2]+` p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="`+convertType[type]["color"][3]+` p-2 pb-3 col-3 result_color_scale"></div>
                    </div>
                    <label for="`+type+`">`+((convertType[type]["sigla"] != "") ? convertType[type]["sigla"] : convertType[type]["name"])+`</label>
                    <small>`+((convertType[type]["sigla"] != "") ? convertType[type]["name"] : "")+`</small>
                </div>`;
}
{/* <p>`+convertType[type]["name"]+`</p> */}
function percentileTableResult(value, type) {
    return `<tr>
                <td>`+((convertType[type]["sigla"] != "") ? convertType[type]["sigla"]+" - " : "")+convertType[type]["name"]+`</td>
                <td>`+value+`</td>
            </tr>`;
}
// `+value+`
let convertType = {
    "TC": {"name": "Colesterol total", "sigla": "", "span": {5: 37.5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "LCL_C": {"name": "Colesterol das lipoproteínas de baixa densidade", "sigla": "LDL-C", "span": {5: 37.5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "HDL_C": {"name": "Colesterol das lipoproteínas de alta densidade", "sigla": "HDL-C", "span": {5: 87.5, 10: 62.5, 25: 37.5, 50: 20, 75: 12.5, 90: 6.95, 95: 5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "TG": {"name": "Triglicéridos", "sigla": "","span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "ApoB": {"name": "Apolipoproteína B", "sigla": "ApoB","span": {5: 37.5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "ApoA": {"name": "Apolipoproteína A1", "sigla": "ApoA1", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-danger', 'back-orange', 'bg-warning', 'bg-success']},
    "Non_HDL_C": {"name": "não-HDL-C", "sigla": "", "span": {5: 87.5, 10: 62.5, 25: 37.5, 50: 20, 75: 12.5, 90: 6.95, 95: 5}, "color": ['bg-danger', 'back-orange', 'bg-warning', 'bg-success']},
    "sdLDL_C": {"name": "Colesterol das partículaspequenas e densas das lipoproteínas de baixa densidade", "sigla": "sdLDL-C", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "Lp_a": {"name": "Lipoproteína(a)", "sigla": "Lp(a)", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "ApoB_ApoA": {"name": "ApoB/ApoA1", "sigla": "", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "sdLDL_C_LDL_C": {"name": "sdLDL-C/LDL-C", "sigla": "", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
    "RC": {"name": "Colesterol remanescente", "sigla": "VLDL", "span": {5: 5, 10: 6.25, 25: 12.5, 50: 20, 75: 37.5, 90: 62.5, 95: 87.5}, "color": ['bg-success', 'bg-warning', 'back-orange', 'bg-danger']},
};
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
    var sub = $('button.btn.btn-primary#CALC_Send_BTN');
    sub.prop('disabled', false).html(sub.attr('data-original-text'));
    if(response.success){
        let results = response.message;
        var htmlGraph = "";
        var htmlTable = "";
        for (var key in results) {
            if (results.hasOwnProperty(key) && results[key][0] == true) {
                htmlGraph += percentileGraphResult(results[key][1], key);
                htmlTable += percentileTableResult(results[key][1], key);
            }
        }
        $('#graphResult').html(htmlGraph);
        $('#tableResult_tbody').html(htmlTable);
        $('#calc_result_modal').modal('show');
    }else {
        $('.calc-btns .text-warning.d-none').addClass('d-inline');
    }
    sub.prop('disabled', false).html(sub.attr('data-original-text'));
}
var changeView = function(obj){
    if(obj.attr('data-target')=='graph'){
        $('#graphResult').show();$('#tableResult').hide();
    }else if(obj.attr('data-target')=='table'){
        $('#graphResult').hide();$('#tableResult').show();
    }
    $('.btn-changeView').each(function(){
        $(this).removeClass('active');
    });obj.addClass('active');
}