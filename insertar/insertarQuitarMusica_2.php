<?php

session_start();

$id_cancion = $_POST['id'];
$titulo = $_POST['titulo'];

$quitarMusica=0;

$file_1 = "../miBlibioteca/todasLasCanciones.json";
      
            // read json file
$data = file_get_contents($file_1);

// decode json to associative array
$json_decode = json_decode($data, true)['cancion'];

    foreach ($json_decode as $key => $value){

      if ($value['id_cancion'] == $id_cancion)
        {
            $json_decode[$key]['miRepertorio_2'] = $quitarMusica;
            $json_decode[$key]['numeroMiRepertorio_2'] = $quitarMusica;
        }

    }

// rebase array
$json_decode = array_values($json_decode);

// encode array to json and save to file
file_put_contents($file_1, json_encode(array('cancion' => $json_decode), JSON_PRETTY_PRINT));

?>