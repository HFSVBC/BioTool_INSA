<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Calc_model extends CI_Model{
    public function getPercentile(){
        $gender        = $this->db->escape($this->input->post('gender'));
        $age           = $this->db->escape($this->input->post('age'));

        $TC            = $this->db->escape($this->input->post('TC'));
        $LCL_C         = $this->db->escape($this->input->post('LDL_C'));
        $HDL_C         = $this->db->escape($this->input->post('HDL_C'));
        $TG            = $this->db->escape($this->input->post('TG'));
        $ApoB          = $this->db->escape($this->input->post('ApoB'));
        $ApoA          = $this->db->escape($this->input->post('ApoA'));
        $Non_HDL_C     = $this->db->escape($this->input->post('Non_HDL_C'));
        $sdLDL_C       = $this->db->escape($this->input->post('sdLDL_C'));
        $Lp_a          = $this->db->escape($this->input->post('Lp_a'));
        $ApoB_ApoA     = $this->db->escape($this->input->post('ApoB_ApoA'));
        $sdLDL_C_LDL_C = $this->db->escape($this->input->post('sdLDL_C_LDL_C'));
        $RC            = $this->db->escape($this->input->post('RC'));

        return array(
            'TC'            => $this->getIndvPercentile($gender, $age, $TC, 'Total Cholesterol'),
            'LCL_C'         => $this->getIndvPercentile($gender, $age, $LCL_C, 'LDL-C'),
            'HDL_C'         => $this->getIndvPercentile($gender, $age, $HDL_C, 'HDL-C'),
            'TG'            => $this->getIndvPercentile($gender, $age, $TG, 'TG'),
            'ApoB'          => $this->getIndvPercentile($gender, $age, $ApoB, 'ApoB'),
            'ApoA'          => $this->getIndvPercentile($gender, $age, $ApoA, 'ApoA1'),
            'Non_HDL_C'     => $this->getIndvPercentile($gender, $age, $Non_HDL_C, 'Non-HDL-C'),
            'sdLDL_C'       => $this->getIndvPercentile($gender, $age, $sdLDL_C, 'sdLDL-C'),
            'Lp_a'          => $this->getIndvPercentile($gender, $age, $Lp_a, 'Lp(a)'),
            'ApoB_ApoA'     => $this->getIndvPercentile($gender, $age, $ApoB_ApoA, 'ApoB/ApoA1'),
            'sdLDL_C_LDL_C' => $this->getIndvPercentile($gender, $age, $sdLDL_C_LDL_C, 'sdLDL-C/LDL-C'),
            'RC'            => $this->getIndvPercentile($gender, $age, $RC, 'Remnant cholesterol')
        );
    }

    private function getIndvPercentile($gender, $age, $value, $type){

        if($value == "''"){
            return array(false, '');
        }else {
            $type = $this->db->escape($type);

            $sql = "SELECT percentile, ABS(val - $value) AS 'dist'
                    FROM data_29uWFp
                    WHERE gender = $gender AND age = $age AND type = $type
                    ORDER BY ABS(val - $value) ASC, percentile ASC
                    LIMIT 2";

            $query = $this->db->query($sql);
            $result = $query->result_array();

            if (!empty($result)) {
                $val;
                if((string)$result[0]['dist'] == (string)$result[1]['dist']){
                    $val = (string)$result[0]['percentile'].'-'.(string)$result[1]['percentile'];
                }else{
                    $val = $result[0]['percentile'];
                }
                return array(true, $val);
            } else {
                return array(false, '');
            }
        }
    }
}
?>