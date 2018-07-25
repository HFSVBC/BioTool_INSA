$(window).on('load', function(){
    $('.btn-changeView').on('click', function(){
        changeView($(this));
    });
});
function percentileGraphResult(value, type) {
    console.log('type', type);
    console.log('value', value);
    return `<div class="col-sm-6 mb-3 result_color_scale_cont">
                    <div class="row result_color_scale" id="`+type+`">
                        <span id="value_`+type+`" style="left: `+arrowSpan[convertType[type]["span"]][value]+`%;"></span>
                        <div class="`+colors[convertType[type]["color"]][0]+` p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="`+colors[convertType[type]["color"]][1]+` p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="`+colors[convertType[type]["color"]][2]+` p-2 pb-3 col-3 result_color_scale"></div>
                        <div class="`+colors[convertType[type]["color"]][3]+` p-2 pb-3 col-3 result_color_scale"></div>
                    </div>
                    <label for="`+type+`">`+((convertType[type]["sigla"] != "") ? convertType[type]["sigla"] : convertType[type]["name"])+`</label>
                    <small>`+((convertType[type]["sigla"] != "") ? convertType[type]["name"] : "")+`</small>
                </div>`;
}
{/* <small>`+((convertType[type]["sigla"] != "") ? convertType[type]["name"] : "")+`</small> */}
{/* <p>`+convertType[type]["name"]+`</p> */}
function percentileTableResult(value, type) {
    return `<tr>
                <td>`+((convertType[type]["sigla"] != "") ? convertType[type]["name"] + ` (` + convertType[type]["sigla"] + `)` : convertType[type]["name"])+`</td>
                <td>`+value+`</td>
            </tr>`;
}
// `+value+`
let convertType = {
    "TC": {"name": "Colesterol total", "sigla": "", "span": 'direct_5', "color": 'direct'},
    "LCL_C": {"name": "Colesterol das lipoproteínas de baixa densidade", "sigla": "LDL-C", "span": 'direct_5', "color": 'direct'},
    "HDL_C": {"name": "Colesterol das lipoproteínas de alta densidade", "sigla": "HDL-C", "span": 'inverse', "color": 'inverse'},
    "TG": {"name": "Triglicéridos", "sigla": "","span": 'direct', "color": 'direct'},
    "ApoB": {"name": "Apolipoproteína B", "sigla": "ApoB","span": 'direct_5', "color": 'direct'},
    "ApoA": {"name": "Apolipoproteína A1", "sigla": "ApoA1", "span": 'inverse', "color": 'inverse'},
    "Non_HDL_C": {"name": "não-HDL-C", "sigla": "", "span": 'direct', "color": 'direct'},
    "sdLDL_C": {"name": "Colesterol das partículaspequenas e densas das lipoproteínas de baixa densidade", "sigla": "sdLDL-C", "span": 'direct', "color": 'direct'},
    "Lp_a": {"name": "Lipoproteína(a)", "sigla": "Lp(a)", "span": 'direct', "color": 'direct'},
    "ApoB_ApoA": {"name": "ApoB/ApoA1", "sigla": "", "span": 'direct', "color": 'direct'},
    "sdLDL_C_LDL_C": {"name": "sdLDL-C/LDL-C", "sigla": "", "span": 'direct', "color": 'direct'},
    "RC": {"name": "Colesterol remanescente", "sigla": "VLDL", "span": 'direct', "color": 'direct'},
};
let arrowSpan = {
    'direct': {'5': 5, '5-10': 5, '10': 6.25, '10-25': 9.37, '25': 12.5, '25-50': 12.62, '50': 20, '50-75': 25, '75': 37.5, '75-90': 50, '90': 62.5, '90-95': 75, '95': 87.5},
    'inverse': {'5': 12.5, '5-10': 25, '10': 37.5, '10-25': 50, '25': 56.25, '25-50': 62.5, '50': 68.75, '50-75': 73.13, '75': 81.25, '75-90': 84.38, '90': 87.5, '90-95': 95, '95': 95},
    'direct_5': {'5': 37.5, '5-10': 5, '10': 6.25, '10-25': 9.37, '25': 12.5, '25-50': 12.62, '50': 20, '50-75': 25, '75': 37.5, '75-90': 50, '90': 62.5, '90-95': 75, '95': 87.5}
}
let colors = {
    'direct': ['bg-success', 'bg-warning', 'back-orange', 'bg-danger'],
    'inverse': ['bg-danger', 'back-orange', 'bg-warning', 'bg-success']
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
    console.log(responseText);
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
        $('#graphResult>.row').html(htmlGraph);
        $('#tableResult_tbody').html(htmlTable);
        changeView($('#graphViewTrigger'));
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