<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainLoader extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

//        $this->load->view('templates/header');
//        $this->load->view('templates/footer');
    }

	public function index()
	{
        $this->load->view('templates/header');
        $this->load->view('home');
        $this->load->view('templates/footer');
	}
}
