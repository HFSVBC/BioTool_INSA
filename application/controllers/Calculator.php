<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calculator extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

        $this->load->model('calc_model');
    }

    public function results()
    {
        $result = array('success' => false, 'message' => "");
        $config = array(
            array(
                'field' => 'gender',
                'label' => "Patient Gender",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'age',
                'label' => "Patient Age",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'TC',
                'label' => "Patient TC",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'LDL_C',
                'label' => "Patient LDL_C",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'HDL_C',
                'label' => "Patient HDL_C",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'TG',
                'label' => "Patient TG",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'ApoB',
                'label' => "Patient ApoB",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'ApoA',
                'label' => "Patient ApoA",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'Non_HDL_C',
                'label' => "Patient Non_HDL_C",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'sdLDL_C',
                'label' => "Patient sdLDL_C",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'Lp_a',
                'label' => "Patient Lp_a",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'ApoB_ApoA',
                'label' => "Patient ApoB_ApoA",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'sdLDL_C_LDL_C',
                'label' => "Patient sdLDL_C_LDL_C",
                'rules' => 'trim|numeric'
            ),
            array(
                'field' => 'RC',
                'label' => "Patient RC",
                'rules' => 'trim|numeric'
            ),
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true) {
            $result['success'] = true;
            $result['message'] = $this->calc_model->getPercentile();

        }else{
            $result['success'] = false;
            $result['message'] = validation_errors();
        }
        echo json_encode($result);
    }
}