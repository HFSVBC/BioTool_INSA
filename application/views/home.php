<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<div class="container-fluid">
    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
</div>
<div class="card">
    <h5 class="card-header">Calculadora</h5>
    <div class="card-body">
        <form>
            <div class="form-row">
                <div class="form-group col">
                    <label>Sexo</label>
                    <div class="row pl-4">
                        <div class="form-check col-md-3">
                            <input type="radio" class="form-check-input" id="gender_m" name="gender" value="male" required>
                            <label class="form-check-label" for="gender_m">Male</label>
                        </div>
                        <div class="form-check col-md-3">
                            <input type="radio" class="form-check-input" id="gender_f" name="gender" value="female" required>
                            <label class="form-check-label" for="gender_f">Female</label>
                        </div>
                    </div>
                </div>
                <div class="form-group col">
                    <label for="age">Idade</label>
                    <select class="form-control" id="age" required>
                        <option>18-29</option>
                        <option>30-39</option>
                        <option>40-49</option>
                        <option>50-59</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="calc_CT">Colesterol total (TC)</label>
                    <input type="number" min="0" class="form-control" id="calc_CT" required>
                </div>
                <div class="form-group col">
                    <label for="calc_CLBD">Colesterol das lipoproteínas de baixa densidade (LDL-C)</label>
                    <input type="number" min="0" class="form-control" id="calc_CLBD" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="calc_CLAD">ColesteroL das lipoproteínas de alta densidade (HDL-C)</label>
                    <input type="number" min="0" class="form-control" id="calc_CLAD" required>
                </div>
                <div class="form-group col">
                    <label for="calc_T">Triglicéridos (TG)</label>
                    <input type="number" min="0" class="form-control" id="calc_T" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="calc_AB">Apolipoproteína B (ApoB)</label>
                    <input type="number" min="0" class="form-control" id="calc_AB" required>
                </div>
                <div class="form-group col">
                    <label for="calc_AA">Apolipoproteína A1 (ApoA1)</label>
                    <input type="number" min="0" class="form-control" id="calc_AA" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="calc_HDL_C">Non-HDL-C (Non-HDL-C)</label>
                    <input type="number" min="0" class="form-control" id="calc_HDL_C" readonly>
                    <small class="form-text text-muted">Calculado automaticamente</small>
                </div>
                <div class="form-group col">
                    <label for="calc_CPDLBD">Colesterol das partículaspequenas e densas das lipoproteínas de baixa densidade (sdLDL-C)</label>
                    <input type="number" min="0" class="form-control" id="calc_CPDLBD" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="calc_LA">Lipoproteína(a) (Lp(a))</label>
                    <input type="number" min="0" class="form-control" id="calc_LA" required>
                </div>
                <div class="form-group col">
                    <label for="calc_AB_AA">ApoB/ApoA1</label>
                    <input type="number" min="0" class="form-control" id="calc_AB_AA" readonly>
                    <small class="form-text text-muted">Calculado automaticamente</small>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="calc_sdLDL_LDL">sdLDL-C/LDL-C</label>
                    <input type="number" min="0" class="form-control" id="calc_sdLDL_LDL" readonly>
                    <small class="form-text text-muted">Calculado automaticamente</small>
                </div>
                <div class="form-group col">
                    <label for="calc_RC">Remnant cholesterol</label>
                    <input type="number" min="0" class="form-control" id="calc_RC" readonly>
                    <small class="form-text text-muted">Calculado automaticamente</small>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</div>
