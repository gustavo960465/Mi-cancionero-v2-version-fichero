<?php

session_start();

$id = $_POST['id'];
$titulo = $_POST['titulo'];

$file_1 = "../miBlibioteca/todasLasCanciones.json";
      
            // read json file
$data = file_get_contents($file_1);

// decode json to associative array
$json_decode = json_decode($data, true)['cancion'];

$arr_index = array();


		foreach ($json_decode as $key => $value){

			if ($value['titulo'] == $titulo)
		    {
		        $arr_index['cancion'] = $key;
		    }

		}

		foreach ($arr_index as $i) {

			unset($json_decode[$i]);
		
		}

// rebase array
$json_decode = array_values($json_decode);

// encode array to json and save to file
file_put_contents($file_1, json_encode(array('cancion' => $json_decode), JSON_PRETTY_PRINT));

?>