<?php

session_start();

$id_cancion = $_POST['id_cancion'];
$letra = $_POST['letra'];
$titulo = $_POST['titulo'];
$tono = $_POST['tono'];
$formularioEditarBorrarNumero = $_POST['formularioEditarBorrarNumero'];
$formularioEditarBorrarNumero2 = $_POST['formularioEditarBorrarNumero2'];

$file_1 = "../miBlibioteca/todasLasCanciones.json";

// read json file
$file_get_contents = file_get_contents($file_1);

// decode json to associative array
$json_decode = json_decode($file_get_contents, true)['cancion'];

$id_contador = 1;
$id_cancion_contador = 1;
$numero = 1;

        foreach ($json_decode as $key => $value){

            if ($value['id_cancion'] == $id_cancion)
            {
                $json_decode[$key]['titulo'] = $titulo;
                $json_decode[$key]['tono'] = $tono;
                $json_decode[$key]['letra'] = $letra;

                if (empty($formularioEditarBorrarNumero)) {
                    $json_decode[$key]['numeroMiRepertorio_1'] = 0;
                }elseif (!empty($formularioEditarBorrarNumero)) {
                    $json_decode[$key]['numeroMiRepertorio_1'] = $formularioEditarBorrarNumero;
                }

                if (empty($formularioEditarBorrarNumero2)) {
                    $json_decode[$key]['numeroMiRepertorio_2'] = 0;
                }elseif (!empty($formularioEditarBorrarNumero2)) {
                    $json_decode[$key]['numeroMiRepertorio_2'] = $formularioEditarBorrarNumero2;
                }
                
            }

        }

        foreach ($json_decode as $key => $value){

                $json_decode[$key]['id'] = $id_contador++;
                $json_decode[$key]['id_cancion'] = $id_cancion_contador++;
                $json_decode[$key]['numero'] = $numero++;
                
        }

// encode array to json and save to file
file_put_contents($file_1, json_encode(array('cancion' => $json_decode), JSON_PRETTY_PRINT));

echo json_encode($data);

?>