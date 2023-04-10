<?php

session_start();

$id_cancion = $_POST['id'];
$miRepertorio_1 = $_POST['value'];

$contador1= 1;
$contador2= 2;
$contador3= 3;
$miRepertorio_1 = 1;

$file_1 = "../miBlibioteca/todasLasCanciones.json";

$file_get_contents = file_get_contents($file_1);

$json_decode = json_decode($file_get_contents, true)['cancion'];

        foreach ($json_decode as $key => $value){

            if ($value['id_cancion'] == $id_cancion)
            {

                $json_decode[$key]['miRepertorio_1'] = $miRepertorio_1;
                
            }

        }

        // encode array to json and save to file
        file_put_contents($file_1, json_encode(array('cancion' => $json_decode), JSON_PRETTY_PRINT));

        $actualizar2['numero'][] = $contador1;

	echo json_encode($actualizar2);

?>