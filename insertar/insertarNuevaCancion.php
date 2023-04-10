<?php

session_start();

    $titulo = $_POST['titulo'];
    $tono = $_POST['tono'];
    $letra = $_POST['letra'];

    $file_1 = "../miBlibioteca/todasLasCanciones.json";

    $contador1 = 1;
    $contador2 = 2;
    $contador3 = 3;
    $numero = 1;
    $id_contador = 1;
    $id_cancion_contador = 1;
   
    
      if(!file_exists($file_1)){

            $array_1 = array('cancion' =>
        
                            array(

                                array(
                                    "id" => "01",
                                    "id_usuario" => "01",
                                    "id_cancion" => "02",
                                    "id_programa" => "01",
                                    "id_repetida" => "01",
                                    "numero" => $numero,
                                    "titulo" => $titulo,
                                    "tono" => $tono,
                                    "letra" => $letra,
                                    "numeroMiRepertorio_1" => 0,
                                    "numeroMiRepertorio_2" => 0,
                                    "miRepertorio_1" => 0,
                                    "miRepertorio_2" => 0,
                                    "versionCancionUno" => "",
                                    "versionCancionDos" => ""
                                )
                            )
                        );

                $fopen_1 = fopen($file_1, "a+");
                fwrite($fopen_1, json_encode($array_1, JSON_PRETTY_PRINT));
                fclose($fopen_1);
                
                $data2['contador'][] = $contador1;


            }elseif (file_exists($file_1)){


            $array_1 = 

                array(
                        "id" => "01",
                        "id_usuario" => "01",
                        "id_cancion" => "02",
                        "id_programa" => "01",
                        "id_repetida" => "01",
                        "numero" => $numero,
                        "titulo" => $titulo,
                        "tono" => $tono,
                        "letra" => $letra,
                        "numeroMiRepertorio_1" => 0,
                        "numeroMiRepertorio_2" => 0,
                        "miRepertorio_1" => 0,
                        "miRepertorio_2" => 0,
                        "versionCancionUno" => "",
                        "versionCancionDos" => ""
                );

                $file_get_contents = file_get_contents($file_1);
                $json_decode = json_decode($file_get_contents, true);
                array_push($json_decode['cancion'], $array_1);
                $json_encode = json_encode($json_decode, JSON_PRETTY_PRINT);
                file_put_contents($file_1, $json_encode);

                // read json file
                $data = file_get_contents($file_1);

                // decode json to associative array
                $json_decode2 = json_decode($data, true)['cancion'];


                foreach ($json_decode2 as $key => $value){

                    $json_decode2[$key]['id'] = $id_contador++;
                    $json_decode2[$key]['id_cancion'] = $id_cancion_contador++;
                    $json_decode2[$key]['numero'] = $numero++;
                
                }

                // encode array to json and save to file
                file_put_contents($file_1, json_encode(array('cancion' => $json_decode2), JSON_PRETTY_PRINT));


                $data2['contador'][] = $contador1;

      }else{
                $data2['contador'][] = $contador2;
      }

      echo json_encode($data2);

?>