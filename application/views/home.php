<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<div class="container-fluid">
    <div class="jumbotron">
        <h1 class="display-4">BIO TOOL</h1>
        <p class="lead">Como utilizar a calculadora</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
<!--        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>-->
    </div>
</div>
<div class="card">
    <h5 class="card-header">Calculadora</h5>
    <div class="card-body">
        <form method="post" action="<?php echo base_url('calculator/submit_values');?>" onsubmit="event.preventDefault(); submmitCalculaterValues();" id="CALC_form">
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <label>Sexo *</label>
                    <div class="row pl-4">
                        <div class="form-check col-xs-6 col-sm-3">
                            <input type="radio" class="form-check-input" id="gender_m" name="gender" value="m" required>
                            <label class="form-check-label" for="gender_m">Homem</label>
                        </div>
                        <div class="form-check col-xs-6 col-sm-3">
                            <input type="radio" class="form-check-input" id="gender_f" name="gender" value="f" required>
                            <label class="form-check-label" for="gender_f">Mulher</label>
                        </div>
                    </div>
                </div>
                <div class="form-group col-sm-6">
                    <label for="age">Idade *</label>
                    <select class="form-control" id="age" name="age" required>
                        <option value="1829">18-29</option>
                        <option value="3039">30-39</option>
                        <option value="4049">40-49</option>
                        <option value="5059">50-59</option>
                        <option value="1859">18-59 (for testing)</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="calc_CT">Colesterol total (TC)</label>
                    <input type="number" min="0" class="form-control" id="calc_CT" name="TC" >
                </div>
                <div class="form-group col-sm-6">
                    <label for="calc_CLBD">Colesterol das lipoproteínas de baixa densidade (LDL-C)</label>
                    <input type="number" min="0" class="form-control" id="calc_CLBD" name="LDL_C" >
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="calc_CLAD">Colesterol das lipoproteínas de alta densidade (HDL-C)</label>
                    <input type="number" min="0" class="form-control" id="calc_CLAD" name="HDL_C" >
                </div>
                <div class="form-group col-sm-6">
                    <label for="calc_T">Triglicéridos (TG)</label>
                    <input type="number" min="0" class="form-control" id="calc_T" name="TG" >
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="calc_AB">Apolipoproteína B (ApoB)</label>
                    <input type="number" min="0" class="form-control" id="calc_AB" name="ApoB" >
                </div>
                <div class="form-group col-sm-6">
                    <label for="calc_AA">Apolipoproteína A1 (ApoA1)</label>
                    <input type="number" min="0" class="form-control" id="calc_AA" name="ApoA" >
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="calc_HDL_C">Non-HDL-C</label>
                    <input type="number" min="0" class="form-control" id="calc_HDL_C" name="Non_HDL_C" readonly>
                    <small class="form-text text-muted">Calculado automaticamente (TC menos HDL-C)</small>
                </div>
                <div class="form-group col-sm-6">
                    <label for="calc_CPDLBD">Colesterol das partículaspequenas e densas das lipoproteínas de baixa densidade (sdLDL-C)</label>
                    <input type="number" min="0" class="form-control" id="calc_CPDLBD" name="sdLDL_C" >
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="calc_LA">Lipoproteína(a) (Lp(a))</label>
                    <input type="number" min="0" class="form-control" id="calc_LA" name="Lp_a" >
                </div>
                <div class="form-group col-sm-6">
                    <label for="calc_AB_AA">ApoB/ApoA1</label>
                    <input type="number" min="0" class="form-control" id="calc_AB_AA" name="ApoB_ApoA" readonly>
                    <small class="form-text text-muted">Calculado automaticamente (ApoB a dividir por AboA1)</small>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="calc_sdLDL_LDL">sdLDL-C/LDL-C</label>
                    <input type="number" min="0" class="form-control" id="calc_sdLDL_LDL" name="sdLDL_C_LDL_C" readonly>
                    <small class="form-text text-muted">Calculado automaticamente (sdLDL-C a dividir por LDL-C)</small>
                </div>
                <div class="form-group col-sm-6">
                    <label for="calc_RC">Colesterol remanescente</label>
                    <input type="number" min="0" class="form-control" id="calc_RC" name="RC" readonly>
                    <small class="form-text text-muted">Calculado automaticamente (TC menos LDL-C e HDL-C)</small>
                </div>
            </div>
            <div class="calc-btns text-right">
                <span class="text-warning d-none">Campos mal preenchidos.</span>
                <button class="btn btn-primary" id="CALC_Send_BTN" type="submit" data-loading-text="A Calcular <i class='fas fa-spinner fa-spin'></i>" data-original-text="Calcular">Calcular</button>
                <button class="btn btn-light" type="reset">Reset</button>
            </div>
        </form>
        <!-- jQuery Form -->
        <script type="text/javascript" src="<?php echo base_url('plugin/jQuery_Form/jquery.form.js');?>"></script>
        <!-- CALCULATOR JS-->
        <script type="text/javascript" src="<?php echo base_url('custom/js/calculator.js?cleancache=true');?>"></script>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="calc_result_modal" tabindex="-1" role="dialog" aria-labelledby="calc_result_modal_title" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="calc_result_modal_title">Resultado</h5>
                <div class="btn-group" id="resultPresenterToggle" role="group" aria-label="Apresentação dos Resultados">
                    <button type="button" class="btn btn-primary btn-changeView active" data-target="graph">Paciente</button>
                    <button type="button" class="btn btn-primary btn-changeView" data-target="table">Proficional de Saúde</button>
                </div>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>
            <div class="modal-body">
                <div class="row" id="graphResult">

                </div>
                <div id="tableResult">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Marcador</th>
                                <th scope="col">Percentile</th>
                            </tr>
                        </thead>
                        <tbody id="tableResult_tbody">
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>